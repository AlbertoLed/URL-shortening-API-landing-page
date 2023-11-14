import { useState, createContext } from 'react'
import { nanoid } from 'nanoid'

const ShortenerContext = createContext()

function Shortener({children}) {
    const [currentLink, setCurrentLink] = useState('')
    const [shortenedLinks, setShortenedLinks] = useState([])

    console.log(shortenedLinks)

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
            if(!data.error) {
                setShortenedLinks(prev => {
                    return [...prev, {
                        id: nanoid(),
                        link: currentLink,
                        shortLink: data.result_url,
                        copied: false
                    }]
                })
            }
            else {
                //Show an error message
                console.log(data.error)
            }
            
        }
        catch(error) {
            // Show error message
            console.log("Error:", error)
        }
    }

    const updateCurrentLink = (text) => setCurrentLink(text)

    // Copy link
    const copyLink = async (id) => {
        const index = shortenedLinks.findIndex(item => item.id === id)

        try {
            const res = await navigator.clipboard.writeText(shortenedLinks[index].shortLink)
            // console.log("succeded:", res)
            setShortenedLinks(item => {
                const newLinksList = []
                item.forEach(element => element.id === id ? 
                    newLinksList.push({...element, copied: true}) : 
                    newLinksList.push({...element, copied: false}))

                return newLinksList
            })
        }
        catch(error) {
            console.log("Error message:", error)
        }
    }

    return(
        <ShortenerContext.Provider value={{currentLink, updateCurrentLink, shortenIt, shortenedLinks, copyLink}}>
            <div>{children}</div>
        </ShortenerContext.Provider>
    )
}

export default Shortener
export { ShortenerContext }