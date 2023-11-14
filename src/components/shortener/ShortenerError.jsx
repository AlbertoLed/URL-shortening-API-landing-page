import { useContext } from "react"
import { ShortenerContext } from "./Shortener"

export default function ShortenerError({className, children, ...props}) {
    const { errorState } = useContext(ShortenerContext)

    return(
        <div 
        className={className}
        {...props}
        >{errorState ? children ?? errorState : null}</div>
    )
}