import Shortener from "./shortener/Shortener"
import ShortenerInput from "./shortener/ShortenerInput"
import Button from "./Button"
import Feature from "./Feature"
import data from './Data.js'

function Main() {

    const shortenerBgImage = 'bg-[url(assets/bg-shorten-mobile.svg)] bg-no-repeat bg-rt md:bg-[url(assets/bg-shorten-desktop.svg)] md:bg-cover md:bg-center'
    const boostBgImage = "bg-[url('assets/bg-boost-mobile.svg')] bg-no-repeat bg-cover md:bg-[url('assets/bg-boost-desktop.svg')]"

    return(
        <main className="bg-gray-100 mt-[90px]">
            <div className="grid grid-cols-1 grid-rows-1">
                <div className="bg-white h-[80px] w-full col-span-full row-span-full md:h-[48px] lg:h-[81px]"></div>
                <div className="col-span-full row-span-full">
                    <Shortener>
                        <div className={`${shortenerBgImage} bg-violet-200 p-6 space-y-4 w-[86%] mx-auto rounded-xl md:flex md:space-x-6 md:space-y-0 lg:w-[76%] lg:max-w-[1150px] lg:py-[50px] lg:px-[60px]`}>
                            <ShortenerInput 
                            placeholder='Shorten a link here...'
                            className='py-3 px-4 md:rounded-lg lg:text-xl lg:py-4 lg:px-8'
                            />
                            <Button size='xs' className='font-bold text-lg w-full md:w-[220px] md:rounded-lg lg:text-xl lg:py-4'>Shorten it!</Button>
                        </div>
                        
                    </Shortener>
                </div>
                
            </div>
            
            <section className="mt-[90px] mx-auto w-[86%] pb-[80px] lg:w-[76%] lg:max-w-[1150px]">
                <div className="space-y-5 max-w-[520px] mx-auto">
                    <h2 className='text-blue text-3xl font-bold text-center lg:text-5xl'>Advanced Statistics</h2>
                    <p className='text-violet-100 text-center lg:text-lg'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
                <div className="relative mx-auto lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-[2.7%] lg:mt-[50px] lg:items-center">
                    {data.map(element => 
                    <Feature 
                        key={element.id}
                        title={element.title}
                        text={element.text}
                        image={element.image}
                        className={`relative z-10 mt-[50px] lg:mt-0 ${element.id === 1 && `lg: mb-[85px]`} ${element.id === 3 && `lg:self-end`}`}
                    />)}
                    <div className="absolute top-[55px] left-1/2 w-[4px] h-[90%] bg-cyan z-0 lg:top-1/2 lg:left-0 lg:w-full lg:h-[4px]"></div>
                    <div className="absolute top-[55px] right-1/2 w-[4px] h-[90%] bg-cyan z-0 lg:top-auto lg:bottom-1/2 lg:right-0 lg:w-full lg:h-[4px]"></div>
                </div>
            </section>

            <section className={`${boostBgImage} bg-violet-200 h-[300px] flex flex-col items-center justify-center space-y-4 lg:h-[250px]`}>
                <h2 className="text-white text-3xl font-bold lg:text-5xl">Boost your links today</h2>
                <Button rounded="full" className="font-bold text-xl px-12">Get Started</Button>
            </section>
            
            
        </main>
    )
}

export default Main