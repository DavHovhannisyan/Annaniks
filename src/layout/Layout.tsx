import {FC, HTMLProps, ReactNode} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";

interface IProps {
    title: string;
    meta:{
        name:string;
        content:string;
    };
    link:{
        rel:string;
        dataNhead:string;
        href:string;
    }
}

interface ILayout extends HTMLProps<HTMLDivElement> {
    children?: ReactNode;
    props: IProps;
}

const Layout: FC<ILayout> = ({props, children}) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name={props.meta.name} content={props.meta.content}/>
                <link rel={props.link.rel} data-n-head={props.link.dataNhead} href={props.link.href}/>
                <link data-n-head="ssr" rel="icon"
                      href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDM2IDM2Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojOWVkOTQ2O30uYntmaWxsOiNmZGZkZmQ7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTY0IDM2NSkiPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMTAuNDA1IiBoZWlnaHQ9IjEwLjM0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE2NCAtMzY1KSIvPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMTAuNDA1IiBoZWlnaHQ9IjEwLjM0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE2NCAtMzUzLjYyMSkiLz48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjEwLjQwNSIgaGVpZ2h0PSIxMC4zNDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNjQgLTM0Mi4yNDEpIi8+PHJlY3QgY2xhc3M9ImIiIHdpZHRoPSIxMC40MDUiIGhlaWdodD0iMTAuMzQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTc1LjY1MyAtMzY1KSIvPjxyZWN0IGNsYXNzPSJiIiB3aWR0aD0iMTAuNDA1IiBoZWlnaHQ9IjEwLjM0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE3NS42NTMgLTM1My42MjEpIi8+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxMC40MDUiIGhlaWdodD0iMTAuMzQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTc1LjY1MyAtMzQyLjI0MSkiLz48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjEwLjQwNSIgaGVpZ2h0PSIxMC4zNDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExODcuMzA2IC0zNjUpIi8+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxMC40MDUiIGhlaWdodD0iMTAuMzQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTg3LjMwNiAtMzUzLjYyMSkiLz48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjEwLjQwNSIgaGVpZ2h0PSIxMC4zNDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExODkuNTk1IC0zMzkuMzQ1KSIvPjwvZz48L3N2Zz4="/>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}

export default Layout;