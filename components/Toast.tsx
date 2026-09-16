"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import { IconCheck, IconX } from "./Icons";

type ToastMessage = {
  id: string;
  text: string;
  type?: "success" | "info";
};

type ToastContextType = {
  showToast: (text: string, type?: "success" | "info") => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((text: string, type: "success" | "info" = "success") => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, text, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="pointer-events-none fixed bottom-6 right-6 z-[200] flex max-w-sm flex-col gap-2.5"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center gap-3 border border-line-2 bg-ink-2 px-4 py-3 text-sm shadow-2xl backdrop-blur-xl"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-moss/60 text-moss">
              <IconCheck className="h-3.5 w-3.5" />
            </div>
            <p className="flex-1 text-xs font-medium leading-relaxed text-fawn">{toast.text}</p>
            <button
              type="button"
              onClick={() => removeToast(toast.id)}
              className="text-smoke transition-colors hover:text-paper"
              aria-label="Dismiss notification"
            >
              <IconX className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
}