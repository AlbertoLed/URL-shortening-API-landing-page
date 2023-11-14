import { useState, createContext } from 'react'

const ShortenerContext = createContext()

function Shortener({children}) {
    const [currentLink, setCurrentLink] = useState('')
    const [shortenedLinks, setShortenedLinks] = useState([])

    async function shortenIt() {
        try {
            const res = await fetch(`https://url-shortener-service.p.rapidapi.com/shorten`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': '84a54c880dmsh9e134e4ace95faap1bea99jsn4bdda1ae97f5',
                    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
                },
                body: new URLSearchParams({
                    url: currentLink
                })
            })
            // console.log(res)
            const data = await res.json()
            // console.log(data)
    
            setShortenedLinks(prev => {
                return [...prev, {
                    link: currentLink,
                    shortLink: data.result_url,
                    copied: false
                }]
            })
        }
        catch(error) {
            // Show error message
            console.log(error)
        }
    }

    const updateCurrentLink = (text) => setCurrentLink(text)

    return(
        <ShortenerContext.Provider value={{currentLink, updateCurrentLink, shortenIt, shortenedLinks}}>
            <div>{children}</div>
        </ShortenerContext.Provider>
    )
}

export default Shortener
export { ShortenerContext }