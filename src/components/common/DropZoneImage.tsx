// // import { useUploader, type UploadCategory } from "@/context/UploaderContext";
// // import { UploadCloud, X, FileText } from "lucide-react";
// // import { useCallback, useEffect, useMemo, useState } from "react";
// // import { useDropzone } from "react-dropzone";
// // import { useFormContext } from "react-hook-form";
// // import { Progress } from "../ui/progress";
// // import { toast } from "react-toastify";

// // interface UploadedFile {
// //   id: string;
// //   url: string;
// //   file?: File;
// //   done?: boolean;
// //   progress?: number;
// //   serverId?: string;
// //   type?: "image" | "pdf";
// // }

// // interface Props {
// //   name: string;
// //   type: "image" | "pdf";
// //   maxCount?: number;
// //   maxSize?: number;
// //   defaultFiles?: UploadedFile[];
// // }

// // // const MB = 1024 * 1024;

// // export default function DropZoneImage({
// //   name,
// //   type,
// //   maxCount = 4,
// //   // maxSize = 20,
// //   defaultFiles = [],
// // }: Props) {
// //   const { setValue } = useFormContext();
// //   const uploader = useUploader(type);

// //   const [existing, setExisting] = useState<UploadedFile[]>(defaultFiles);

// //   const uploads = useMemo(() => Object.values(uploader.uploads) as UploadedFile[], [uploader.uploads]);

// //   const display = useMemo(() => [...existing, ...uploads], [existing, uploads]);
// //   console.log("display",display)

// //   useEffect(() => {
// //     const attachmentIds = display
// //       .filter((f) => f.done && f.serverId)
// //       .map((f) => f.serverId);
// //     setValue(name, attachmentIds, { shouldValidate: true });
// //   }, [display, name, setValue]);

// //   const onRemove = useCallback(
// //     (type:UploadCategory,id: string) => {
// //       uploader.cancelUpload(type,id);
// //       setExisting((prev) => prev.filter((f) => f.id !== id));
// //     },
// //     [uploader]
// //   );

// //   const onDrop = useCallback(
// //     (type:UploadCategory,acceptedFiles: File[]) => {
// //       if (display.length + acceptedFiles.length > maxCount) {
// //         toast(`Only ${maxCount} files allowed`);
// //         return;
// //       }

// //       const validFiles = acceptedFiles.map((file) => ({
// //         id: `${file.name}-${file.lastModified}`,
// //         url: URL.createObjectURL(file),
// //         file,
// //         done: false,
// //         progress: 0,
// //         type: type,
// //       }));

// //       uploader.addUploads(validFiles);
// //     },
// //     [display.length, maxCount, uploader, type]
// //   );

// //   const { getRootProps, getInputProps } = useDropzone({
// //     onDrop,
// //     multiple: maxCount > 1,
// //     accept:
// //       type === "image"
// //         ? { "image/*": [".jpeg", ".jpg", ".png", ".webp"] }
// //         : { "application/pdf": [".pdf"] },
// //   });

// //   useEffect(() => {
// //     return () => {
// //       display.forEach((f) => {
// //         if (f.url.startsWith("blob:")) URL.revokeObjectURL(f.url);
// //       });
// //     };
// //   }, [display]);

// //   return (
// //     <div className="space-y-4">
// //       {(maxCount > 1 || display.length === 0) && (
// //         <div
// //           {...getRootProps()}
// //           className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
// //         >
// //           <UploadCloud size={20} />
// //           <p className="mt-2 text-sm">
// //             {type === "image" ? "Click or drag images" : "Click or drag PDF"}
// //           </p>
// //           <input {...getInputProps()} /> {/* No type="file" and no extra label */}
// //         </div>
// //       )}

// //       {display.length > 0 && (
// //         <div className="grid gap-4 grid-cols-3">
// //           {display.map((f) => (
// //             <div
// //               key={f.id}
// //               className="relative rounded-lg overflow-hidden border p-1 flex items-center justify-center h-32"
// //             >
// //               {f.type?.startsWith("image") ? (
// //                 <img
// //                   src={f.url}
// //                   alt="upload"
// //                   className="object-cover w-full h-full rounded-lg border-amber-300"
// //                 />
// //               ) : (
// //                 <div className="flex flex-col items-center justify-center">
// //                   <FileText size={32} />
// //                   <span className="text-xs">{f.file?.name || f.url.split("/").pop()}</span>
// //                 </div>
// //               )}

// //               {!f.done && f.file && (
// //                 <Progress
// //                   value={Math.max(f.progress ?? 0, 5)}
// //                   className="absolute bottom-0 w-full"
// //                 />
// //               )}

// //               <button
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   onRemove(f.id);
// //                 }}
// //                 className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded"
// //               >
// //                 <X size={14} />
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



// import { useUploader, type UploadCategory } from "@/context/UploaderContext";
// import { UploadCloud, X, FileText } from "lucide-react";
// import { useCallback, useEffect, useMemo, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { useFormContext } from "react-hook-form";
// import { Progress } from "../ui/progress";
// import { toast } from "react-toastify";

// interface UploadedFile {
//   id: string;
//   url: string;
//   file?: File;
//   serverId?: string;
//   progress?: number;
// }

// interface Props {
//   name: string;
//   type: UploadCategory;
//   maxCount?: number;
//   defaultFiles?: UploadedFile[];
// }

// export default function DropZoneImage({
//   name,
//   type,
//   maxCount = 4,
//   defaultFiles = [],
// }: Props) {
//   const { setValue } = useFormContext();
//   const uploader = useUploader(type);

