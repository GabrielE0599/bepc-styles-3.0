'use client'
import React, { useEffect } from 'react';

import { Metadata } from "next"
import Image from "next/image"

//Componentes de shadcn
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import {
Tabs,
TabsContent,
TabsList,
TabsTrigger,
} from "@/components/ui/tabs"
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import {
Dialog,
DialogContent,
DialogDescription,
DialogHeader,
DialogTitle,
DialogTrigger,
} from "@/components/ui/dialog"

//Custom componentes shadcn
import { AlbumArtwork } from "@/components/data/album-artwork"
import { Menu } from "@/components/custom-components/menu"
import { PodcastEmptyPlaceholder } from "@/components/custom-components/podcast-empty-placeholder"
import { Sidebar } from "@/components/custom-components/sidebar"
import { listenNowAlbums, madeForYouAlbums } from "@/components/data/albums"
import { components } from "@/components/data/components"

//Copy to clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import CopyButton from '@/components/custom-components/copyButton';

//Code Snippet
import CodeSnippet from "@/components/custom-components/CodeSnippet"
import { cn } from "@/lib/utils"

//Custom components
import BepcTable from '@/components/custom-components/BepcTable'
import BepcTableDark from '@/components/custom-components/BepcTableDark'
import BepcTableVariants from '@/components/custom-components/BepcTableVariants'
import BepcTab from '@/components/custom-components/BepcTab'
import BepcTabDark from '@/components/custom-components/BepcTabDark';
import BepcButton from '@/components/custom-components/BepcButton';
import BepcButtonOutline from '@/components/custom-components/BepcButtonOutline';
import BepcIconButton from '@/components/custom-components/BepcIconButton';
import BepcInputText from '@/components/custom-components/BepcInputText';
import BepcModal from '@/components/custom-components/BepcModal';
import BepcModalLeft from '@/components/custom-components/BepcModalLeft';
import BepcModalImage from '@/components/custom-components/BepcModalImage';
import BepcDropdown from '@/components/custom-components/BepcDropdown';

//String de codigos
import howToUse from './codeExamples/howToUse';
import heroIcons from './codeExamples/heroIcons';
import importFigtree from './codeExamples/importFigtree';
import importPoppins from './codeExamples/importPoppins';
import lightTableHtml from './codeExamples/lightTableHtml';
import lightTableCss from './codeExamples/lightTableCss';
import svgExample from './codeExamples/svgExample';
import darkTableHtml from './codeExamples/darkTableHtml';
import darkTableCss from './codeExamples/darkTableCss';
import variantsTableHtml from './codeExamples/variantsTableHtml';
import variantsTableCss from './codeExamples/variantsTableCss';
import lightTabHtml from './codeExamples/lightTabHtml';
import lightTabCss from './codeExamples/lightTabCss';
import lightTabJs from './codeExamples/lightTabJs';
import darkTabHtml from './codeExamples/darkTabHtml';
import darkTabCss from './codeExamples/darkTabCss';
import darkTabJs from './codeExamples/darkTabJs';
import buttonHtml from './codeExamples/buttonHtml';
import buttonCss from './codeExamples/buttonCss';
import buttonOutlineHtml from './codeExamples/buttonOutlineHtml';
import buttonOutlineCss from './codeExamples/buttonOutlineCss';
import iconButtonHtml from './codeExamples/iconButtonHtml';
import iconButtonCss from './codeExamples/iconButtonCss';
import inputTextHtml from './codeExamples/inputTextHtml';
import inputTextCss from './codeExamples/inputTextCss';
import modalHtml from './codeExamples/modalHtml';
import modalCss from './codeExamples/modalCss';
import modalJs from './codeExamples/modalJs';
import dropdownHtml from './codeExamples/dropdownHtml';
import dropdownCss from './codeExamples/dropdownCss';

import { Scroll } from 'lucide-react';

