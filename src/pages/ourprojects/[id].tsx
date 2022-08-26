import React, {useState} from 'react';
import {GetServerSideProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import Layout from "../../layout/Layout";
import {props} from "../../constants/home/constants";
import ProjectInfoWebsite from "../../components/infoOurProject/ProjectInfoWebsite";
import {getPortfolioTSingleData} from "../../helpers/Api";


export const getServerSideProps: GetServerSideProps = async ({locale, params}: any) => {
    try {
        const {id} = params
        const {data} = await getPortfolioTSingleData(id,locale)
        console.log(data)

        return {
            props: {
                ...(await serverSideTranslations(locale, ["common"])),
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


    return (
        <Layout props={props}>
            {/*<ProjectInfoMobile/>*/}
            <ProjectInfoWebsite/>
        </Layout>
    );
};

export default OurProject;