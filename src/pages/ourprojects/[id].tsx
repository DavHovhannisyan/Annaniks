import React, {useEffect, useState} from 'react';
import {GetServerSideProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import Layout from "../../layout/Layout";
import {props} from "../../constants/home/constants";
import ProjectInfoWebsite from "../../components/infoOurProject/ProjectInfoWebsite";
import {getPortfolioTSingleData} from "../../helpers/Api";
import ProjectInfoMobile from "../../components/infoOurProject/ProjectInfoMobile";


export const getServerSideProps: GetServerSideProps = async ({locale, params}: any) => {
    try {
        const {id} = params
        const {data} = await getPortfolioTSingleData(id, locale)

        return {
            props: {
                ...(await serverSideTranslations(locale, ["common"])),
                data
            }
        }

    } catch (e) {
        console.warn(e)

        return {
            props: {
                ...(await serverSideTranslations(locale, ["common"])),
            }
        }

    }

}

const OurProject: NextPage = () => {
    const router = useRouter()
    const [portfolioType, SetPortfolioType] = useState<string | null>('')


    useEffect(() => {
        if (window) {
            const TypePortfolio = localStorage.getItem('portfolioType')
            SetPortfolioType(TypePortfolio)
            console.log(TypePortfolio)
        }
    }, [portfolioType])


    return (
        <Layout props={props}>
            {portfolioType === '4' ? <ProjectInfoWebsite/> : <ProjectInfoMobile/>}
        </Layout>
    );
};

export default OurProject;