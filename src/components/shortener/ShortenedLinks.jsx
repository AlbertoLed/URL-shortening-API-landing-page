import { useContext } from "react"
import { ShortenerContext } from "./Shortener"
import Button from "../Button"

function ShortenedLinks() {
    const { shortenedLinks } = useContext(ShortenerContext)

    console.log(shortenedLinks)

    return(
        <>
            {shortenedLinks.map(item => 
                <div className="rounded-lg bg-white w-full">
                    <p className="p-3">{item.link}</p>
                    <div className="w-full h-px bg-gray-100"></div>
                    <p className="text-cyan p-3">{item.shortLink}</p>
                    <div className="p-3">
                        <Button className="w-full">{item.copied ? 'Copy' : 'Copied!'}</Button>
                    </div>
                </div>
                )}

        </>
    )
}

export default ShortenedLinks