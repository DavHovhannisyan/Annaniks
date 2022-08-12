import React, {useState} from 'react';
import {GetServerSideProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import Layout from "../../layout/Layout";
import {props} from "../../constants/home/constants";
import ProjectInfoMobile from "../../components/infoOurProject/ProjectInfoMobile";
import ProjectInfoWebsite from "../../components/infoOurProject/ProjectInfoWebsite";


export const getServerSideProps: GetServerSideProps = async (context) => {
    const {locale}: any = context
    const {id}: any = context.params
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
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