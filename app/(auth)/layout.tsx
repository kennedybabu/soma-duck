import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";

export default function AuthLayout({ children }: { children: React.ReactNode}) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
        <Suspense fallback = {
          <div className="flex min-h-screen bg-[#f5f7f9] w-full items-center justify-center">
            <Spinner className="size-14" />
          </div>
          }>
          {children}            
        </Suspense>
    </div>
  )
}
