import classNames from 'classnames'



function Button({children, size, rounded, variant, className, ...props}) {

    const sizeStyles = size === 'sm' ? 'py-3 px-6' : 'py-4 px-9'
    const bgColor = variant === 'applied' ? 'bg-violet-200' : 'bg-cyan'
    const borderRadius = rounded === 'full' ? 'rounded-full' : 'rounded-md'

    const styles = classNames('hover:cursor-pointer hover:saturate-50 hover:brightness-150 text-white', sizeStyles, bgColor, borderRadius, className)

    return(
        <button className={styles} {...props} >{children}</button>
    )
}

export default Button