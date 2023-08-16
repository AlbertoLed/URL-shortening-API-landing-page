import classNames from 'classnames'



function Button({children, size, rounded, variant, className, ...props}) {

    const bgColor = variant === 'applied' ? 'bg-violet-200' : 'bg-cyan'

    const borderRadius = rounded === 'full' ? 'rounded-full' : 'rounded-md'



    const styles = classNames('py-3 hover:cursor-pointer hover:saturate-50 hover:brightness-150', bgColor, borderRadius, className)
    return(
        <button className={styles} {...props} >{children}</button>
    )
}

export default Button