// // import { useUploadFileMutation } from "@/api/data/uploads.api";
// // import React, {
// //   createContext,
// //   useCallback,
// //   useContext,
// //   useMemo,
// //   useState,
// //   type ReactNode,
// // } from "react";
// // import { toast } from "react-toastify";
// // // import { success } from 'zod';
// // import { v4 as uuid } from "uuid";
// // import { success } from "zod";

// // export interface UploaderItem {
// //   id: string;
// //   file: File;
// //   order:number
// //   progress: number;
// //   done: boolean;
// //   success: boolean;
// //   cancelled: boolean;
// //   controller: AbortController;
// // }
// // type UploadCategory ="image"|"pdf"

// // type uploadContextType = {
// //   uploads: Record<UploadCategory,UploaderItem[]>;
// //   isUploading: boolean;
// //   addUploads: (type:UploadCategory,file: File[]) => void;
// //   startUpload:(type:UploadCategory,item:UploaderItem)=>void
// //   cancelUpload: (type:UploadCategory,id: string) => void;
// //   cleanUp: (type:UploadCategory) => void;
// // };

// // const UploaderContext = createContext<uploadContextType | null>(null);

// // export const useUploader =(type?:UploadCategory)=>{
// //     const context =useContext(UploaderContext)
   
// //     if(!context){
// //         throw new Error("useUploader must be use within UploaderContext provider")
// //     }
// //       if (type) {
// //     return {
// //       uploads: context.uploads[type],
// //       startUpload: (item:UploaderItem) => context.startUpload(type,item),
// //       addUploads: (files: File[]) => context.addUploads(type, files),
// //       cancelUpload: (id: string) => context.cancelUpload(type, id),
// //       cleanUp: () => context.cleanUp(type)
// //     }
// //   }
// //     return context
// // }
// // const UploaderProvider = ({ children }: { children: ReactNode }) => {
// //   // create a state to hold the upload
// //    const [uploadFile] =useUploadFileMutation()
// //   const [uploads, setUploads] = useState<Record<UploadCategory,UploaderItem[]>>({image:[],
// //     pdf:[]
// //   });
// //    const modify =useCallback((type:UploadCategory,id:string,changes:Partial<UploaderItem>)=>{
// //     setUploads((prev)=>({
// //       ...prev,
// //       [type]:prev[type].map((upload)=>upload.id===id?{...upload,...changes}:upload)
// //     }))

// //    },[])

// //   const startUpload = useCallback(async(items: UploaderItem,type:UploadCategory) => {
// //     const { id, file, controller } = items;
// //     const signal = controller.signal;

// //     const onProgress = (progress: number) => modify(type,id,{progress})
     
// //     // call the backend api
// //     try {
// //       // call the api here
// //       await uploadFile({id,file,onProgress,signal,order:0}).unwrap()
// //     //   setUploads((prev) =>
// //     //     prev.map((upload) =>
// //     //       upload.id === id ? { ...upload, done: true, success: true } : upload
// //     //     )
// //     //   );
// //     modify(type,id,{done:true,success:true})
// //     } catch (error) {
// //     //   setUploads((prev) =>
// //     //     prev.map((upload) =>
// //     //       upload.id === id ? { ...upload, done: false, success: false } : upload
// //     //     )
// //     //   );
// //     modify(type,id,{done:false,success:false})
// //     }
// //   }, [uploadFile,modify]);


// //     const addUploads = useCallback(
// //       (type:UploadCategory,files: File[]) => {
// //         const newItems = files.map((file) => ({
// //           id: uuid(),
// //           file,
// //           order:0,
// //           progress: 0,
// //           done: false,
// //           success: false,
// //           cancelled: false,
// //           controller: new AbortController(),
// //         }));

// //         setUploads((prev) =>({...prev, [type]:[...prev[type], ...newItems]}));
// //           //  newItems.forEach((item) => startUpload(type, item));
       
// //         newItems.forEach((item)=>startUpload(type,item))
// //       },
// //       [startUpload]
// //     );

// // //   cancel one upload image 
// // const cancelUpload=useCallback(async(id:string)=>{
// //  // find if the id exist  
// //     setUploads((prev)=>{
// //         const item =prev.find((f)=>f.id === id)
// //         if(item) {
// //             item.controller.abort()
// //         }
// //    return  prev.filter((f)=>f.id === id)
// //     })
// //    try {
// //        // Call API to delete the cancelled upload
// //     // await cleanUploads(id); 
// //     console.log(`Upload ${id} cleaned up from server`);
// //    } catch (error:any) {
// //     toast.error(error)
// //    }
// // },[])

// // const cleanUp =useCallback(()=>{
// //     uploads.forEach((u)=>u.controller.abort())
// //     // api to delete upload  
// //     // cleanUploads(uploads.map=>((u)=>u.id))
// //     setUploads([])
// // },[uploads])
// // const isUploading=useMemo(()=>uploads.some((u)=>!u.done),[uploads])

