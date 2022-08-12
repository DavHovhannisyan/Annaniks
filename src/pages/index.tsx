import type {GetStaticProps, NextPage} from 'next';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "../layout/Layout";
import {props} from "../constants/home/constants";
import {Banner, TrustedSection, TowsSection, OurProject, MeetOurTeam, Contact,ContactUs} from "../components/index";


export const getStaticProps: GetStaticProps = async ({locale}: any) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"]))
        }
    }
}

const Home: NextPage = () => {
    return (
        <Layout props={props}>
            <Banner/>
            <TrustedSection/>
            <TowsSection />
            <OurProject />
            <MeetOurTeam />
            <Contact />
            <ContactUs />
        </Layout>
    )
}

export default Home;
