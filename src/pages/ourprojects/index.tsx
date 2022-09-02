import React from 'react';
import {GetServerSideProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "../../layout/Layout";
import {layout} from '../../constants/ourProjects/constants'
import {getPortfolioData, getPortfolioType} from "../../helpers/Api";
import {IProps} from '../../types/ourProject/type'
import styles from "../../styles/OurProjects.module.css";
import TopBar from "../../components/ourProjects/MainContent/TopBar";
import ProjectsSection from "../../components/ourProjects/MainContent/ProjectsSection";
import {useTranslation} from "next-i18next";
import MainProjectHook from "../../hooks/ourProject/MainProjectHook";


export const getServerSideProps: GetServerSideProps = async ({locale}: any) => {
    try {
        const {data: portfolioTypesArray} = await getPortfolioType()
        const {data: portfolio} = await getPortfolioData(4, 0, 3, '', locale)
        const {results: itemsArray} = portfolio


        return {
            props: {
                ...(await serverSideTranslations(locale, ["common"])),
                locale,
                portfolioTypesArray,
                itemsArray
            }
        }
    } catch (e) {
        console.log(e)
        return {
            props: {
                ...(await serverSideTranslations(locale, ["common"])),
                locale,
            }
        }
    }
}

const OurProjects: NextPage<IProps> = (props) => {
    const {t} = useTranslation('common');
    const {locale, portfolioTypesArray, itemsArray} = props
    const {setResultsPortfolioOffset,
        setResultsSearch,
        setResultsPortfolioType,
        mainData,
        inputText,
        offset,
        showButton,
        setOffset,
    } = MainProjectHook(props)


    return (
        <Layout layout={layout}>
            <main className={styles.main_block}>
                <div className={styles.main_content}>
                    <TopBar setResultsPortfolioType={setResultsPortfolioType} setResultsSearch={setResultsSearch} mainData={mainData} locale={locale} portfolioTypesArray={portfolioTypesArray}/>
                    <ProjectsSection inputText={inputText} mainData={mainData}/>
                </div>
                <div className={styles.load_more}>
                    <div className={styles.load_more_container}>
                        {showButton ?
                            <button onClick={setResultsPortfolioOffset}
                                    className={styles.view_more_button}>
                                {t("common:ourProjectpage:loadMore")}
                            </button>
                            : null}
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default OurProjects;