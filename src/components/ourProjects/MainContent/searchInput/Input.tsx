import React, {FC} from 'react';
import styles from '../../../../styles/OurProjects.module.css'


type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {

    return <input type='txt' placeholder='Search' className={styles.search_input} ref={ref} {...props} />
})

Input.displayName = 'Input'

export default Input;