import type {GetStaticProps, NextPage} from 'next';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import Layout from "../layout/Layout";
import {props} from "../constants/home/constants";
import {Banner,TrustedSection,TowsSection} from "../components/index";


export const getStaticProps: GetStaticProps = async ({locale}: any) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"]))
        }
    }
}

const Home: NextPage = ({locale}: any) => {
    const {t} = useTranslation();
    return (
        <Layout props={props}>
            <Banner/>
            <TrustedSection/>
            <TowsSection />
        </Layout>
    )
}

export default Home;
