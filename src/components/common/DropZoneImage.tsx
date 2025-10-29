
// export default DropZoneImage;
import { useUploader } from "@/context/UploaderContext";
import { UploadCloud, X } from "lucide-react";
import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";

type DropZoneProps = {
  name: string; // form field name (like "attachments")
  maxSize?: number; // in MB
  maxCount?: number;
  acceptType: "image" | "pdf";
};

const DropZoneImage = ({
  name,
  maxSize = 5,
  maxCount = 5,
  acceptType,
}: DropZoneProps) => {
  const mb = 1024 * 1024;
  const [localFiles, setLocalFiles] = useState<File[]>([]);
  const { uploads, addUploads, cancelUpload } = useUploader(acceptType);
  const { setValue, getValues } = useFormContext();

  // ✅ Normalize uploads into an array
  const normalizeUploads = (uploads: any) => {
    if (Array.isArray(uploads)) return uploads;
    if (uploads && typeof uploads === "object")
      return Object.values(uploads).flat();
    return [];
  };

  // ✅ Whenever uploads change, update form field
  useEffect(() => {
    const uploadArray = normalizeUploads(uploads);
    console.log("🔍 Full uploads data:", uploadArray);
    const doneUploads = uploadArray.filter((u) => u.done && u.id);
    const urls = doneUploads.map((u) => u.id);

    console.log("✅ Uploaded URLs:", urls);
    // ✅ Only update if uploads are finished
    if (urls.length > 0) {
      setValue(name, urls, { shouldValidate: true });
    }
    // setValue(name, urls, { shouldValidate: true });
    console.log("📦 get image from react-hook-form:", getValues(name));
  }, [uploads, name, setValue, getValues]);

  const handleOnDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles: File[] = [];

      for (let file of acceptedFiles) {
        if (localFiles.length + newFiles.length >= maxCount) {
          toast.error(`You can only upload ${maxCount} file(s).`);
          break;
        }

        if (file.size > maxSize * mb) {
          toast.error(`${file.name} is too large (max ${maxSize} MB).`);
          continue;
        }

        const duplicate = localFiles.some(
          (f) => f.name === file.name && f.size === file.size
        );
        if (duplicate) {
          toast.error(`${file.name} has already been added.`);
          continue;
        }

        if (acceptType === "image" && !file.type.startsWith("image/")) {
          toast.error(`${file.name} is not an image.`);
          continue;
        }
        if (acceptType === "pdf" && file.type !== "application/pdf") {
          toast.error(`${file.name} is not a PDF.`);
          continue;
        }

        newFiles.push(file);
      }

      if (newFiles.length > 0) {
        addUploads(newFiles); // upload to server
        setLocalFiles((prev) => [...prev, ...newFiles]);
      }
    },
    [addUploads, acceptType, localFiles, maxCount, maxSize]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleOnDrop,
    accept:
      acceptType === "image"
        ? { "image/*": [".jpeg", ".jpg", ".png"] }
        : { "application/pdf": [".pdf"] },
  });

  const uploadArray = normalizeUploads(uploads);

  return (
    <section {...getRootProps()} >
      {uploadArray.length ===0 &&acceptType === "image"  && (
        <div className="border border-dashed border-[#E3B23C] h-[300px] flex flex-col justify-center items-center rounded-2xl cursor-pointer">
          <UploadCloud size={40} className="text-[#E3B23C] pb-2" />
          <p className="text-gray-900 text-sm py-2">
            {isDragActive
              ? "Drop image files here"
              : "Drag & drop images here or click to upload"}
          </p>
          <Input type="file" className="hidden" {...getInputProps()} multiple />
        </div>
      )} 
       
       {
        uploadArray.length===0 && acceptType==="pdf" &&(
           <div className="flex flex-col items-start gap-2">
          <Input
            type="file"
            accept="application/pdf"
            
            {...getInputProps()}
            className="p-2 cursor-pointer w-full "
          />
          <p className="text-sm px-2 py-3 text-gray-500 mt-1 border w-full h-12 rounded-xl">
            Only PDF files are allowed.
          </p>
        </div>
        )
       }
    



      {/* Preview uploaded files */}
      {uploadArray.length > 0 && acceptType === "image" && (
        <div className="grid grid-cols-2 gap-2">
          {uploadArray.map((upload: any) => (
            <div key={upload.id} className="relative group">
              <img
                src={upload.url}
                alt={upload.file.name}
                className="object-cover w-full h-48 rounded-md"
              />
              {upload.done && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    cancelUpload(upload.id);
                    setLocalFiles((prev) => prev.filter((f) => f !== upload.file));
                  }}
                  className="absolute top-1 right-1 bg-black bg-opacity-60 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* PDF Preview */}
      {uploadArray.length > 0 && acceptType === "pdf" && (
        <div className="mt-4 flex flex-col gap-2">
          {uploadArray.map((upload: any) => (
            <div key={upload.id} className="border p-3 rounded-md text-sm bg-gray-50">
              {upload.file.name}
            </div>
          ))}
        </div>
      )}

    </section>
  );
};

export default DropZoneImage;
