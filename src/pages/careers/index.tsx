import React from 'react';
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {props} from "../../constants/careers/constants";
import Layout from "../../layout/Layout";


export const getStaticProps: GetStaticProps = async ({locale}: any) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"]))
        }
    }
}

const Careers = () => {
    return (
        <Layout props={props}>

        </Layout>
    );
};

export default Careers;