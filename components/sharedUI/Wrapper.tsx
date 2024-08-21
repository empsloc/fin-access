import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const Wrapper =({
    className,
    children
}:{
    className?: string,
    children: ReactNode
})=>{
    return(
        <div className={cn("mx-auto  w-full max-w-screen-xl px-10 md:px-16",className)}>
            {children}
        </div>
    )

}

export default Wrapper;