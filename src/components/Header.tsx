import {FC, MouseEventHandler, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useTranslation} from 'next-i18next';
import Image from "next/image";
import Link from "next/link";
import {Box, Grid, useMediaQuery} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import flagUK from "../../public/images/flags/united-kingdom.svg";
import flagRUS from "../../public/images/flags/russia.svg";
import Home from "../styles/Home.module.css";
import {show} from "dom7";

const Header: FC = () => {
    const [arrowActive, setArrowActive] = useState<boolean>(true);
    const [showBurger, setShowBurger] = useState<boolean>(false);
    const [headerBg, setHeaderBg] = useState<boolean>(false);
    const router = useRouter();
    const [image, setImage] = useState<string>(router.locale === "en-UK" ? flagUK : flagRUS);
    const {t} = useTranslation('common');
    const matchesMobile = useMediaQuery('(max-width:700px)', {noSsr: true});

    useEffect(() => {
        const handleScroll = (event: any) => {
            if (window.scrollY > 0) {
                setHeaderBg(true)
            } else {
                setHeaderBg(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={headerBg ? `${Home.header} ${Home.headerBg}` : Home.header}>
            <Grid container alignItems={"center"} spacing={2}>
                <Grid item lg={2} md={2} sm={2} xs={2}>
                    <Link href={"/"}>
                        <a>
                            <Image
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDM2IDM2Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojOWVkOTQ2O30uYntmaWxsOiNmZGZkZmQ7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTY0IDM2NSkiPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMTAuNDA1IiBoZWlnaHQ9IjEwLjM0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE2NCAtMzY1KSIvPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMTAuNDA1IiBoZWlnaHQ9IjEwLjM0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE2NCAtMzUzLjYyMSkiLz48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjEwLjQwNSIgaGVpZ2h0PSIxMC4zNDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNjQgLTM0Mi4yNDEpIi8+PHJlY3QgY2xhc3M9ImIiIHdpZHRoPSIxMC40MDUiIGhlaWdodD0iMTAuMzQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTc1LjY1MyAtMzY1KSIvPjxyZWN0IGNsYXNzPSJiIiB3aWR0aD0iMTAuNDA1IiBoZWlnaHQ9IjEwLjM0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE3NS42NTMgLTM1My42MjEpIi8+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxMC40MDUiIGhlaWdodD0iMTAuMzQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTc1LjY1MyAtMzQyLjI0MSkiLz48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjEwLjQwNSIgaGVpZ2h0PSIxMC4zNDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExODcuMzA2IC0zNjUpIi8+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxMC40MDUiIGhlaWdodD0iMTAuMzQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTg3LjMwNiAtMzUzLjYyMSkiLz48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjEwLjQwNSIgaGVpZ2h0PSIxMC4zNDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExODkuNTk1IC0zMzkuMzQ1KSIvPjwvZz48L3N2Zz4="
                                alt="logo"
                                width={matchesMobile ? 26 : 36}
                                height={matchesMobile ? 26 : 36}
                            />
                        </a>
                    </Link>
                </Grid>
                <Grid item container alignItems={"center"} lg={10} md={10} sm={10} xs={10} justifyContent={"flex-end"}>
                    {!matchesMobile ? (<ul className={Home.menuBlock}>
                            <li>
                                <Link href={"/ourprojects"}>
                                    <a className={Home.menuItem}>
                                        {t('common:OurProjects:title')}
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/careers"}>
                                    <a className={Home.menuItem}>
                                        {t('common:careers')}
                                    </a>
                                </Link>
                            </li>
                            <li className={Home.langBlock}>
                                <Box onClick={(): void => {
                                    setArrowActive(!arrowActive)
                                }} sx={{
                                    cursor: "pointer"
                                }}>
                                    <Image
                                        className={Home.flag}
                                        src={image}
                                        width={30}
                                        height={20}
                                    />
                                    {<KeyboardArrowDownIcon sx={{
                                        marginLeft: "10px",
                                        fontSize: "22px",
                                        color: arrowActive ? "#fff" : "#b2b1b1"
                                    }}/>}
                                </Box>
                                {
                                    !arrowActive && <div className={Home.dropDawnSelect}>
                                        <div className={Home.dropDawnOptionsContainer}>
                                            <Link href={
                                                router.pathname
                                            }
                                                  locale="en-UK">
                                                <a>
                                                    <div onClick={(): void => {
                                                        setImage(flagUK)
                                                    }} className={Home.dropDawnOptions}>
                                                        <Image
                                                            src={flagUK}
                                                            width={30}
                                                            height={20}
                                                        />
                                                        <div className={Home.lang}>English</div>
                                                    </div>
                                                </a></Link>
                                            <Link href={
                                                router.pathname
                                            } locale={"ru-RU"}>
                                                <a>
                                                    <div onClick={(): void => {
                                                        setImage(flagRUS)
                                                    }} className={Home.dropDawnOptions}>
                                                        <Image
                                                            src={flagRUS}
                                                            width={30}
                                                            height={20}
                                                        />
                                                        <div className={Home.lang}>Russian</div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>}
                            </li>
                        </ul>) :
                        (<Box onClick={() => {
                            setShowBurger(!showBurger)
                        }} className={showBurger ? ` ${Home.burgerBtnAlternative} ${Home.burgerBtn} ` : Home.burgerBtn}>
                            <span className={showBurger ? Home.hideItem : ""}></span>
                            <span className={showBurger ? Home.rotateItemFirst : ""}></span>
                            <span className={showBurger ? Home.rotateItem : ""}></span>
                        </Box>)}
                </Grid>
            </Grid>
            {matchesMobile && (
                <Box className={showBurger ? `${Home.transition} ${Home.mobileMenuBlock}` : Home.mobileMenuBlock}>
                    <Box className={Home.mobileMenuItem}>
                        <Link href={"/ourprojects"}>
                            <a className={Home.menuItem}>
                                {t('common:OurProjects:title')}
                            </a>
                        </Link>
                    </Box>
                    <Box className={Home.mobileMenuItem}>
                        <Link href={"/careers"}>
                            <a className={Home.menuItem}>
                                {t('common:careers')}
                            </a>
                        </Link>
                    </Box>
                </Box>)}
        </header>
    )
}

export default Header;