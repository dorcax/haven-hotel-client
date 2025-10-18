


import { createContext, useContext, useState, type ReactNode } from "react";

type PopUpContextType = {
  openDialog: (content: React.ReactNode) => void;
  closeDialog: () => void;
  openDrawer: (content: ReactNode) => void;
  closeDrawer: () => void;
  isDialogOpen: boolean;
  isDrawerOpen: boolean;
  content: ReactNode | null;
};

 const PopUpContext = createContext<PopUpContextType | undefined>(undefined);


export  const usePopUpContext =()=>{
  const context =useContext(PopUpContext)
  if(!context){
    throw new Error("usePopUpContext must be use within popUpContext provider")
  }
  return context

}

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [popupContent, setContent] = useState<ReactNode | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDialog = (content: ReactNode) => {
    setIsDialogOpen(true);
    setContent(content);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setContent(null);
  };

  const openDrawer = (content: ReactNode) => {
    setIsDrawerOpen(true);
    setContent(content);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setContent(null);
  };

  return (
    <PopUpContext.Provider
      value={{
        openDialog,
        closeDialog,
        isDialogOpen,
        openDrawer,
        closeDrawer,
        isDrawerOpen,
        content: popupContent,
      }}
    >
      {children}
      {popupContent}
    </PopUpContext.Provider>
  );
};