function HomePage() {
const [copied, setCopied] = useState(false);

const handleCopyClick = () => {
setCopied(true);
setTimeout(() => {
setCopied(false);
}, 2000); // Después de 2 segundos, cambia el estado a false para restablecer el texto del botón
};

const { toast } = useToast()

const [hydrated, setHydrated] = React.useState(false);
React.useEffect(() => {
setHydrated(true);
}, []);
if (!hydrated) {
// Returns null on first render, so the client and server match
return null;
}
return (
<>

  <Toaster />
  <div className="hidden md:block">
    {/**/}
    <Menu />
    <div className="border-t">
      <div className="bg-background">
        <div className="grid lg:grid-cols-1">
          <Sidebar components={components} className="hidden lg:block" />
          <div className="main-content">
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <Tabs defaultValue="music" className="h-full space-y-6">
                  <div className="space-between flex items-center">
                    <TabsList>
                      <TabsTrigger value="music" className="relative">
                        Guide
                      </TabsTrigger>
                      <TabsTrigger value="podcasts">About</TabsTrigger>
                    </TabsList>
                    <div className="ml-auto mr-4">
                      <Button>
                        Change log
                      </Button>
                    </div>
                  </div>
                  <TabsContent value="music" className="border-none p-0 outline-none">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h1 className="text-5xl font-bold my-4">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                            stroke="currentColor" className="w-12 h-12 inline-svg">
                            <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                          </svg>
                          Getting started
                        </h1>
                        <h5>
                          BEPC Design System Guidelines
                        </h5>

                        <h1 className="text-3x1 font-regular">
                          Here you can find our design guidelines, component documentation, and resources for building
                          apps with BEPC UI Design based on monday.com design system.
                        </h1>

                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="menu-introduction flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-semibold tracking-tight inline-block-container">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" className="mr-2 w-6 h-6 inline-svg">
                            <path strokeLinecap="round" stroke-linejoin="round"
                              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                          </svg>
                          <span className="inline-text"></span>Introduction
                        </h3>

                        <p className="text-sm text-muted-foreground"></p>
                        <p>Welcome to the BEPC Inc. Web Components and Styles Standardization Guide! This comprehensive
                          guide has been meticulously crafted to provide a cohesive framework for maintaining
                          consistency and coherence across our web-based projects.</p>
                        <br></br>
                        <p>In this guide, you will find a detailed exploration of essential design elements, including
                          colors, buttons, typography, border radius, icons, inputs, notifications, modals, tables, and
                          themes.</p>
                        <br></br>
                        <p>By adhering to these standardized components and styles, we aim to enhance user experience,
                          streamline development processes, and present a unified brand identity.</p>
                        <br></br>
                        <p>Whether you are a designer, developer, or stakeholder, this guide will serve as an
                          indispensable resource to ensure that every digital interaction reflects the professionalism
                          and excellence that BEPC Inc. embodies.</p>

                        <br></br>
                        <Button className="mr-3">Styles</Button><Button>Components</Button>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="menu-how-to-use flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-semibold tracking-tight inline-block-container">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" className="mr-2 w-6 h-6 inline-svg">
                            <path strokeLinecap="round" stroke-linejoin="round"
                              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                          </svg>
                          <span className="inline-text">How to use</span>
                        </h3>
                        <p className="text-sm text-muted-foreground"></p>
                        <p>the standardization process will entail presenting each component along with its designated
                          usage guidelines and accompanying code snippets</p>
                        <br></br>
                        <p>Users will be provided with a clear understanding of the intended purpose of the component
                          and how it fits into the overall design system.</p>
                        <br></br>
                        <p>To implement a specific component, users can simply copy the provided code snippet and
                          seamlessly integrate it into their own codebase. </p>
                        <br></br>
                        <p>This approach ensures that the standardized components and styles are effortlessly
                          incorporated, enabling users to maintain consistency while also expediting their development
                          process.</p>
                        <br></br>

                        <h1 className="text-5x1 font-semibold tracking-tight">Code snippet example</h1>
                        <CodeSnippet code={howToUse} language="javascript" />
                      </div>
                    </div>

                    <Separator className="my-6" />
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h1 className="text-5xl font-bold">
                          Styles
                        </h1>
                        <br></br>
                        <h1 className="text-3x1 font-regular">
                          In this section you will find the colors, fonts and styles defined and required for each BEPC
                          Inc. system.
                        </h1>
                        <br></br>
                      </div>
                    </div>

                    {/*====== Colors ======*/}

                    <div className="menu-colors flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-semibold tracking-tight">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="mr-2 w-6 h-6 inline-svg">
                            <path strokeLinecap="round" stroke-linejoin="round"
                              d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                          </svg>
                          Colors
                        </h3>
                        <p className="text-sm text-muted-foreground"></p>
                        <p>At BEPC Inc., we believe that every hue carries a story, a mood, and a purpose.</p>
                        <p>Our carefully curated color palette reflects the essence of our brand, symbolizing
                          innovation,
                          reliability, and creativity. </p>
                        <p>From primary tones that lay the foundation of our identity to secondary shades that add
                          depth,
                          and from interactive elements to user interfaces, every color choice serves a deliberate
                          function in our design language.</p>
                        <br></br>
                      </div>
                    </div>

                    <h1 className="text-5x1 font-semibold tracking-tight my-2">Main colors</h1>
                    <Card
                      className="hidden items-start justify-center gap-4 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-4 p-3">
                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Primary color</center>
                          </CardTitle>
                          <CardDescription>
                            <ul>
                              <li>
                                <center>Use to emphasise main UI components.</center>
                              </li>
                              <li>
                                <center>Primary buttons.</center>
                              </li>
                            </ul>
                          </CardDescription>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#234367" buttonText="#234367" buttonClass="bepc-color-primary" />
                        </CardFooter>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Primary hover</center>
                          </CardTitle>
                          <CardDescription>
                            <ul>
                              <li>
                                <center>Hover button.</center>
                              </li>
                              <li>
                                <center>Background menu.</center>
                              </li>
                              <li>
                                <center>Tooltip.</center>
                              </li>
                            </ul>
                          </CardDescription>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#152233" buttonText="#152233" buttonClass="bepc-color-primary-hover" />
                        </CardFooter>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Secondary color</center>
                          </CardTitle>
                          <CardDescription>
                            <ul>
                              <li>
                                <center>Secondary button.</center>
                              </li>
                              <li>
                                <center>Highlight elements.</center>
                              </li>
                              <li>
                                <center></center>
                              </li>
                            </ul>
                          </CardDescription>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#FFC82E" buttonText="#FFC82E" buttonClass="bepc-color-secondary" />
                        </CardFooter>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Icon hover color</center>
                          </CardTitle>
                          <CardDescription>
                            <ul>
                              <li>
                                <center>Use as a hover color for select elements.</center>
                              </li>
                            </ul>
                          </CardDescription>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#D9E1E7" buttonText="#D9E1E7" buttonClass="bepc-icon-color-hover" />
                        </CardFooter>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Icon color</center>
                          </CardTitle>
                          <CardDescription>
                            <ul>
                              <li>
                                <center>Default icon color.</center>
                              </li>
                              <li>
                                <center>Border color.</center>
                              </li>
                            </ul>
                          </CardDescription>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#809FB8" buttonText="#809FB8" buttonClass="bepc-icon-color-" />
                        </CardFooter>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Positive color</center>
                          </CardTitle>
                          <CardDescription>
                            <ul>
                              <li>
                                <center>Use to indicate a positive action/state.</center>
                              </li>
                            </ul>
                          </CardDescription>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#00854D" buttonText="#008544D" buttonClass="bepc-positive-color" />
                        </CardFooter>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Negative color</center>
                          </CardTitle>
                          <CardDescription>
                            <ul>
                              <li>
                                <center>Use to indicate a negative action/state.</center>
                              </li>
                            </ul>
                          </CardDescription>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#D83A52" buttonText="#D83A52" buttonClass="bepc-negative-color" />
                        </CardFooter>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Warning color</center>
                          </CardTitle>
                          <CardDescription>
                            <ul>
                              <li>
                                <center>Use to indicate a warning action/state.</center>
                              </li>
                            </ul>
                          </CardDescription>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#FFCB00" buttonText="#FFCB00" buttonClass="bepc-warning-color" />
                        </CardFooter>
                      </Card>

                    </Card>

                    <Separator className="my-6" />

                    <h1 className="text-5x1 font-semibold tracking-tight my-2">Text colors</h1>
                    <Card
                      className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3 p-3">
                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Primary text color</center>
                          </CardTitle>
                          <CardDescription>
                            <ul>
                              <li>
                                <center>Use to emphasise main UI components.</center>
                              </li>
                              <li>
                                <center>Primary buttons.</center>
                              </li>
                            </ul>
                          </CardDescription>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#323338" buttonText="#323338" buttonClass="bepc-light-button" />
                        </CardFooter>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Secondary text color</center>
                          </CardTitle>
                          <CardDescription>
                            <ul>
                              <li>
                                <center>Hover button.</center>
                              </li>
                              <li>
                                <center>Background menu.</center>
                              </li>
                              <li>
                                <center>Tooltip.</center>
                              </li>
                            </ul>
                          </CardDescription>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#676879" buttonText="#676879" buttonClass="bepc-dark-button" />
                        </CardFooter>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Dark theme text color</center>
                          </CardTitle>
                          <CardDescription>
                            <ul>
                              <li>
                                <center>Secondary button.</center>
                              </li>
                              <li>
                                <center>Highlight elements.</center>
                              </li>
                              <li>
                                <center>Icons.</center>
                              </li>
                            </ul>
                          </CardDescription>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#FFFFFF" buttonText="#FFFFFF" buttonClass="bepc-color-primary" />
                        </CardFooter>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Disable text color</center>
                          </CardTitle>
                          <CardDescription>
                            <ul>
                              <li>
                                <center>Default icon color.</center>
                              </li>
                              <li>
                                <center>Border color.</center>
                              </li>
                            </ul>
                          </CardDescription>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#809FB8" buttonText="#809FB8" buttonClass="bepc-disable-button" />
                        </CardFooter>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Placeholder</center>
                          </CardTitle>
                          <CardDescription>
                            <ul>
                              <li>
                                <center>Use as a hover color for select elements.</center>
                              </li>
                            </ul>
                          </CardDescription>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#D9E1E7" buttonText="#D9E1E7" buttonClass="bepc-placeholder-button" />
                        </CardFooter>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Link color</center>
                          </CardTitle>
                          <CardDescription>
                            <ul>
                              <li>
                                <center>Use to indicate a positive action/state.</center>
                              </li>
                            </ul>
                          </CardDescription>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#1F76C2" buttonText="#1F76C2" buttonClass="bepc-link-button" />
                        </CardFooter>
                      </Card>

                    </Card>

                    <Separator className="my-4" />

                    {/*====== Typography ======*/}

                    <div className="menu-typography flex items-center justify-between">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-6 h-6 inline-svg">
                            <path strokeLinecap="round" stroke-linejoin="round"
                              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                          </svg>
                          Typography
                        </h3>
                        <p className="text-sm text-muted-foreground"></p>
                        <p>At BEPC Inc., every design decision is rooted in a purposeful blend of aesthetics and
                          functionality.</p>
                        <p>The careful selection of typefaces plays a pivotal role in creating a consistent and
                          impactful
                          brand identity.</p>
                        <p>To this end, we have chosen Poppins and Figtree as our primary and secondary typefaces, each
                          bringing its unique attributes to our design language.</p>
                        <br></br>
                      </div>
                    </div>

                    <h1 className="text-5x1 font-semibold tracking-tight my-2">Poppins</h1>
                    <p className="text-sm text-muted-foreground"></p>

                    <p>Poppins stands as our primary typeface due to its clean lines, elegant proportions, and modern
                      aesthetics.</p>
                    <p>This sans-serif font, designed with geometric precision, offers exceptional legibility across
                      various screen sizes and contexts.</p>
                    <p>Poppins exudes professionalism, making it an ideal choice for conveying our commitment to
                      reliability and innovation.</p>
                    <p>Its versatility ensures that our content remains engaging, whether in digital interfaces or
                      printed
                      materials.</p>
                    <br></br>
                    <CodeSnippet code={importPoppins} language="css" />

                    <h1 className="text-5x1 font-semibold tracking-tight my-5">Figtree</h1>
                    <p className="text-sm text-muted-foreground"></p>

                    <p>Figtree, our secondary typeface, adds a touch of artistic flair and approachable elegance to our
                      brand.</p>
                    <p>This script font draws inspiration from hand-lettered calligraphy, conveying a sense of human
                      touch
                      and creativity.</p>
                    <p>Figtree flowing lines and subtle variations capture attention and imbue our design elements with
                      warmth, making it perfect for headings, quotes, and decorative accents.</p>
                    <br></br>
                    <CodeSnippet code={importFigtree} language="css" />

                    <h1 className="text-5x1 font-semibold tracking-tight my-3">Examples</h1>

                    <Card className="p-3 my-5">
                      <div className="typo-col">

                        <h1 className="bepc-h1 my-3">Poppins h1</h1>
                        <p>Main heading - Poppins 30 px bold</p>
                        <p>Use as a main header on a page</p>
                      </div>
                    </Card>

                    <Card className="p-3 my-5">
                      <div className="typo-col">
                        <h2 className="bepc-h2 my-3">Poppins h2</h2>
                        <p>Secondary heading - Poppins 24 px bold</p>
                        <p>Use as a secondary header on a page</p>
                      </div>
                    </Card>

                    <Card className="p-3 my-5">
                      <div className="typo-col">
                        <h3 className="bepc-h3 my-3">Poppins h3</h3>
                        <p>Tertiary heading - Poppins 24 px light</p>
                        <p>Use after heading, profile page headings</p>
                      </div>
                    </Card>

                    <Card className="p-3 my-5">
                      <div className="typo-col">
                        <h4 className="bepc-h4 my-3">Poppins h4</h4>
                        <p>Fourth heading - Poppins 18 px bold</p>
                        <p>Use after heading, profile page headings</p>
                      </div>
                    </Card>

                    <Card className="p-3 my-5">
                      <h5 className="bepc-h5 my-3">Poppins h5</h5>
                      <p>Fifth heading - Poppins 16 px bold</p>
                      <p>Use as subtitles for paragraphs</p>
                    </Card>

                    <Card className="p-3 my-5">
                      <p className="figtree-text my-3">Figtree text</p>
                      <p>UI labels / General text - Figtree 14 px regular</p>
                      <p>Use for general text or labels</p>
                    </Card>

                    <Card className="p-3 my-5">
                      <p className="figtree-p my-3">Figtree p</p>
                      <p>Paragraph text - Figtree 16 px regular</p>
                      <p>Use for item name, text in update</p>
                    </Card>

                    <Card className="p-3 my-5">
                      <p className="figtree-subtext my-3">Figtree subtext111</p>
                      <p>Caption / Subtext - Figtree 14 px regular</p>
                      <p>Use for subtexts</p>
                    </Card>

                    <Card className="p-3 my-5">
                      <p className="figtree-link my-3">Figtree link</p>
                      <p>Link text - Figtree 14 px regular</p>
                      <p>Use for links</p>
                    </Card>

                    <Separator className="my-4" />

                    {/*====== Icons ======*/}

                    <div className="menu-icons flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-semibold tracking-tight">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-6 h-6 inline-svg">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                          </svg>

                          Icons
                        </h3>
                        <h5>Hero icons</h5>
                        <p className="text-sm text-muted-foreground"></p>
                        <p>the decision to opt for the Hero Icons library from Tailwind for BEPC Inc. systems was based
                          on its visually appealing designs,
                          seamless integration with existing workflows, adaptability for modern development practices,
                          and open-source nature that encourages customization.
                          This choice is poised to enhance the overall aesthetic, functionality, and user experience of
                          BEPC Inc systems while aligning with their development philosophy.</p>
                        <br></br>
                      </div>
                    </div>
                    <h1 className="text-5x1 font-semibold tracking-tight my-2">Examples</h1>
                    <Card
                      className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-8 p-3 my-5">

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1 p-3">
                        <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                          </svg>
                        </center>

                        <center>
                          <p className="figtree-subtext">Bell-alert</p>
                        </center>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1 p-3">
                        <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                          </svg>
                        </center>

                        <center>
                          <p className="figtree-subtext">Bolt</p>
                        </center>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1 p-3">
                        <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                          </svg>
                        </center>

                        <center>
                          <p className="figtree-subtext">Chat</p>
                        </center>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1 p-3">
                        <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                        </center>

                        <center>
                          <p className="figtree-subtext">Calendar</p>
                        </center>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1 p-3">
                        <center>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                          </svg>

                        </center>

                        <center>
                          <p className="figtree-subtext">Link</p>
                        </center>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1 p-3">
                        <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </center>

                        <center>
                          <p className="figtree-subtext">Mail</p>
                        </center>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1 p-3">
                        <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                          </svg>
                        </center>

                        <center>
                          <p className="figtree-subtext">Heart</p>
                        </center>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-2 lg:col-span-1 p-3">
                        <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                          </svg>
                        </center>

                        <center>
                          <p className="figtree-subtext">Share</p>
                        </center>
                      </Card>

                    </Card>
                    <h1 className="text-5x1 font-semibold tracking-tight my-2">how to use Hero Icons</h1>
                    <h5>Go to the Hero Icons website</h5>
                    <CodeSnippet code={heroIcons} language="bash" />

                    <br></br>

                    <h5>Select an icon and click on the SVG option.</h5>
                    <br></br>
                    <h5>This will copy the SVG icon to your clipboard. Copy it into your code.</h5>
                    <br></br>
                    <h5>You must paste a code like the following</h5>
                    <CodeSnippet code={svgExample} language="bash" />

                    <Separator className="my-4" />

                    {/*====== Themes ======*/}

                    <div className='menu-themes'>
                      <h3 className="text-2xl font-semibold tracking-tight inline-block-container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" className="w-6 h-6 inline-svg">
                          <path strokeLinecap="round" stroke-linejoin="round"
                            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                        <span className="inline-text"></span>Themes

                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground my-2"></p>
                    <p className="my-2">The following are the colors that will be used in the dark theme. </p>
                    <p className="my-2">Any component not mentioned below will retain its original color.</p>
                    <br></br>

                    <h1 className="text-5x1 font-semibold tracking-tight">Dark theme colors</h1>
                    <Card
                      className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-4 p-3 my-5">

                      <Card className="col-span-2 grid items-start gap-1 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Dark theme text color</center>
                          </CardTitle>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#FFFFFF" buttonText="#FFFFFF" buttonClass="bepc-color-primary" />
                        </CardFooter>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-1 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Dark theme background</center>
                          </CardTitle>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#323338" buttonText="#323338" buttonClass="bepc-color-primary" />
                        </CardFooter>
                      </Card>

                      <Card className="col-span-2 grid items-start gap-1 lg:col-span-1">
                        <CardHeader>
                          <CardTitle>
                            <center>Dark theme icons color</center>
                          </CardTitle>
                        </CardHeader>
                        <CardFooter style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <CopyButton text="#FFFFFF" buttonText="#FFFFFF" buttonClass="bepc-color-primary" />
                        </CardFooter>
                      </Card>

                    </Card>

                    <h1 className="text-5x1 font-semibold tracking-tight my-3">Dark theme example</h1>

                    <Card className="p-3">
                      <CardHeader>
                        <CardTitle>
                          <Image src="/dark-theme-example.png" width={1280} height={1114} alt="Music"
                            className="block dark:hidden" />
                        </CardTitle>
                      </CardHeader>
                    </Card>
                    <p className="my-3">As we can see, components such as buttons and tooltips retain their colors,
                      while changing the background color and text color, as well as the color of the icons.</p>

                    <Separator className="my-6" />
                    <div className="">
                      <h1 className="text-5xl font-bold">
                        Components
                      </h1>
                      <br></br>
                      <h1 className="text-3x1 font-regular">
                        This section will show the components designed for BEPC systems.
                      </h1>
                      <br></br>
                    </div>

                    {/*====== Tables ======*/}

                    <div className="menu-colors flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-semibold tracking-tight">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-6 h-6 inline-svg">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                          </svg>
                          Tables
                        </h3>
                        <p className="text-sm text-muted-foreground"></p>
                        <p>The following is an example of what BEPC system tables should look like.</p>
                        <br></br>
                      </div>
                    </div>
                    <h1 className="text-5x1 font-semibold tracking-tight my-3">Light table example</h1>
                    <Card className="my-2 p-3">
                      <BepcTable></BepcTable>
                    </Card>

                    <p className='my-4'>Click here to see the code</p>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>HTML</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>HTML</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a table like this with HTML and CSS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={lightTableHtml} language="html" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger><Button>CSS</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>CSS</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a table like this with HTML and CSS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={lightTableCss} language="html" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    <br></br>

                    <Separator className="my-6" />

                    <h1 className="text-5x1 font-semibold tracking-tight my-3">Dark table example</h1>
                    <Card className=" dark-card my-2 p-3">
                      <BepcTableDark></BepcTableDark>
                    </Card>

                    <p className='my-4'>Click here to see code</p>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>HTML</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>HTML</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a table like this with HTML and CSS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={darkTableHtml} language="html" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>CSS</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>CSS</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a table like this with HTML and CSS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={darkTableCss} language="html" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Separator className="my-6" />

                    <h1 className="text-5x1 font-semibold tracking-tight my-3">Table color variants</h1>
                    <Card className="my-2 p-3">
                      <BepcTableVariants></BepcTableVariants>
                    </Card>

                    <p className='my-4'>Click here to see code</p>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>HTML</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>HTML</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a table like this with HTML and CSS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={variantsTableHtml} language="html" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>CSS</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>CSS</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a table like this with HTML and CSS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={variantsTableCss} language="html" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Separator className="my-6" />

                    {/*====== Tabs ======*/}

                    <div className="menu-colors flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-semibold tracking-tight">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="inline-svg w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                          </svg>

                          Tabs
                        </h3>
                        <p className="text-sm text-muted-foreground"></p>
                        <p>The following is an example of what BEPC system tabs should look like.</p>
                        <br></br>
                      </div>
                    </div>

                    <h1 className="text-5x1 font-semibold tracking-tight my-3">Light tab example</h1>
                    <Card className='p-3'>
                      <BepcTab></BepcTab>
                    </Card>

                    <p className='my-4'>Click here to see code</p>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>HTML</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>HTML</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a tab like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={lightTabHtml} language="html" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>CSS</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>CSS</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a tab like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={lightTabCss} language="css" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>JS</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>JS</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a tab like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={lightTabJs} language="javascript" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Separator className="my-6" />

                    <h1 className="text-5x1 font-semibold tracking-tight my-3">Dark tab example</h1>
                    <Card className='dark-card p-3'>
                      <BepcTabDark></BepcTabDark>
                    </Card>

                    <p className='my-4'>Click here to see code</p>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>HTML</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>HTML</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a tab like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={darkTabHtml} language="html" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>CSS</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>CSS</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a tab like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={darkTabCss} language="css" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>JS</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>JS</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a tab like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={darkTabJs} language="javascript" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <br></br>

                    <Separator className="my-6" />

                    {/*====== Buttons ======*/}

                    <div className="menu-colors flex items-center justify-between my-2">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-semibold tracking-tight">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-6 h-6 inline-svg">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                          </svg>
                          Button
                        </h3>
                        <p className="text-sm text-muted-foreground"></p>
                        <p>The following is an example of what BEPC system button should look like.</p>
                      </div>
                    </div>

                    <h1 className="text-5x1 font-semibold tracking-tight my-3">Buttons examples</h1>
                    <Card className='p-3'>
                      <BepcButton></BepcButton>
                    </Card>

                    <p className='my-4'>Click here to see code</p>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>HTML</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>HTML</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a button like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={buttonHtml} language="javascript" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>CSS</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>CSS</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a button like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={buttonCss} language="javascript" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Separator className="my-6" />

                    {/*====== Button outlined ======*/}

                    <div className="menu-colors flex items-center justify-between my-2">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-semibold tracking-tight">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-6 h-6 inline-svg">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                          </svg>
                          Button outline
                        </h3>
                        <p className="text-sm text-muted-foreground"></p>
                        <p>The following is an example of what BEPC system button outlined should look like.</p>
                      </div>
                    </div>

                    <h1 className="text-5x1 font-semibold tracking-tight my-3">Button outlined example</h1>
                    <Card className='p-3'>
                      <BepcButtonOutline></BepcButtonOutline>
                    </Card>

                    <p className='my-4'>Click here to see code</p>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>HTML</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>HTML</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a button like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={buttonOutlineHtml} language="html" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>CSS</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>CSS</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a button like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={buttonOutlineCss} language="css" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Separator className="my-6" />

                    {/*====== Icon button ======*/}

                    <div className="menu-colors flex items-center justify-between my-2">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-semibold tracking-tight">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-6 h-6 inline-svg">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                          </svg>
                          Icon button
                        </h3>
                        <p className="text-sm text-muted-foreground"></p>
                        <p>The following is an example of what BEPC system icon button should look like.</p>
                      </div>
                    </div>

                    <h1 className="text-5x1 font-semibold tracking-tight my-3">Icon button example</h1>
                    <Card className='p-3'>
                      <BepcIconButton></BepcIconButton>
                    </Card>

                    <p className='my-4'>Click here to see code</p>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>HTML</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>HTML</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a icon button like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={iconButtonHtml} language="html" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>CSS</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>CSS</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a icon button like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={iconButtonCss} language="css" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Separator className="my-6" />

                    {/*====== Input text ======*/}

                    <div className="menu-colors flex items-center justify-between my-2">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-semibold tracking-tight">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="inline-svg w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                          </svg>

                          Input text
                        </h3>
                        <p className="text-sm text-muted-foreground"></p>
                        <p>The following is an example of what BEPC system input text should look like.</p>
                      </div>
                    </div>

                    <h1 className="text-5x1 font-semibold tracking-tight my-3">Input text example</h1>
                    <Card className='p-3'>
                      <BepcInputText></BepcInputText>
                    </Card>

                    <p className='my-4'>Click here to see code</p>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>HTML</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>HTML</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a input text like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={inputTextHtml} language="html" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>CSS</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>CSS</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a input text like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={inputTextCss} language="css" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Separator className="my-6" />

                    {/*====== Modal ======*/}

                    <div className="menu-colors flex items-center justify-between my-2">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-semibold tracking-tight">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="inline-svg w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                          </svg>

                          Modal
                        </h3>
                        <p className="text-sm text-muted-foreground"></p>
                        <p>The following is an example of what BEPC system modal should look like.</p>
                      </div>
                    </div>

                    <h1 className="text-5x1 font-semibold tracking-tight my-3">Modal example</h1>
                    <Card className='p-5'>
                      <div className="mx-2"><BepcModal></BepcModal> <BepcModalLeft></BepcModalLeft> <BepcModalImage></BepcModalImage></div>

                    </Card>

                    <p className='my-4'>Click here to see code</p>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>HTML</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>HTML</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a modal like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={modalHtml} language="html" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>CSS</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>CSS</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a modal like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={modalCss} language="css" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>JS</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>JS</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a modal like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={modalJs} language="js" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Separator className="my-6" />

                    {/*====== Dropdown ======*/}

                    <div className="menu-colors flex items-center justify-between my-2">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-semibold tracking-tight">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6 inline-svg">
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                        </svg>
                          Dropdown
                        </h3>
                        <p className="text-sm text-muted-foreground"></p>
                        <p>The following is an example of what BEPC system dropdown should look like.</p>
                      </div>
                    </div>

                    <h1 className="text-5x1 font-semibold tracking-tight my-3">Dropdown example</h1>
                    <Card className='p-5'>
                      <div className="mx-2"><BepcDropdown></BepcDropdown></div>

                    </Card>

                    <p className='my-4'>Click here to see code</p>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>HTML</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>HTML</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a dropdown like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={dropdownHtml} language="html" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger><Button className='mr-2'>CSS</Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>CSS</DialogTitle>

                          <DialogDescription>
                            <p>And this is the basic structure to create a dropdown like this with HTML, CSS and JS.
                              Depending on the requirements of the project, it is possible to modify it.</p>
                          </DialogDescription>
                          <ScrollArea className='w-[60vw]'></ScrollArea>
                          <div className="dialog-content">
                            <CodeSnippet code={dropdownCss} language="css" />
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    {/*
                    <ScrollArea>
                      <div className="flex space-x-4 pb-4">
                        {listenNowAlbums.map((album) => (
                        <AlbumArtwork key={album.name} album={album} className="w-[250px]" aspectRatio="portrait"
                          width={250} height={330} />
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                    <div className="mt-6 space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        Made for You
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Your personal playlists. Updated daily.
                      </p>
                    </div>
                    <Separator className="my-4" />
                    <div className="relative">
                      <ScrollArea>
                        <div className="flex space-x-4 pb-4">
                          {madeForYouAlbums.map((album) => (
                          <AlbumArtwork key={album.name} album={album} className="w-[150px]" aspectRatio="square"
                            width={150} height={150} />
                          ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </div>
                  </TabsContent>
                  <TabsContent value="podcasts" className="h-full flex-col border-none p-0 data-[state=active]:flex">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          New Episodes
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your favorite podcasts. Updated daily.
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <PodcastEmptyPlaceholder />
                    */}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
);
};

export default HomePage;