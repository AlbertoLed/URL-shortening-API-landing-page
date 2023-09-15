import { useContext } from "react" 
import Button from "../Button"
import { ShortenerContext } from "./Shortener"

function ShortenerButton({children, className}) {
    const { shortenIt } = useContext(ShortenerContext)
    return(
        <Button 
        size='xs' 
        className={className}
        onClick={shortenIt}
        >{children}</Button>
    )
}

export default ShortenerButton