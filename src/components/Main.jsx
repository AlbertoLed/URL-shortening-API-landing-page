import Shortener from "./shortener/Shortener"
import ShortenerInput from "./shortener/ShortenerInput"
import Button from "./Button"

function Main() {

    return(
        <main className="bg-gray-100">
            <Shortener>
                <div className='bg-violet-200 p-6 space-y-4'>
                    <ShortenerInput 
                    placeholder='Shorten a link here...'
                    />
                    <Button className='font-bold text-lg py-2 w-full'>Shorten it!</Button>
                </div>
                
            </Shortener>
            <div>
                <h2 className='text-blue text-3xl font-bold text-center'>Advanced Statistics</h2>
                <p className='text-violet-100 text-center'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            
        </main>
    )
}

export default Main