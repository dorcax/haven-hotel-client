




import { createContext, useContext, useState, type ReactNode } from "react";

// type PopUpContextType = {
//   openDialog: (content: ReactNode) => void;
//   closeDialog: () => void;
//   openDrawer: (content: ReactNode) => void;
//   closeDrawer: () => void;
//   isDialogOpen: boolean;
//   isDrawerOpen: boolean;
//   dialogContent: ReactNode | null;
//   drawerContent: ReactNode | null;
// };

type PopUpContextType = {
  openDialog: (content: () => ReactNode) => void;
  closeDialog: () => void;
  openDrawer: (content: () => ReactNode) => void;
  closeDrawer: () => void;
  isDialogOpen: boolean;
  isDrawerOpen: boolean;
  dialogContent: ReactNode | null;
  drawerContent: ReactNode | null;
};


const PopUpContext = createContext<PopUpContextType | undefined>(undefined);

export const usePopUpContext = () => {
  const context = useContext(PopUpContext);
  if (!context) throw new Error("usePopUpContext must be used within PopupProvider");
  return context;
};

// export const PopupProvider = ({ children }: { children: ReactNode }) => {
//   const [dialogContent, setDialogContent] = useState<() => ReactNode | null>(null);
//   const [drawerContent, setDrawerContent] = useState<() => ReactNode | null>(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const openDialog = (content: ReactNode) => {
//     setDialogContent(()=>content);
//     setIsDialogOpen(true);
//   };

//   const closeDialog = () => {
//     setIsDialogOpen(false);
//     setDialogContent(null);
//   };

//   const openDrawer = (content: ReactNode) => {
//     setDrawerContent(()=>content);
//     setIsDrawerOpen(true);
//   };

//   const closeDrawer = () => {
//     setIsDrawerOpen(false);
//     setDrawerContent(null);
//   };

//   return (
//     <PopUpContext.Provider
//       value={{
//         openDialog,
//         closeDialog,
//         isDialogOpen,
//         dialogContent,
//         openDrawer,
//         closeDrawer,
//         isDrawerOpen,
//         drawerContent,
//       }}
//     >
//       {children}

//       {/* Render dialog and drawer separately */}
//       {isDialogOpen && dialogContent  && dialogContent()}
//       {isDrawerOpen && drawerContent}
//     </PopUpContext.Provider>
//   );
// };




export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [dialogContent, setDialogContent] = useState<(() => ReactNode) | null>(null);
  const [drawerContent, setDrawerContent] = useState<(() => ReactNode) | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDialog = (content: () => ReactNode) => {
    setDialogContent(() => content);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setDialogContent(null);
  };

  const openDrawer = (content: () => ReactNode) => {
    setDrawerContent(() => content);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setDrawerContent(null);
  };

  return (
    <PopUpContext.Provider
      value={{
        openDialog,
        closeDialog,
        isDialogOpen,
        dialogContent: dialogContent ? dialogContent() : null,
        openDrawer,
        closeDrawer,
        isDrawerOpen,
        drawerContent: drawerContent ? drawerContent() : null,
      }}
    >
      {children}
      {isDialogOpen && dialogContent && dialogContent()}
      {isDrawerOpen && drawerContent && drawerContent()}
    </PopUpContext.Provider>
  );
};
