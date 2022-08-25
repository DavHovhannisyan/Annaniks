import React, {FC, useState} from 'react';
import styles from '../../../../styles/OurProjects.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface IProps {
    handleClick: (e: React.MouseEvent<HTMLElement>) => void
    show: boolean
}

const Select: FC<IProps> = ({handleClick, show}) => {
    const [text, setText] = useState("Mobile Application")


    const handleClickText = (e: any) => {
        setText(e.target.innerText)
    }

    return (
        <div onClick={handleClick} className={styles.search_input_select}>
            <p className={styles.custom_options_text_1}>{text}</p>
            <ArrowDropDownIcon/>
            {show ? <div className={styles.custom_select_options}>
                <ul className={styles.custom_options_item}>
                    <li onClick={handleClickText} className={styles.custom_options_text} id='3'>Mobile Application</li>
                    <li onClick={handleClickText} className={styles.custom_options_text} id='4'>Website</li>
                </ul>
            </div> : null}

        </div>
    );
};

export default Select;