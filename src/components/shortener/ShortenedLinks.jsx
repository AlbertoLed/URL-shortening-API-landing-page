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
                    <p className="p-4 pb-3 truncate">{item.link}</p>
                    <div className="w-full h-px bg-gray-100"></div>
                    <p className="text-cyan px-4 py-3">{item.shortLink}</p>
                    <div className="px-4 pb-4 pt-0">
                        <Button className="w-full py-[9px]" size="sm">{item.copied ? 'Copy' : 'Copied!'}</Button>
                    </div>
                </div>
                )}

        </>
    )
}

export default ShortenedLinks