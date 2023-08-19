import Button from "./Button"

function Header() {
    return(
        <header className='flex flex-col items-center mt-[-20px] space-y-6'>
            {/* background image */}
            <div className='w-full h-[350px] bg-[url("./assets/illustration-working.svg")] bg-no-repeat bg-50 bg-mobile'></div>

            {/* text */}
            <div className='w-full px-[7%] flex flex-col items-center'>
                <h1 className='font-bold text-center text-5xl text-blue leading-[50px] mb-4'>More than just shorter links</h1>
                <p className="text-center text-violet-100 text-lg mb-8">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <Button rounded='full' className='font-bold text-xl'>Get Started</Button>
            </div>
            
        </header>
    )
}

export default Header