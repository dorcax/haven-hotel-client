import React, { useCallback, useState } from 'react'
import {useDropzone}  from "react-dropzone"
import { Button } from '../ui/button'
import { Progress } from '../ui/progress'

const mb= 1024*1024


const Upload = ({maxCount=3,maxSizeMb =5}) => {
    const [files,setFiles] =useState<any[]>([])
    const simulateUpload =(file:any)=>{
    let uploaded =0
    const interval =setInterval(()=>{
        uploaded+=10
        setFiles((prev)=>prev.map((f:any)=>f.name ===file.name ?{...f,progress:uploaded}:f))
          if(uploaded >=100) clearInterval(interval)

    }
  
    
    
    ,300)


}
    // handle the dropped file 
    const onDrop =useCallback((acceptedFile:any)=>{
     console.log("acceptedfile",acceptedFile)
    //  const newFile =acceptedFile.map((file:any)=>(
    //     Object.assign(file,{
    //         preview:URL.createObjectURL(file)
    //     })
    //  ))
    // modular 4
    const newFile:any =[]
    for (const file of acceptedFile){
        if(file.length && newFile.length >=maxCount){
            console.log(`you can only upload ${maxCount}`)
            continue;
        }
        if(file.size >=maxSizeMb*mb){
            console.log("the file is too much or large")
            continue;
        }
        // check for duplicate 
        const duplicate =files.some((f:any)=>f.name===file.name && f.size ===file.size)
        if(duplicate){
         console.log("the file is already there")
        }
        // with preview 
        const withPreview =Object.assign(file,{
            preview:URL.createObjectURL(file),
            progress:0

        })
        newFile.push(withPreview)
    }
    setFiles((prev)=>[...prev,...newFile]) 
    // for(const file of newFile){
    //     stimulateUpload(file)
    // }
    newFile.forEach((f:any)=>simulateUpload(f))
    // end of modular 4
    //  update the state
    //    setFiles((prev:any) => [...prev,...newfile])
        // setFiles((prevFiles) => [...prevFiles, ...newFile]);
    },[maxCount,maxSizeMb,files])
 

    // setup the dropzone hook 
    const {getRootProps,getInputProps,isDragActive} =useDropzone({

        onDrop,
        accept:{
            "image/*":[".jpeg",".jpg",".png",".webp"]
        }
    })

    const removeFile =(name:any)=>{
        // find the file to delete 
        const fileToRemove =files.find((f:any)=>f.name ===name)
        if(fileToRemove){
            URL.revokeObjectURL(fileToRemove.preview)
        }
//  remove it from the state 
setFiles((prev)=>prev.filter((f:any)=>f.name !==name))
    }
  return (
   <section>
     <div {...getRootProps()} className={`p-4 border-2 border-dashed border-gray-300 rounded-lg text-center ${isDragActive?"bg-gray-200 border-green-400":"bg-gray-50 border-blue-400"}`}>
     <input {...getInputProps()}/>
      <p className='text-black'> {isDragActive ?"Drop the file here ":"Drag & drop files here or click to upload"}</p>
    </div>
    {/* image upload */}
   <div className='grid grid-cols-3 gap-4 m-10'>
     {files.map((file:any)=>(
        <div>
            <img src={file.preview} alt=""  className='object-cover w-full h-40'/>
              <Progress value={file.progress} className="mt-2" />
            <p className="text-sm text-center text-gray-600 mt-1">
              {file.progress}%
            </p>
          <Button className='w-[40px] bg-red-600' onClick={()=>removeFile(file.name)}>*</Button>
        </div>
    ))}
  
    </div>
   </section>
   
  )
  
}

export default Upload