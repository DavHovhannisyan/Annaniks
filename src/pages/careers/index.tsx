import React from 'react';
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {layout} from "../../constants/careers/constants";
import Layout from "../../layout/Layout";
import {Box} from "@mui/material";
import Banner from "../../components/careers/Banner";
import MainContent from "../../components/careers/MainContent";
import {getPosition} from "../../helpers/Api";

interface IData {
    id: string
    position_type: string
    position_type_background: string
    position_type_color: string
    title: string
    description: string
    location: string
    work_time: string
    language: string
    slug: string
}

interface IProp {
    locale: any
    data: Array<IData>
}


export const getStaticProps: GetStaticProps = async ({locale}: any) => {
    const {data} = await getPosition(locale)
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            data
        }
    }
}

const Careers: NextPage<IProp> = ({locale, data}) => {
    return (
        <Layout layout={layout}>
            <Box sx={{minHeight: '100vh', backgroundColor: '#101639', width: '100%', pt: 24}}>
                <Banner/>
                <MainContent data={data}/>
            </Box>
        </Layout>
    );
};

export default Careers;