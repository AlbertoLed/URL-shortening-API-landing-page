import Button from "../Button"

function ShortenerButton({children, className}) {
    return(
        <Button 
        size='xs' 
        className={className}
        >{children}</Button>
    )
}

export default ShortenerButton