// //   return <UploaderContext.Provider value={{uploads,startUpload,addUploads,cleanUp,cancelUpload,isUploading}}>{children}</UploaderContext.Provider>;
// // };


// // export default UploaderProvider;


// import { useUploadFileMutation } from "@/api/data/uploads.api";
// import React, {
//   createContext,
//   useCallback,
//   useContext,
//   useMemo,
//   useState,
//   type ReactNode,
// } from "react";
// import { toast } from "react-toastify";
// import { v4 as uuid } from "uuid";

// export interface UploaderItem {
//   id: string;
//   file: File;
//   order: number;
//   progress: number;
//   done: boolean;
//   success: boolean;
//   cancelled: boolean;
//   controller: AbortController;
//   url:string
// }

// export type UploadCategory = "image" | "pdf";
// // type UploadCategory = 'image' | 'pdf'

// // type UploaderContextType = {
// //   addUploads: (type: UploadCategory, files: File[]) => void
// //   cancelUpload: (type: UploadCategory, id: string) => void
// //   uploads: Record<UploadCategory, UploaderItem[]>
// // }


// type UploadContextType = {
//   uploads: Record<UploadCategory, UploaderItem[]>;
//   isUploading: boolean;
//   addUploads: (type: UploadCategory,files: File[]) => void;
//   startUpload: (type: UploadCategory, item: UploaderItem) => void;
//   cancelUpload: (type: UploadCategory, id: string) => void;
//   cleanUp: (type: UploadCategory) => void;
// };

// const UploaderContext = createContext<UploadContextType | null>(null);

// export const useUploader = (type?:UploadCategory) => {
//   const context = useContext(UploaderContext);

//   if (!context) {
//     throw new Error("useUploader must be used within UploaderProvider");
//   }

//   if (type) {
//     return {
//       uploads: context.uploads[type],
//       startUpload:(item:UploaderItem) => context.startUpload(type, item),
//       addUploads:(files:File[]) => context.addUploads(type, files),
//       cancelUpload: (id:string) => context.cancelUpload(type, id),
//       cleanUp: () => context.cleanUp(type),
//     };
//   }

//   return context;
// };

// const UploaderProvider = ({ children }: { children: ReactNode }) => {
//   const [uploadFile] = useUploadFileMutation();

//   const [uploads, setUploads] = useState<Record<UploadCategory, UploaderItem[]>>({
//     image: [],
//     pdf: [],
//   });

//   // ✅ Update single upload item
//   const modify = useCallback(
//     (type: UploadCategory, id: string, changes: Partial<UploaderItem>) => {
//       setUploads((prev) => ({
//         ...prev,
//         [type]: prev[type].map((upload) =>
//           upload.id === id ? { ...upload, ...changes } : upload
//         ),
//       }));
//     },
//     []
//   );

//   // ✅ Start upload for a single item
//   const startUpload = useCallback(
//     async (type:UploadCategory, item:UploaderItem) => {
//       const { id, file, controller } = item;
//       const signal = controller.signal;

//       const onProgress = (progress: number) => modify(type, id, { progress });

//       try {
//      const res =   await uploadFile({ id, file, onProgress, signal, order: 0 }).unwrap();
//      console.log("uuuuuggtt",res)
//         // modify(type, id, { done: true, success: true });
//         if (res?.url) modify(type, id, { done: true, success: true,id:res.id, url: res.url });
//       } catch (error) {
//         if (signal.aborted) {
//           modify(type, id, { done: false, cancelled: true });
//         } else {
//           modify(type, id, { done: false, success: false });
//         }
//       }
//     },
//     [uploadFile, modify]
//   );

//   // ✅ Add new uploads
//   // Add multiple uploads
//   const addUploads = useCallback(
//     (type: UploadCategory, files: File[]) => {
//       const newItems: UploaderItem[] = files.map((file) => ({
//         id: uuid(),
//         file,
//         order:0,
//         url: URL.createObjectURL(file),
//         progress: 0,
//         done: false,
//         success: false,
//         cancelled: false,
//         controller: new AbortController(),
//       }));

//       setUploads((prev) => ({
//         ...prev,
//         [type]: [...prev[type], ...newItems],
//       }));

//       newItems.forEach((item) => startUpload(type, item));
//     },
//     [startUpload]
//   );

//   // ✅ Cancel specific upload
//   const cancelUpload = useCallback((type: UploadCategory, id: string) => {
//     setUploads((prev) => {
//       const target = prev[type].find((f) => f.id === id);
//       if (target) target.controller.abort();

//       return {
//         ...prev,
//         [type]: prev[type].filter((f) => f.id !== id),
//       };
//     });
//   }, []);

