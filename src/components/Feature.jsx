function Feature({title, text, image, className}) {
    return(
        <div className={`grid grid-cols-1 grid-rows-1 justify-items-center ${className}`}>
            <div className="col-span-full row-span-full bg-white rounded-md px-6 pb-11 pt-[73px] mt-[45px]">
                <h3 className="text-blue font-bold text-2xl text-center">{title}</h3>
                <p className="text-violet-100 text-center mt-5 leading-6">{text}</p>
            </div>
            <div className="col-span-full row-span-full bg-violet-200 h-[90px] w-[90px] rounded-full flex items-center justify-center">
                <img src={image} alt="icon" />
            </div>
        </div>
    )
}

export default Feature