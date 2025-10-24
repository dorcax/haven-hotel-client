import { useUploadFileMutation } from "@/api/data/uploads.api";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { toast } from "react-toastify";
// import { success } from 'zod';
import { v4 as uuid } from "uuid";
import { success } from "zod";

export interface UploaderItem {
  id: string;
  file: File;
  order:number
  progress: number;
  done: boolean;
  success: boolean;
  cancelled: boolean;
  controller: AbortController;
}
type uploadContextType = {
  uploads: UploaderItem[];
  isUploading: boolean;
  addUploads: (file: File[]) => void;
  startUpload:(items:UploaderItem)=>void
  cancelUpload: (id: string) => void;
  cleanUp: () => void;
};

const UploaderContext = createContext<uploadContextType | null>(null);

export const useUploader =()=>{
    const context =useContext(UploaderContext)
   
    if(!context){
        throw new Error("useUploader must be use within UploaderContext provider")
    }
    return context
}
const UploaderProvider = ({ children }: { children: ReactNode }) => {
  // create a state to hold the upload
   const [uploadFile] =useUploadFileMutation()
  const [uploads, setUploads] = useState<UploaderItem[]>([]);
   const modify =useCallback((id:string , changes:Partial<UploaderItem>)=>{
    setUploads((prev)=>prev.map((upload)=>upload.id ===id ?{...upload,...changes}:upload))

   },[])

  const startUpload = useCallback(async(items: UploaderItem) => {
    const { id, file, controller } = items;
    const signal = controller.signal;

    const onProgress = (progress: number) => modify(id,{progress})
     
    // call the backend api
    try {
      // call the api here
      await uploadFile({file,id,onProgress,signal,order:0}).unwrap()
    //   setUploads((prev) =>
    //     prev.map((upload) =>
    //       upload.id === id ? { ...upload, done: true, success: true } : upload
    //     )
    //   );
    modify(id,{done:true,success:true})
    } catch (error) {
    //   setUploads((prev) =>
    //     prev.map((upload) =>
    //       upload.id === id ? { ...upload, done: false, success: false } : upload
    //     )
    //   );
    modify(id,{done:false,success:false})
    }
  }, [uploadFile,modify]);


    const addUploads = useCallback(
      (files: File[]) => {
        const newItems = files.map((file) => ({
          id: uuid(),
          file,
          order:0,
          progress: 0,
          done: false,
          success: false,
          cancelled: false,
          controller: new AbortController(),
        }));

        setUploads((prev) => [...prev, ...newItems]);
        newItems.forEach(startUpload)
      },
      [startUpload]
    );

//   cancel one upload image 
const cancelUpload=useCallback(async(id:string)=>{
 // find if the id exist  
    setUploads((prev)=>{
        const item =prev.find((f)=>f.id === id)
        if(item) {
            item.controller.abort()
        }
   return  prev.filter((f)=>f.id === id)
    })
   try {
       // Call API to delete the cancelled upload
    // await cleanUploads(id); 
    console.log(`Upload ${id} cleaned up from server`);
   } catch (error:any) {
    toast.error(error)
   }
},[])

const cleanUp =useCallback(()=>{
    uploads.forEach((u)=>u.controller.abort())
    // api to delete upload  
    // cleanUploads(uploads.map=>((u)=>u.id))
    setUploads([])
},[uploads])
const isUploading=useMemo(()=>uploads.some((u)=>!u.done),[uploads])

  return <UploaderContext.Provider value={{uploads,startUpload,addUploads,cleanUp,cancelUpload,isUploading}}>{children}</UploaderContext.Provider>;
};


export default UploaderProvider;
