'use client';

import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { Button } from '@heroui/react';

const PromptSection = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!prompt) return;
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="bg-zinc-50/80 dark:bg-zinc-800/40 p-4 rounded-xl border border-zinc-100/80 dark:border-zinc-800/60 flex flex-col gap-2 relative group transition-all">
      <div className="flex justify-between items-center select-none">
        <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          AI Generation Prompt
        </span>
        <Button
          size="sm"
          variant="light"
          onClick={handleCopy}
          className="flex items-center gap-1.5 h-7 px-2.5 font-bold text-xs rounded-lg text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700/60 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-600 transition-all cursor-pointer"
        >
          {copied ? (
            <>
              <FiCheck className="text-emerald-500 text-sm font-black" />
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
            </>
          ) : (
            <>
              <FiCopy className="text-zinc-400 text-sm" />
              <span>Copy</span>
            </>
          )}
        </Button>
      </div>
      <p className="text-zinc-700 dark:text-zinc-300 italic text-base leading-relaxed pr-2">
        "{prompt}"
      </p>
    </div>
  );
};

export default PromptSection;
