"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-dark-900 text-slate-50 transition-bg",
        className
      )}
      {...props}
    >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,#ffffff_0%,#ffffff_7%,transparent_10%,transparent_12%,#ffffff_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,#0f172a_0%,#0f172a_7%,transparent_10%,transparent_12%,#0f172a_16%)]
            [--aurora:repeating-linear-gradient(100deg,#e07856_10%,#d16946_15%,#b85a3a_20%,#d16946_25%,#e07856_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            blur-[10px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-screen
            pointer-events-none
            absolute -inset-[10px] opacity-70 will-change-transform`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_90%)]`
            )}
          ></div>
        </div>
        {children}
    </div>
  );
};
