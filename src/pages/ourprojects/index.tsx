import React from 'react';
import Layout from "../../layout/Layout";
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {props} from '../../constants/ourProjects/constants'
import MainProject from "../../components/ourProjects/MainProject";
import {Box} from "@mui/material";

import axios from "axios";

const Api = 'https://admin.annaniks.com'

export const getStaticProps: GetStaticProps = async ({locale}: any) => {
    const {data} = await axios.get(`${Api}/api/portfolio-type/`)

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            locale
        }
    }
}

const OurProjects: NextPage<{ locale: string }> = ({locale}) => {
    console.log(locale)

    return (
        <Layout props={props}>
            <Box sx={{minHeight: '100vh', backgroundColor: '#101639', width: '100%'}}>
                <MainProject/>
            </Box>
        </Layout>
    );
};

export default OurProjects;