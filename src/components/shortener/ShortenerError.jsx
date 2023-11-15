import { useContext } from "react"
import { ShortenerContext } from "./Shortener"

export default function ShortenerError({className, children, ...props}) {
    const { errorState } = useContext(ShortenerContext)

    return(
        errorState ? 
        <div 
        className={className}
        {...props}
        >{children ?? errorState}</div> :
        null
    )
}