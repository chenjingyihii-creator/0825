import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Stats } from "@/components/stats";
import { WorkFolders } from "@/components/work-folders";
import { SelectionProvider } from "@/lib/selection";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const t = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <SelectionProvider>
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <WorkFolders />
        <Stats />
        <Contact />
      </main>
    </SelectionProvider>
  );
}