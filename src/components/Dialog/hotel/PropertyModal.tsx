import CustomInfoDialog from "@/components/common/CustomInfoDialog";
import { usePopUpContext } from "@/context/PopUpContext";
import { Check, HomeIcon, HotelIcon } from "lucide-react";
import { useState } from "react";
import AddHotel from "./AddHotel";
import AddProperty from "./AddProperty";

const PropertyModal = () => {
  const { closeDialog, openDialog } = usePopUpContext();
  const [selectedType, setSelectedType] = useState<"APARTMENT" | "HOTEL" | null>(null);

  const handleContinue = () => {
    if (!selectedType) return;

 
    if (selectedType === "APARTMENT") {
      openDialog(() => <AddProperty selectedType={selectedType}/>);
    } else if (selectedType === "HOTEL") {
      openDialog(() => <AddHotel selectedType={selectedType} />);
    }

  };

  return (
    <CustomInfoDialog
      title="What type of property are you adding?"
      description="Choose a category to customize your setup experience and dashboard layout."
      className="w-full md:max-w-lg max-h-[500px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <div className="px-5 py-5 space-y-4">
        {/* Apartment Button */}
        <button
          onClick={() => setSelectedType("APARTMENT")}
          className={`group relative w-full flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all ${
            selectedType === "APARTMENT"
              ? "border-blue-900 bg-blue-50 dark:bg-blue-900/20"
              : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50"
          }`}
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white">
            <HomeIcon />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base">Apartment</span>
              {selectedType === "APARTMENT" && (
                <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center">
                  <Check className="text-white w-3 h-3" />
                </div>
              )}
            </div>
            <p className="text-xs mt-1 text-slate-500 dark:text-slate-400">
              Perfect for individual units, condos, or residential flats.
            </p>
          </div>
        </button>

        {/* Hotel Button */}
        <button
          onClick={() => setSelectedType("HOTEL")}
          className={`group relative w-full flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all ${
            selectedType === "HOTEL"
              ? "border-blue-900 bg-blue-50 dark:bg-blue-900/20"
              : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50"
          }`}
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <HotelIcon />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base">Hotel</span>
              {selectedType === "HOTEL" && (
                <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center">
                  <Check className="text-white w-3 h-3" />
                </div>
              )}
            </div>
            <p className="text-xs mt-1 text-slate-500 dark:text-slate-400">
              Best for boutique hotels, resorts, or multi-room hospitality.
            </p>
          </div>
        </button>
      </div>

      {/* Footer */}
      <div className="px-6 pb-8 pt-2 flex flex-col gap-3">
        <button
          className="w-full h-12 bg-primary text-white rounded-xl font-bold text-base disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleContinue}
          disabled={!selectedType}
        >
          Continue
        </button>
        <button
          className="w-full h-12 text-slate-500 dark:text-slate-400 font-semibold text-sm"
          onClick={closeDialog}
        >
          Cancel
        </button>
      </div>
    </CustomInfoDialog>
  );
};

export default PropertyModal;