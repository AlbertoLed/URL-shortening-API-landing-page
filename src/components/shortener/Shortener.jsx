import { useState, createContext } from 'react'

const ShortenerContext = createContext()

function Shortener({children}) {
    const [currentLink, setCurrentLink] = useState('')

    const updateCurrentLink = (text) => setCurrentLink(text)

    return(
        <ShortenerContext.Provider value={{currentLink, updateCurrentLink}}>
            <div>{children}</div>
        </ShortenerContext.Provider>
    )
}

export default Shortener
export { ShortenerContext }