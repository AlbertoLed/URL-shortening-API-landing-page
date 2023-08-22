import { useContext } from 'react'
import { ShortenerContext } from "./Shortener"
import classNames from 'classnames'

function ShortenerInput({className, ...props}) {
    const {currentLink, updateCurrentLink} = useContext(ShortenerContext)

    const defaultStyle = 'p-3 rounded-md'

    const fin = classNames(defaultStyle, className)

    return(
        <input 
        type="text"
        name='link'
        value={currentLink}
        onChange={(e) => updateCurrentLink(e.target.value)}
        className={fin}
        {...props}
        />
    )
}

export default ShortenerInput