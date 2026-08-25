import { createContext, useContext, useState, type ReactNode } from "react";
import { selectedFive } from "@/lib/data/content";

type Selection = {
  slug: string;
  setSlug: (slug: string) => void;
};

const Ctx = createContext<Selection | null>(null);

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [slug, setSlug] = useState<string>(selectedFive[0].slug);
  return <Ctx.Provider value={{ slug, setSlug }}>{children}</Ctx.Provider>;
}

export function useSelection() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSelection must be used within SelectionProvider");
  return ctx;
}

export function scrollToWork() {
  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
}
