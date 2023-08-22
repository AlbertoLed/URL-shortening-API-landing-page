import Button from "./Button"

function Header() {
    return(
        <header className='flex flex-col items-center mt-[-20px] space-y-6 md:flex-row lg:mt-[30px] lg:space-y-0'>
            {/* background image */}
            <div className='w-full h-[350px] bg-[url("./assets/illustration-working.svg")] bg-no-repeat bg-phone-size bg-right-top md:order-2 md:h-[350px] md:w-[0] md:basis-[46%] lg:h-[500px] lg:bg-left-top lg:bg-desktop-size lg:basis-[48%]'></div>

            {/* text */}
            <div className='w-full px-[7%] flex flex-col items-center md:pr-0 md:items-start md:basis-[54%] lg:px-0 lg:order-1 lg:basis-[40%] lg:max-w-[612px] lg:ml-auto'>
                <h1 className='font-bold tracking-tight text-center text-5xl text-blue leading-[50px] mb-4 md:text-left lg:text-7xl lg:leading-[90px] lg:mb-2 lg:max-w-[600px]'>More than just shorter links</h1>
                <p className="text-center text-violet-100 text-lg mb-8 md:text-left lg:text-2xl lg:mb-12 lg:max-w-[600px]">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <Button rounded='full' className='font-bold text-xl'>Get Started</Button>
            </div>
            
        </header>
    )
}

export default Header