import React, {FC, useCallback, useEffect, useState} from 'react';
import TopBar from "./MainContent/TopBar";
import ProjectsSection from "./MainContent/ProjectsSection";
import styles from '../../styles/OurProjects.module.css'
import {useTranslation} from "next-i18next";
import {getPortfolioData} from "../../helpers/Api";


interface IData {
    id: number,
    name: string,
    name_ru: string
    name_hy: string
}

interface IItem {
    id: number
    title: string
    description: string
}

interface IProps {
    locale: string,
    data: Array<IData>
    results: Array<IItem>
}


const MainProject: FC<IProps> = ({locale, data, results}) => {
    const {t} = useTranslation('common');
    const [showButton, setShowButton] = useState<boolean>(true)
    const [mainData, setMainData] = useState([...results])
    const [inputText, SetInputText] = useState<string>('')
    const [portfolioType, SetPortfolioType] = useState<undefined | number | string>(3)

    useEffect(() => {
        if (window) {
            localStorage.setItem('portfolioType', '3')

        }
    }, [])

    const setResultsPortfolioOffset = useCallback(async () => {
        const {data} = await getPortfolioData(4, 4, portfolioType, '', locale)
        setMainData([...mainData, ...data.results])
        setShowButton(false)
    }, [mainData])

    const setResultsSearch = useCallback(async (search: string) => {
        const {data} = await getPortfolioData(4, 0, portfolioType, search, locale)
        setMainData([...data.results])
    }, [mainData])

    const setResultsPortfolioType = useCallback(async (param: number) => {
        const {data} = await getPortfolioData(4, 0, param, '', locale)
        if (data) {
            setMainData([...data.results])
        }
        SetPortfolioType(param)
        localStorage.setItem('portfolioType', param.toString())
        const xxx = localStorage.getItem('portfolioType')
        console.log(xxx)
        setShowButton(true)
    }, [mainData])

    return (
        <main className={styles.main_block}>
            <div className={styles.main_content}>
                <TopBar setResultsPortfolioType={setResultsPortfolioType} setResultsSearch={setResultsSearch}
                        results={mainData}
                        locale={locale} SetInputText={SetInputText}
                        data={data}/>
                <ProjectsSection inputText={inputText} results={mainData}/>
            </div>
            <div className={styles.load_more}>
                <div className={styles.load_more_container}>
                    {showButton ?
                        <button onClick={setResultsPortfolioOffset} className={styles.view_more_button}>
                            {t("common:ourProjectpage:loadMore")}
                        </button>
                        : null}
                </div>
            </div>
        </main>
    );
};

export default MainProject;