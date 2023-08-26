function Feature({title, text, image}) {
    return(
        <div>
                <img src={image} alt="icon" />
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature