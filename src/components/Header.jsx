import Button from "./Button"

function Header() {
    return(
        <header className='flex flex-col items-center mt-[-20px] space-y-6 lg:flex-row lg:mt-[30px] lg:space-y-0'>
            {/* background image */}
            <div className='w-full h-[350px] bg-[url("./assets/illustration-working.svg")] bg-no-repeat bg-phone-size bg-right-top md:h-[500px] md:bg-desktop-size lg:order-2 lg:w-[0] lg:basis-[45%]'></div>

            {/* text */}
            <div className='w-full px-[7%] flex flex-col items-center md:items-start md:pl-[7%] md:pr-0 md:w-[600px] lg:order-1 lg:pl-[12%] lg:basis-[55%]'>
                <h1 className='font-bold tracking-tight text-center text-5xl text-blue leading-[50px] mb-4 md:text-7xl md:leading-[90px] md:text-left lg:mb-2 lg:max-w-[600px]'>More than just shorter links</h1>
                <p className="text-center text-violet-100 text-lg mb-8 md:text-2xl md:text-left lg:mb-12 lg:max-w-[600px]">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <Button rounded='full' className='font-bold text-xl'>Get Started</Button>
            </div>
            
        </header>
    )
}

export default Header