//   // ✅ Clean all uploads of a type
//   const cleanUp = useCallback((type: UploadCategory) => {
//     setUploads((prev) => {
//       prev[type].forEach((u) => u.controller.abort());
//       return { ...prev, [type]: [] };
//     });
//   }, []);

//   // ✅ Detect if anything is uploading
//   const isUploading = useMemo(
//     () =>
//       Object.values(uploads).some((group) =>
//         group.some((u) => !u.done && !u.cancelled)
//       ),
//     [uploads]
//   );

//   return (
//     <UploaderContext.Provider
//       value={{
//         uploads,
//         isUploading,
//         addUploads,
//         startUpload,
//         cancelUpload,
//         cleanUp,
//       }}
//     >
//       {children}
//     </UploaderContext.Provider>
//   );
// };

// export default UploaderProvider;



import { useUploadFileMutation } from "@/api/data/uploads.api";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { v4 as uuid } from "uuid";

export type UploadCategory = "image" | "pdf";

export interface UploadItem {
  id: string;           // local ID
  file: File;
  url: string;          // preview URL
  progress: number;     // 0-100
  serverId?: string;    // ID returned by server
  controller: AbortController;
}

type UploaderContextType = {
  uploads: Record<UploadCategory, UploadItem[]>;
  isUploading: boolean;
  addUploads: (type: UploadCategory, files: File[]) => void;
  cancelUpload: (type: UploadCategory, id: string) => void;
  cleanUp: (type: UploadCategory) => void;
};

const UploaderContext = createContext<UploaderContextType | null>(null);

export  const useUploader = (type?: UploadCategory) => {
  const context = useContext(UploaderContext);
  if (!context) throw new Error("useUploader must be inside UploaderProvider");

  if (type) {
    return {
      uploads: context.uploads[type],
      addUploads: (files: File[]) => context.addUploads(type, files),
      cancelUpload: (id: string) => context.cancelUpload(type, id),
      cleanUp: () => context.cleanUp(type),
    };
  }

  return context;
};

const UploaderProvider = ({ children }: { children: ReactNode }) => {
  const [uploadFile] = useUploadFileMutation();
  const [uploads, setUploads] = useState<Record<UploadCategory, UploadItem[]>>({
    image: [],
    pdf: [],
  });

  // ✅ Update a single upload's progress or server ID
  const modifyUpload = useCallback(
    (type: UploadCategory, id: string, changes: Partial<UploadItem>) => {
      setUploads((prev) => ({
        ...prev,
        [type]: prev[type].map((u) => (u.id === id ? { ...u, ...changes } : u)),
      }));
    },
    []
  );

  // ✅ Upload a single file
  const startUpload = useCallback(
    async (type: UploadCategory, item: UploadItem) => {
      const { id, file, controller } = item;
      try {
        const res = await uploadFile({
          id,
          file,
          signal: controller.signal,
          onProgress: (percent: number) => modifyUpload(type, id, { progress: percent }),
          order: 0,
        }).unwrap();

        // Update server ID and set progress to 100
        modifyUpload(type, id, { serverId: res.id, progress: 100 });
      } catch (err) {
        if (controller.signal.aborted) {
          modifyUpload(type, id, { progress: 0 });
        } else {
          modifyUpload(type, id, { progress: 0 });
        }
      }
    },
    [uploadFile, modifyUpload]
  );

  // ✅ Add multiple files
  const addUploads = useCallback(
    (type: UploadCategory, files: File[]) => {
      const newUploads: UploadItem[] = files.map((file) => ({
        id: uuid(),
        file,
        url: URL.createObjectURL(file),
        progress: 0,
        controller: new AbortController(),
      }));

      setUploads((prev) => ({
        ...prev,
        [type]: [...prev[type], ...newUploads],
      }));

      newUploads.forEach((item) => startUpload(type, item));
    },
    [startUpload]
  );

  // ✅ Cancel a single upload
  const cancelUpload = useCallback((type: UploadCategory, id: string) => {
    setUploads((prev) => {
      const target = prev[type].find((u) => u.id === id);
      if (target) target.controller.abort();
      return { ...prev, [type]: prev[type].filter((u) => u.id !== id) };
    });
  }, []);

  // ✅ Clean all uploads of a type
  const cleanUp = useCallback((type: UploadCategory) => {
    setUploads((prev) => {
      prev[type].forEach((u) => u.controller.abort());
      return { ...prev, [type]: [] };
    });
  }, []);

  // ✅ Detect if anything is uploading
  const isUploading = useMemo(
    () =>
      Object.values(uploads).some((group) => group.some((u) => u.progress < 100)),
    [uploads]
  );

  return (
    <UploaderContext.Provider
      value={{ uploads, isUploading, addUploads, cancelUpload, cleanUp }}
    >
      {children}
    </UploaderContext.Provider>
  );
};


export default UploaderProvider

