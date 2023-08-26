import Shortener from "./shortener/Shortener"
import ShortenerInput from "./shortener/ShortenerInput"
import Button from "./Button"

function Main() {

    return(
        <main className="bg-gray-100 mt-[90px]">
            <div className="grid grid-cols-1 grid-rows-1">
                <div className="bg-white h-[80px] w-full col-span-full row-span-full"></div>
                <div className=" col-span-full row-span-full">
                    <Shortener>
                        <div className='bg-violet-200 bg-[url(assets/bg-shorten-mobile.svg)] bg-no-repeat bg-rt p-6 space-y-4 mx-[7%] rounded-xl'>
                            <ShortenerInput 
                            placeholder='Shorten a link here...'
                            className='py-3 px-4'
                            />
                            <Button size='xs' className='font-bold text-lg w-full'>Shorten it!</Button>
                        </div>
                        
                    </Shortener>
                </div>
                
            </div>
            
            <div className="mt-[90px] px-[7%] space-y-5">
                <h2 className='text-blue text-3xl font-bold text-center'>Advanced Statistics</h2>
                <p className='text-violet-100 text-center'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            
        </main>
    )
}

export default Main