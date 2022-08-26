import React from 'react';
import Layout from "../../layout/Layout";
import {GetServerSideProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {props} from '../../constants/ourProjects/constants'
import MainProject from "../../components/ourProjects/MainProject";
import {getPortfolioData, getPortfolioType} from "../../helpers/Api";


interface IData {
    id: number,
    name: string,
    name_ru: string
    name_hy: string
}

interface IItem {
    id: number
    title: string
    description: string
}

interface IProps {
    locale: string,
    data: Array<IData>
    results: Array<IItem>
}

export const getServerSideProps:  GetServerSideProps = async ({locale}: any) => {
    try {
        const {data} = await getPortfolioType()
        const {data: portfolio} = await getPortfolioData(4, 0, 3, '', locale)
        const {results} = portfolio

        return {
            props: {
                ...(await serverSideTranslations(locale, ["common"])),
                locale,
                data,
                results
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

const OurProjects: NextPage<IProps> = ({locale, data, results}) => {

    return (
        <Layout props={props}>
            <MainProject results={results?results:[]} locale={locale} data={data}/>
        </Layout>
    );
};

export default OurProjects;