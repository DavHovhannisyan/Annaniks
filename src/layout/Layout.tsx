import {FC, HTMLProps, ReactNode} from "react";
import {Footer,Header} from "../components/index";
import Head from "next/head";
import {Box, Container} from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Script from 'next/script'

interface IProps {
    title: string;
    meta: {
        name: string;
        content: string;
    };
    link: {
        rel: string;
        dataNhead: string;
        href: string;
    }
}

interface ILayout extends HTMLProps<HTMLDivElement> {
    children?: ReactNode;
    layout: IProps;
}

const Layout: FC<ILayout> = ({layout, children}) => {
    return (
        <>
            <Head>
                <title>{layout.title}</title>
                <meta name={layout.meta.name} content={layout.meta.content}/>
                <link rel={layout.link.rel} data-n-head={layout.link.dataNhead} href={layout.link.href}/>
            </Head>
            <Header />
            <Box className={"container"}>
                {children}
            </Box>
            <Footer/>
            <Script
                src="https://unpkg.com/aos@next/dist/aos.js"
                onLoad={(): void => {
                    AOS.init()
                }}
            />
        </>
    );
}

export default Layout;