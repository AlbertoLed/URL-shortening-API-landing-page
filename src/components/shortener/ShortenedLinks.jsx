import { useContext } from "react"
import { ShortenerContext } from "./Shortener"
import Button from "../Button"

function ShortenedLinks() {
    const { shortenedLinks, copyLink } = useContext(ShortenerContext)

    console.log(shortenedLinks)

    return(
        <>
            {shortenedLinks.map(item => 
                <div 
                key={item.id}
                className="rounded-lg bg-white w-full lg:flex lg:items-center lg:px-6 lg:py-4">
                    <p className="p-4 pb-3 truncate lg:p-0 lg:mr-6 lg:text-lg">{item.link}</p>
                    <div className="w-full h-px bg-gray-100 lg:hidden"></div>
                    <p className="text-cyan px-4 py-3 lg:p-0 lg:whitespace-nowrap lg:ml-auto lg:text-lg">{item.shortLink}</p>
                    <div className="px-4 pb-4 pt-0 lg:p-0 lg:ml-6">
                        <Button 
                        onClick={() => copyLink(item.id)}
                        className="w-full font-bold lg:w-[100px]" size="xs"
                        variant={item.copied ? 'applied' : ''}
                        >{item.copied ? 'Copied!' : 'Copy'}</Button>
                    </div>
                </div>
                )}

        </>
    )
}

export default ShortenedLinks