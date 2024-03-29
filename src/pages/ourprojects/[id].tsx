import React, {useEffect, useState} from 'react';
import {GetServerSideProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import Layout from "../../layout/Layout";
import {layout} from "../../constants/home/constants";
import ProjectInfoWebsite from "../../components/infoOurProject/ProjectInfoWebsite";
import {getPortfolioSingleData} from "../../helpers/Api";
import ProjectInfoMobile from "../../components/infoOurProject/ProjectInfoMobile";
import {IPropID} from "../../types/ourProject/type";


export const getServerSideProps: GetServerSideProps = async ({locale, params}: any) => {
    try {
        const {id} = params
        const {data} = await getPortfolioSingleData(id, locale)

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

const OurProject: NextPage<IPropID> = ({data}) => {
    const router = useRouter()
    const [portfolioType, SetPortfolioType] = useState<string | null>('')


    useEffect(() => {
        if (window) {
            const TypePortfolio = localStorage.getItem('portfolioType')
            SetPortfolioType(TypePortfolio)
        }
    }, [portfolioType])


    return (
        <Layout layout={layout}>
            {data && data?.portfolio_type.length > 1 ?
                <ProjectInfoWebsite data={data} length={2}/> : data?.portfolio_type[0].id === 4 ?
                    <ProjectInfoWebsite data={data} length={1}/> : <ProjectInfoMobile data={data}/>}
        </Layout>
    );
};

export default OurProject;