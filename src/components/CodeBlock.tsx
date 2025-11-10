// src/components/ui/CodeBlock.tsx

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  codeString: string;
  className?: string;
}

export const CodeBlock = ({ codeString, className }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <div
      className={cn(
        "bg-black/40 flex items-center justify-between text-xl rounded text-gray-300 w-[90%] border border-gray-400 min-h-15 my-4",
        className
      )}
    >
      <h1 className="pl-4 font-mono">{codeString}</h1>

      <Button
        variant="ghost" // Używamy wariantu "ghost" z Twojego button.tsx
        size="icon"
        onClick={handleCopy}
        className="text-gray-400 hover:text-white mr-2"
        aria-label="Copy to clipboard"
      >
        {isCopied ? (
          <Check className="h-5 w-5 text-emerald-400" />
        ) : (
          <Copy className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};
