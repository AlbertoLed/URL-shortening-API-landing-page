import classNames from 'classnames'



function Button({children, size, rounded, variant, className, ...props}) {

    const sizeStyles = () => {
        let sizeStyle
        switch(size) {
            case 'sm': sizeStyle = 'py-3 px-6'
                break
            case 'xs': sizeStyle = 'py-2.5 px-5'
                break
            default: sizeStyle = 'py-4 px-9'
        }
        return sizeStyle
    }
    const bgColor = variant === 'applied' ? 'bg-violet-200' : 'bg-cyan'
    const borderRadius = rounded === 'full' ? 'rounded-full' : 'rounded-md'

    const styles = classNames('hover:cursor-pointer hover:saturate-50 hover:brightness-150 text-white', sizeStyles( ), bgColor, borderRadius, className)

    return(
        <button className={styles} {...props} >{children}</button>
    )
}

export default Button