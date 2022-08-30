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

interface IPortfolioType {
    id: number,
    name: string,
    name_ru: string
    name_hy: string
}

interface IProps {
    locale: string,
    portfolioTypesArray: Array<IPortfolioType>
    mainData: Array<IItem>
    setResultsSearch: (param: string) => void
    setResultsPortfolioType: (param: number) => void
}

const TopBar: FC<IProps> = ({locale, portfolioTypesArray, mainData, setResultsSearch,setResultsPortfolioType}) => {
    const [showSelect, setShowSelect] = useState<boolean>(false)
    const {t} = useTranslation('common');
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'all'});

    const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        showSelect ? setShowSelect(false) : setShowSelect(true)
    }, [showSelect])

    const handleCloseClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        showSelect ? setShowSelect(false) : null
    }, [showSelect])

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
                <SearchInput setResultsPortfolioType={setResultsPortfolioType}
                             setResultsSearch={setResultsSearch}
                             locale={locale}
                             portfolioTypesArray={portfolioTypesArray}
                             showSelect={showSelect}
                             handleClick={handleClick}/>
            </div>
        </div>

    );
};

export default TopBar;