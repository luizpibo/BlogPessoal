import styles from '../styles/alert.modules.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
    return (
        <div
            className={cn({
                [styles.sucess]: type === 'success',
                [styles.error]: type === 'error'
            })}
        >
            {children}
        </div>
    )
}