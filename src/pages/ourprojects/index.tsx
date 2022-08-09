import React from 'react';
import Layout from "../../layout/Layout";
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {props} from '../../constants/ourProjects/constants'
import MainProject from "../../components/ourProjects/MainProject";

export const getStaticProps: GetStaticProps = async ({locale}: any) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"]))
        }
    }
}

const OurProjects:NextPage = () => {

    return (
        <Layout props={props}>
            <MainProject/>
        </Layout>
    );
};

export default OurProjects;