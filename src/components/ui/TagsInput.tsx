import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export default function TagInput({value=[],onChange} :{value:string[],onChange:(newTags: string[]) => void;
}) {
  // const [tags, setTags] = useState<string[]>([]);
  
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!value.includes(inputValue.trim())) {
        onChange([...value, inputValue.trim()]); // ✅ update form value
        
      }
      
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    onChange(value.filter((tag) => tag !== tagToRemove)); // ✅ update form value
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-2 border border-input rounded-lg p-2 focus-within:ring-2 focus-within:ring-ring">
        {value.map((tag) => (
          <div
            key={tag}
            className="flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
          >
            <span>{tag}</span>
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="hover:text-destructive transition"
            >
              <X size={14} />
            </button>
          </div>
        ))}
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type and press Enter..."
          className="border-none focus-visible:ring-0 flex-1 min-w-[150px]"
        />
      </div>
    </div>
  );
}
