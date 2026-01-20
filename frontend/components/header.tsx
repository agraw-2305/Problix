"use client"

import { Sparkles } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/15 bg-background/40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/30">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">Problix</span>
              <span className="text-sm sm:text-base text-muted-foreground/90 tracking-wide leading-snug">Where problems turn into powerful ideas.</span>
            </div>
          </div>

          <a
            href="#"
            className="text-sm font-medium text-muted-foreground/90 hover:text-primary transition-colors duration-300"
          >
            Documentation
          </a>
        </div>
      </div>
    </header>
  )
}
