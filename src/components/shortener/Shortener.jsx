import { useState, createContext } from 'react'
import { nanoid } from 'nanoid'

const ShortenerContext = createContext()

function Shortener({children}) {
    const [currentLink, setCurrentLink] = useState('')
    const [shortenedLinks, setShortenedLinks] = useState([])

    console.log(shortenedLinks)

    // Shorten the link
    async function shortenIt() {
        try {
            // Use the API to shorten the link
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

            // Convert the response
            const data = await res.json()
            // console.log(data)

            // If there IS NOT an error in the data
            if(!data.error) {
                setShortenedLinks(prev => {
                    return [...prev, {
                        id: nanoid(),
                        link: currentLink,
                        shortLink: data.result_url,
                        copied: false
                    }]
                })

                //Clean up the input
                setCurrentLink('')
            }
            // If there is an error in the data
            else {
                //Show an error message
                console.log(data.error)
            }
        }
        catch(error) {
            // If the API is not working

            // Show error message
            console.log("Error:", error)
        }
    }

    // Handle the enter in the input
    const handleEnter = (e) => {e.key === "Enter" ? shortenIt() : null}

    // Update the input
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

    // Delete link
    const deleteLink = (id) => {
        const index = shortenedLinks.findIndex(item => item.id === id)
        
        // Delete the link from the list
        setShortenedLinks(item => item.toSpliced(index, 1))
    }

    return(
        <ShortenerContext.Provider value={{currentLink, updateCurrentLink, shortenIt, shortenedLinks, copyLink, handleEnter, deleteLink}}>
            <div>{children}</div>
        </ShortenerContext.Provider>
    )
}

export default Shortener
export { ShortenerContext }