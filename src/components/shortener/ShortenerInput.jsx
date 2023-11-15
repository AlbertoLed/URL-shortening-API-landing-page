import { useContext } from 'react'
import { ShortenerContext } from "./Shortener"
import { twMerge } from 'tailwind-merge'

function ShortenerInput({className, errorClass, ...props}) {
    const {currentLink, updateCurrentLink, handleEnter, errorState} = useContext(ShortenerContext)

    const defaultStyle = twMerge('p-3 rounded-md w-full', className)

    const styles = errorState ? twMerge(defaultStyle, errorClass) : defaultStyle
    console.log(errorState)
    console.log(styles)

    return(
        <input 
        type="text"
        name='link'
        value={currentLink}
        onChange={(e) => updateCurrentLink(e.target.value)}
        onKeyDown={handleEnter}
        className={styles}
        {...props}
        />
    )
}

export default ShortenerInput