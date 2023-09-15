import { useState, createContext } from 'react'

const ShortenerContext = createContext()

function Shortener({children}) {
    const [currentLink, setCurrentLink] = useState('')
    const [shortenedLinks, setShortenedLinks] = useState([])
    console.log(shortenedLinks)
    
    async function shortenIt() {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${currentLink}`)
        const data = await res.json()
        console.log(data)

        setShortenedLinks(prev => {
            return [...prev, {
                shortLink: data.result.full_short_link,
                copied: false
            }]
        })
    }

    const updateCurrentLink = (text) => setCurrentLink(text)

    return(
        <ShortenerContext.Provider value={{currentLink, updateCurrentLink, shortenIt}}>
            <div>{children}</div>
        </ShortenerContext.Provider>
    )
}

export default Shortener
export { ShortenerContext }