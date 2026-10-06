import { Spinner } from "./ui/spinner"


export default function SpinnerComp() {

    return (
        <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
            <Spinner className="size-8"/>
        </div>
    )
}