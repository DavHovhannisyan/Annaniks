import type { NextPage} from 'next';
import {GetServerSideProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "../layout/Layout";
import {layout} from "../constants/home/constants";
import {Banner, TrustedSection, TowsSection, OurProject, MeetOurTeam, Contact,ContactUs} from "../components/index";
import { getOurTeamData, getPortfolioData} from "../helpers/Api";
import {IOurTeam, IProps} from "../types/home/type";

interface IOurTeamCarousel extends IProps{
    ourTeamData: Array<IOurTeam>;
}

export const getServerSideProps: GetServerSideProps = async ({locale}: any) => {
    try {
        const {data: ourTeamData} = await getOurTeamData()
        const {data: portfolio} = await getPortfolioData(10, 0, 3, '', locale)
        const {results: portfolioData} = portfolio


        return {
            props: {
                ...(await serverSideTranslations(locale, ["common"])),
                locale,
                ourTeamData,
                portfolioData
            }
        }
    } catch (e) {
        console.log(e)
        return {
            props: {
                ...(await serverSideTranslations(locale, ["common"])),
                locale,
            }
        }
    }
}

const Home: NextPage<IOurTeamCarousel> = (props) => {
    const {locale, portfolioData,ourTeamData  } = props;
    return (
        <Layout layout={layout}>
            <Banner/>
            <TrustedSection/>
            <TowsSection />
            <OurProject portfolioData={portfolioData} />
            <MeetOurTeam ourTeamData={ourTeamData} locale={locale}/>
            <Contact />
            <ContactUs />
        </Layout>
    )
}

export default Home;
