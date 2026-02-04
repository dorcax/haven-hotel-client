// import { useUploadFileMutation } from "@/api/data/uploads.api";
// import React, {
//   createContext,
//   useCallback,
//   useContext,
//   useMemo,
//   useState,
//   type ReactNode,
// } from "react";
// import { v4 as uuid } from "uuid";

// export type UploadCategory = "image" | "pdf";

// export interface UploadItem {
//   id: string;           // local ID
//   file: File;
//   url: string;          // preview URL
//   progress: number;     // 0-100
//   serverId?: string;    // ID returned by server
//   controller: AbortController;
// }

// type UploaderContextType = {
//   uploads: Record<UploadCategory, UploadItem[]>;
//   isUploading: boolean;
//   addUploads: (type: UploadCategory, files: File[]) => void;
//   cancelUpload: (type: UploadCategory, id: string) => void;
//   cleanUp: (type: UploadCategory) => void;
// };

// const UploaderContext = createContext<UploaderContextType | null>(null);

// export  const useUploader = (type?: UploadCategory) => {
//   const context = useContext(UploaderContext);
//   if (!context) throw new Error("useUploader must be inside UploaderProvider");

//   if (type) {
//     return {
//       uploads: context.uploads[type],
//       addUploads: (files: File[]) => context.addUploads(type, files),
//       cancelUpload: (id: string) => context.cancelUpload(type, id),
//       cleanUp: () => context.cleanUp(type),
//     };
//   }

//   return context;
// };

// const UploaderProvider = ({ children }: { children: ReactNode }) => {
//   const [uploadFile] = useUploadFileMutation();
//   const [uploads, setUploads] = useState<Record<UploadCategory, UploadItem[]>>({
//     image: [],
//     pdf: [],
//   });

//   // ✅ Update a single upload's progress or server ID
//   const modifyUpload = useCallback(
//     (type: UploadCategory, id: string, changes: Partial<UploadItem>) => {
//       setUploads((prev) => ({
//         ...prev,
//         [type]: prev[type].map((u) => (u.id === id ? { ...u, ...changes } : u)),
//       }));
//     },
//     []
//   );

//   // ✅ Upload a single file
//   const startUpload = useCallback(
//     async (type: UploadCategory, item: UploadItem) => {
//       const { id, file, controller } = item;
//       try {
//         const res = await uploadFile({
//           id,
//           file,
//           signal: controller.signal,
//           onProgress: (percent: number) => modifyUpload(type, id, { progress: percent }),
//           order: 0,
//         }).unwrap();

//         // Update server ID and set progress to 100
//         modifyUpload(type, id, { serverId: res.id, progress: 100 });
//       } catch (err) {
//         if (controller.signal.aborted) {
//           modifyUpload(type, id, { progress: 0 });
//         } else {
//           modifyUpload(type, id, { progress: 0 });
//         }
//       }
//     },
//     [uploadFile, modifyUpload]
//   );

//   // ✅ Add multiple files
//   const addUploads = useCallback(
//     (type:UploadCategory, files: File[]) => {
//       const newUploads: UploadItem[] = files.map((file) => ({
//         id: uuid(),
//         file,
//         url: URL.createObjectURL(file),
//         progress: 0,
//         controller: new AbortController(),
//       }));

//       setUploads((prev) => ({
//         ...prev,
//         [type]: [...prev[type], ...newUploads],
//       }));

//       newUploads.forEach((item) => startUpload(type, item));
//     },
//     [startUpload]
//   );

//   // ✅ Cancel a single upload
//   const cancelUpload = useCallback((type: UploadCategory, id: string) => {
//     setUploads((prev) => {
//       const target = prev[type].find((u) => u.id === id);
//       if (target) target.controller.abort();
//       return { ...prev, [type]: prev[type].filter((u) => u.id !== id) };
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
//       Object.values(uploads).some((group) => group.some((u) => u.progress < 100)),
//     [uploads]
//   );

//   return (
//     <UploaderContext.Provider
//       value={{ uploads, isUploading, addUploads, cancelUpload, cleanUp }}
//     >
//       {children}
//     </UploaderContext.Provider>
//   );
// };


// export default UploaderProvider




import { useUploadFileMutation } from "@/api/data/uploads.api";
import {
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
  id: string;
  file: File;
  url: string;
  progress: number;
  serverId?: string;
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


// 🔥 FUNCTION OVERLOADS (VERY IMPORTANT)

export function useUploader(
  type: UploadCategory
): {
  uploads: UploadItem[];
  addUploads: (files: File[]) => void;
  cancelUpload: (id: string) => void;
  cleanUp: () => void;
  isUploading: boolean;
};

export function useUploader(): UploaderContextType;

export function useUploader(type?: UploadCategory) {
  const context = useContext(UploaderContext);
  if (!context) {
    throw new Error("useUploader must be inside UploaderProvider");
  }

  if (type) {
    return {
      uploads: context.uploads[type],
      addUploads: (files: File[]) =>
        context.addUploads(type, files),
      cancelUpload: (id: string) =>
        context.cancelUpload(type, id),
      cleanUp: () => context.cleanUp(type),
      isUploading: context.isUploading,
    };
  }

  return context;
}

const UploaderProvider = ({ children }: { children: ReactNode }) => {
  const [uploadFile] = useUploadFileMutation();

  const [uploads, setUploads] = useState<Record<UploadCategory, UploadItem[]>>({
    image: [],
    pdf: [],
  });

  const modifyUpload = useCallback(
    (type: UploadCategory, id: string, changes: Partial<UploadItem>) => {
      setUploads((prev) => ({
        ...prev,
        [type]: prev[type].map((u) =>
          u.id === id ? { ...u, ...changes } : u
        ),
      }));
    },
    []
  );

  const startUpload = useCallback(
    async (type: UploadCategory, item: UploadItem) => {
      try {
        const res = await uploadFile({
          id: item.id,
          file: item.file,
          signal: item.controller.signal,
          order: 0,
          onProgress: (percent: number) =>
            modifyUpload(type, item.id, { progress: percent }),
        }).unwrap();

        modifyUpload(type, item.id, {
          serverId: res.id,
          progress: 100,
        });
      } catch (error) {
        if (!item.controller.signal.aborted) {
          modifyUpload(type, item.id, { progress: 0 });
        }
      }
    },
    [uploadFile, modifyUpload]
  );

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

      newUploads.forEach((item) =>
        startUpload(type, item)
      );
    },
    [startUpload]
  );

  const cancelUpload = useCallback(
    (type: UploadCategory, id: string) => {
      setUploads((prev) => {
        const target = prev[type].find((u) => u.id === id);

        if (target) {
          target.controller.abort();
          URL.revokeObjectURL(target.url);
        }

        return {
          ...prev,
          [type]: prev[type].filter((u) => u.id !== id),
        };
      });
    },
    []
  );

  const cleanUp = useCallback((type: UploadCategory) => {
    setUploads((prev) => {
      prev[type].forEach((u) => {
        u.controller.abort();
        URL.revokeObjectURL(u.url);
      });

      return { ...prev, [type]: [] };
    });
  }, []);

  const isUploading = useMemo(
    () =>
      Object.values(uploads).some((group) =>
        group.some((u) => u.progress < 100)
      ),
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

export default UploaderProvider;

