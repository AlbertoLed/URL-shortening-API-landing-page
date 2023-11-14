import { useContext } from 'react'
import { ShortenerContext } from "./Shortener"
import classNames from 'classnames'

function ShortenerInput({className, ...props}) {
    const {currentLink, updateCurrentLink, handleEnter} = useContext(ShortenerContext)

    const defaultStyle = 'p-3 rounded-md w-full'

    const styles = classNames(defaultStyle, className)

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