import React, {FC, useState} from 'react';
import styles from '../../../../styles/OurProjects.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


interface IData {
    id: number,
    name: string,
    name_ru: string
    name_hy: string
}

interface IProps {
    handleClick: (e: React.MouseEvent<HTMLElement>) => void
    showSelect: boolean
    locale: string,
    portfolioTypesArray: Array<IData>
    setResultsPortfolioType: (param: number) => void
}

const Select: FC<IProps> = ({handleClick, showSelect, portfolioTypesArray, locale, setResultsPortfolioType}) => {
    const [text, setText] = useState(portfolioTypesArray ? locale === 'en' ? portfolioTypesArray[0].name : portfolioTypesArray[0].name_ru : '')

    const handleClickText = async (e: any) => {
        setText(e.target.innerText)
        await setResultsPortfolioType(e.target.id)
    }

    return (
        <div onClick={handleClick} className={styles.search_input_select}>
            <p className={styles.custom_options_text_1}>{text}</p>
            <ArrowDropDownIcon/>
            {showSelect ? <div className={styles.custom_select_options}>
                <ul className={styles.custom_options_item}>
                    {portfolioTypesArray?.map((single) => (
                        <li key={single.id} onClick={handleClickText} className={styles.custom_options_text}
                            id={single.id.toString()}>
                            {locale === 'en' ? single.name : single.name_ru}
                        </li>
                    ))}
                </ul>
            </div> : null}

        </div>
    );
};

export default Select;