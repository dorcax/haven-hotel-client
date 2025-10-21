import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export default function TagInput() {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e:any) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove:any) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-2 border border-input rounded-lg p-2 focus-within:ring-2 focus-within:ring-ring">
        {tags.map((tag) => (
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
