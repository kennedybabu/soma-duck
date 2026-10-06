import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toast";
import ConditionalChrome from "@/components/ConditonalChrome";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "SomaDuck",
  description: "Get all your courses in one place.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", montserrat.className, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <Suspense fallback={
            <div className="flex min-h-screen bg-[#f5f7f9] w-full items-center justify-center">
              <Spinner className="size-14"/>
            </div>
            }>
            {/* <ConditzionalChrome> */}
              {children}
            {/* </ConditionalChrome> */}
          </Suspense>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
