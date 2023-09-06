import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import React, {useState} from "react"

import { Link } from "react-scroll"

import { Components } from "../data/components"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  components: Components[]
}

export function Sidebar({ className, components }: SidebarProps) {

  const [activeButton, setActiveButton] = useState<string | null>(null);
  const handleButtonClick = (variant: string) => {
    setActiveButton(variant);
  };



  return (
  <ScrollArea className="sidebar-scrollarea h-[100vh] px-1">
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Getting started
          </h2>
          <div className="space-y-1">
            <Button variant={activeButton == "introduction" ? 'secondary' : 'ghost'}
            onClick={() => handleButtonClick('introduction')}
            className="w-full justify-start">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="mr-2 w-4 h-4">
            <path stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>


              <Link
              to="menu-introduction"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Introduction</Link> 
            </Button>
            <Button variant={activeButton == "how-to-use" ? 'secondary' : 'ghost'}
            onClick={() => handleButtonClick('how-to-use')}
            className="w-full justify-start">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="mr-2 w-4 h-4">
            <path strokeLinecap="round"
            stroke-linejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>

            <Link
              to="menu-how-to-use"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>How to use</Link> 
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Style
          </h2>
          <div className="space-y-1">
            <Button variant={activeButton == "colors" ? 'secondary' : 'ghost'}
            onClick={() => handleButtonClick('colors')}
            className="w-full justify-start">
            <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="mr-2 w-4 h-4">
            <path strokeLinecap="round"
            stroke-linejoin="round"
            d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
            </svg>
            <Link
              to="menu-colors"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Colors</Link> 
            </Button>
            <Button variant={activeButton == "typography" ? 'secondary' : 'ghost'}
            onClick={() => handleButtonClick('typography')}
            className="w-full justify-start">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="mr-2 w-4 h-4">
            <path strokeLinecap="round"
            stroke-linejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>


            <Link
              to="menu-typography"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Typography</Link> 
            </Button>
            <Button variant={activeButton == "icons" ? 'secondary' : 'ghost'}
            onClick={() => handleButtonClick('icons')}
            className="w-full justify-start">
            <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="mr-2 w-4 h-4">
            <path strokeLinecap="round"
            stroke-linejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path strokeLinecap="round"
            stroke-linejoin="round"
            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
            </svg>

            <Link
              to="menu-icons"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Icons</Link> 
            </Button>
            
            <Button variant={activeButton == "themes" ? 'secondary' : 'ghost'}
            onClick={() => handleButtonClick('themes')}
            className="w-full justify-start">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="mr-2 w-4 h-4">
            <path strokeLinecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>

            <Link
              to="menu-themes"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Themes</Link> 
            </Button>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Components
          </h2>
          
            <div className="space-y-1 p-2">
              {components?.map((component, i) => (
                <Button
                  key={`${component}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-2 w-4 h-4">
  <path strokeLinecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>


                  {component}
                </Button>
              ))}
            </div>
          
        </div>
      </div>
    </div>
    </ScrollArea>
  )
}