import axios from "axios";
import { api } from "./base";

type UploadProps = {
    id:string,
  file: File;
//   id: string;
  order: number;
  signal?: AbortSignal;
  onProgress?: (percent: number) => void;
};


const uploads =api.injectEndpoints({
    endpoints:({mutation,query})=>({
        uploadFile:mutation<any,UploadProps>({
            async queryFn({file,order,onProgress,signal}){
                try {
                    const formData =new FormData()
                    formData.append("file",file)
                    console.log("user token",localStorage.getItem("token"))
                    const response =await axios.post(
                        `http://localhost:3000/upload`,formData,{
                            params:{order},
                            signal,
                            withCredentials:true,
                            // headers:{"Content-Type":"multipart/form-data",
                            //      Authorization: `Bearer ${localStorage.getItem("token")}`

                            // },
                            onUploadProgress:(event)=>{
                                if(onProgress && event.total){
                                    const percent =Math.round((event.loaded *100)/event.total)
                                    onProgress(percent)
                                }
                            }
                        }
                    )
                    console.log("image in fronetend",response)
                    return {
                        data:response.data
                    }
                } catch (error:any) {
                    console.log(error)
                     return { data: error.data?.message};
                }

            }
           

        })

    })
    
}) 

export const {useUploadFileMutation} =uploads 