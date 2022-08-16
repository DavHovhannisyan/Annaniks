import React, {FC, useState} from 'react';
import styles from '../../../../styles/OurProjects.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Select: FC = () => {
    const [show, setShow] = useState<boolean>(false)
    const [text,setText] = useState("Mobile Application")

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        show ? setShow(false) : setShow(true)
    }
    const handleClickText = (e: any) => {
        setText(e.target.innerText)
    }

    return (
        <div onClick={handleClick} className={styles.search_input_select}>
            <p className={styles.custom_options_text_1}>{text}</p>
            <ArrowDropDownIcon/>
            {show ? <div data-aos="flip-down"
                         data-aos-easing="linear"
                         data-aos-duration="500" className={styles.custom_select_options}>
                <ul className={styles.custom_options_item}>
                    <li onClick={handleClickText} className={styles.custom_options_text} id='3'>Mobile Application</li>
                    <li onClick={handleClickText} className={styles.custom_options_text} id='4'>Website</li>
                </ul>
            </div> : null}

        </div>
    );
};

export default Select;