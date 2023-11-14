import { useContext } from "react"
import { FaXmark } from "react-icons/fa6";
import { ShortenerContext } from "./Shortener"
import Button from "../Button"

function ShortenedLinks() {
    const { shortenedLinks, copyLink, deleteLink } = useContext(ShortenerContext)

    console.log(shortenedLinks)

    return(
        <>
            {shortenedLinks.map(item => 
                <div 
                key={item.id}
                className="rounded-lg bg-white w-full lg:flex lg:items-center lg:px-6 lg:py-4">
                    <div className="flex items-center justify-between lg:truncate">
                        <p className="p-4 pb-3 truncate basis-[90%] order-2 lg:p-0 lg:mr-6 lg:text-lg">{item.link}</p>
                        <FaXmark 
                        onClick={() => deleteLink(item.id)}
                        className="mr-4 h-[20px] order-3 text-rose-400 hover:text-rose-600 hover:cursor-pointer transition-colors lg:order-1" />
                    </div>
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