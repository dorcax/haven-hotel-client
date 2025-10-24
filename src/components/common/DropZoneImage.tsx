import { useUploader } from '@/context/UploaderContext'
import { UploadCloud, X } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'
import { Input } from '../ui/input'

const DropZoneImage = ({ maxSize, maxCount }: { maxSize: number, maxCount: number }) => {
    const mb = 1024 * 1024
    const [files, setFile] = useState<any[]>([])
    const { addUploads, cancelUpload, uploads } = useUploader()
    const onDrop = useCallback((acceptedFile: any) => {
        let newFile = []

        //     const newFile =acceptedFile.map((f:any)=>(
        //         Object.assign(f,{
        //             preview:URL.createObjectURL(f)
        //         })
        //     ))
        // console.log(newFile)
        for (let file of acceptedFile) {
            if (file.length + newFile.length >= maxCount) {
                toast.error(`you can only upload ${maxCount} `)
                break;
            }
            if (file.size >= maxSize * mb) {
                toast.error("the file is too large")
                continue

            }

            const duplicate = files.some((f) => f.name === file.name && f.size === file.size)
            if (duplicate) {
                toast.error("images have already been uploaded")
            }
            // const withPreview = Object.assign({
            //     file,
            //     preview: URL.createObjectURL(file)
            // })
            newFile.push(file)

        }
        addUploads(newFile)


        // setFile((prev)=> [...prev,...newFile])


    }, [maxCount, maxSize, addUploads])


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [".jpg", ".png", ".jpeg"]
        }

    })


    // const onRemove =(name:any)=>{
    //     const fileToRemove =files.find((f)=>f.name===name)
    //     if(fileToRemove){
    //         // URL.revokeObjectURL(fileToRemove.preview)
    //     }
    //     setFile((prev)=>prev.filter((f)=>f.name !==name))


    // }
    return (
        <section {...getRootProps()}>

            <div className="border  border-dashed border-[#E3B23C]  h-[300px] flex flex-col justify-center items-center rounded-2xl">
                <UploadCloud size={40} className='text-[#E3B23C] pb-2' />
                <p className="text-gray-900 text-sm py-2">{isDragActive ? "Drop the file here " : "Drag & drop files here or click to upload"}</p>
                <Input type='file' className='hidden ' {...getInputProps()} />

            </div>
            {/* preview the image  */}
            <div className='grid grid-cols-3 gap-2'>
                {uploads.map((upload) => (
                    <div className='my-4'>
                        <img src={URL.createObjectURL(upload.file)} alt={upload.file.name} className='object-cover w-full h-48 rounded-sm ' />
                        {/* Cancel button */}
                        {!upload.done && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    cancelUpload(upload.id);
                                }}
                                className="absolute top-1 right-1 bg-black bg-opacity-50 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DropZoneImage