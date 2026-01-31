import React from "react";
import { ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface MobileHistorySectionProps {
  title: string;
  isMobile: boolean;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

/**
 * No mobile, transforma a seção em um bloco colapsável para reduzir altura/scroll.
 * No desktop, renderiza título + conteúdo normalmente.
 */
export default function MobileHistorySection({
  title,
  isMobile,
  defaultOpen = false,
  children,
}: MobileHistorySectionProps) {
  if (!isMobile) {
    return (
      <section className="space-y-2 sm:space-y-3">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-foreground px-1">
          {title}
        </h2>
        {children}
      </section>
    );
  }

  return (
    <Collapsible defaultOpen={defaultOpen}>
      <section className="space-y-2">
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className={cn(
              "w-full flex items-center justify-between gap-3 px-1",
              "text-left"
            )}
          >
            <span className="text-base font-semibold text-foreground">{title}</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform data-[state=open]:rotate-180" />
          </button>
        </CollapsibleTrigger>

        <CollapsibleContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
          <div className="pt-2">{children}</div>
        </CollapsibleContent>
      </section>
    </Collapsible>
  );
}
