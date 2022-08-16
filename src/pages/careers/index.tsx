import React from 'react';
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {props} from "../../constants/careers/constants";
import Layout from "../../layout/Layout";
import {Box} from "@mui/material";
import Banner from "../../components/careers/Banner";
import MainContent from "../../components/careers/MainContent";


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
            <Box sx={{minHeight: '100vh', backgroundColor: '#101639', width:'100%',pt:24}}>
                <Banner/>
                <MainContent/>
            </Box>
        </Layout>
    );
};

export default Careers;