//   const [existing, setExisting] = useState<UploadedFile[]>(defaultFiles);

//   // const uploads = uploader.uploads;
//    const uploads = useMemo(() => Object.values(uploader.uploads) as UploadedFile[], [uploader.uploads]);

//   const display = useMemo(
//     () => [...existing, ...uploads],
//     [existing, uploads]
//   );

//   useEffect(() => {
//     const attachmentIds = display
//       .filter((f) => f.serverId)
//       .map((f) => f.serverId);

//     setValue(name, attachmentIds, { shouldValidate: true });
//   }, [display, name, setValue]);

//   const onRemove = useCallback(
//     (id: string) => {
//       uploader.cancelUpload(type,id);
//       setExisting((prev) => prev.filter((f) => f.id !== id));
//     },
//     [uploader]
//   );

//   const onDrop = useCallback(
//     (acceptedFiles: File[]) => {
//       if (display.length + acceptedFiles.length > maxCount) {
//         toast(`Only ${maxCount} files allowed`);
//         return;
//       }

//       uploader.addUploads(acceptedFiles);
//     },
//     [display.length, maxCount, uploader]
//   );

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     multiple: maxCount > 1,
//     accept:
//       type === "image"
//         ? { "image/*": [".jpeg", ".jpg", ".png", ".webp"] }
//         : { "application/pdf": [".pdf"] },
//   });

//   return (
//     <div className="space-y-4">
//       {(maxCount > 1 || display.length === 0) && (
//         <div
//           {...getRootProps()}
//           className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
//         >
//           <UploadCloud size={20} />
//           <p className="mt-2 text-sm">
//             {type === "image"
//               ? "Click or drag images"
//               : "Click or drag PDF"}
//           </p>
//           <input {...getInputProps()} />
//         </div>
//       )}

//       {display.length > 0 && (
//         <div className="grid gap-4 grid-cols-3">
//           {display.map((f) => (
//             <div
//               key={f.id}
//               className="relative rounded-lg overflow-hidden border p-1 flex items-center justify-center h-32"
//             >
//               {type === "image" ? (
//                 <img
//                   src={f.url}
//                   alt="upload"
//                   className="object-cover w-full h-full rounded-lg"
//                 />
//               ) : (
//                 <div className="flex flex-col items-center justify-center">
//                   <FileText size={32} />
//                   <span className="text-xs">
//                     {f.file?.name || f.url.split("/").pop()}
//                   </span>
//                 </div>
//               )}

//               {!f.serverId && (
//                 <Progress
//                   value={Math.max(f.progress ?? 0, 5)}
//                   className="absolute bottom-0 w-full"
//                 />
//               )}

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   onRemove(f.id);
//                 }}
//                 className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded"
//               >
//                 <X size={14} />
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }




import { useUploader, type UploadCategory } from "@/context/UploaderContext";
import { UploadCloud, X, FileText } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { Progress } from "../ui/progress";
import { toast } from "react-toastify";

interface UploadedFile {
  id: string;
  url: string;
  file?: File;
  serverId?: string;
  progress?: number;
}

interface Props {
  name: string;
  type: UploadCategory;
  maxCount?: number;
  defaultFiles?: UploadedFile[];
}

export default function DropZoneImage({
  name,
  type,
  maxCount = 4,
  defaultFiles = [],
}: Props) {
  const { setValue } = useFormContext();
  const uploader = useUploader(type);

  const [existing, setExisting] = useState<UploadedFile[]>(defaultFiles);

  const uploads = uploader.uploads;

  const display = useMemo(
    () => [...existing, ...uploads],
    [existing, uploads]
  );

  useEffect(() => {
    const attachmentIds = display
      .filter((f) => f.serverId)
      .map((f) => f.serverId);

    setValue(name, attachmentIds, { shouldValidate: true });
  }, [display, name, setValue]);

  const onRemove = useCallback(
    (id: string) => {
      uploader.cancelUpload(id);
      setExisting((prev) => prev.filter((f) => f.id !== id));
    },
    [uploader]
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (display.length + acceptedFiles.length > maxCount) {
        toast(`Only ${maxCount} files allowed`);
        return;
      }

      uploader.addUploads(acceptedFiles);
    },
    [display.length, maxCount, uploader]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: maxCount > 1,
    accept:
      type === "image"
        ? { "image/*": [".jpeg", ".jpg", ".png", ".webp"] }
        : { "application/pdf": [".pdf"] },
  });

  return (
    <div className="space-y-4">
      {(maxCount > 1 || display.length === 0) && (
        <div
          {...getRootProps()}
          className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <UploadCloud size={20} />
          <p className="mt-2 text-sm">
            {type === "image"
              ? "Click or drag images"
              : "Click or drag PDF"}
          </p>
          <input {...getInputProps()} />
        </div>
      )}

      {display.length > 0 && (
        <div className="grid gap-4 grid-cols-3">
          {display.map((f) => (
            <div
              key={f.id}
              className="relative rounded-lg overflow-hidden border p-1 flex items-center justify-center h-32"
            >
              {type === "image" ? (
                <img
                  src={f.url}
                  alt="upload"
                  className="object-cover w-full h-full rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <FileText size={32} />
                  <span className="text-xs">
                    {f.file?.name || f.url.split("/").pop()}
                  </span>
                </div>
              )}

              {!f.serverId && (
                <Progress
                  value={Math.max(f.progress ?? 0, 5)}
                  className="absolute bottom-0 w-full"
                />
              )}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(f.id);
                }}
                className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


