import React, {Dispatch, FC, SetStateAction, useCallback, useState} from 'react';
import styles from '../../../styles/OurProjects.module.css'
import {useTranslation} from "next-i18next";
import {useForm} from 'react-hook-form';
import SearchInput from "./searchInput/SearchInput";
import parse from "html-react-parser";

interface IItem {
    id: number
    title: string
    description: string
}

interface IData {
    id: number,
    name: string,
    name_ru: string
    name_hy: string
}

interface IProps {
    locale: string,
    data: Array<IData>
    results: Array<IItem>
    SetInputText: Dispatch<SetStateAction<string>>
    setResultsSearch: (param: string) => void
    setResultsPortfolioType: (param: number) => void
}

const TopBar: FC<IProps> = ({locale, data, SetInputText, results, setResultsSearch,setResultsPortfolioType}) => {
    const [show, setShow] = useState<boolean>(false)
    const {t} = useTranslation('common');
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'all'});

    const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        show ? setShow(false) : setShow(true)
    }, [show])
    const handleCloseClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        show ? setShow(false) : null
    }, [show])

    return (
        <div onClick={handleCloseClick} className={styles.topBar}>
            <div data-aos="fade-up"
                 data-aos-easing="linear"
                 data-aos-duration="4000" className={styles.our_project_one_block}>
                <h1 className={styles.heading}>{parse(t("common:ourProjectpage:title"))}</h1>
                <p className={styles.sub_heading}>
                    {parse(t("common:ourProjectpage:subTitle"))}
                </p>
            </div>
            <div className={styles.our_project_search_container}>
                <SearchInput setResultsPortfolioType={setResultsPortfolioType} setResultsSearch={setResultsSearch} results={results} SetInputText={SetInputText} locale={locale}
                             data={data} show={show}
                             handleClick={handleClick}/>
            </div>
        </div>

    );
};

export default TopBar;