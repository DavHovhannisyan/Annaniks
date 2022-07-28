import {FC, useState} from "react";
import {Box, Grid} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import {useTranslation} from 'next-i18next';
import Home from "../styles/Home.module.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import flagUK from "../../public/images/flags/united-kingdom.svg";
import flagRUS from "../../public/images/flags/russia (1).svg";
import {useRouter} from "next/router";

const Header: FC = () => {
    const [arrowActive, setArrowActive] = useState<boolean>(true);
    const router = useRouter()
    const [image, setImage] = useState<string>(router.locale === "en-UK" ? flagUK : flagRUS);
    const {t} = useTranslation('common');

    return (
        <header className={Home.header}>
            <Grid container alignItems={"center"} spacing={2}>
                <Grid item lg={2}>
                    <Link href={"/"}>
                        <a>
                            <Image
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDM2IDM2Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojOWVkOTQ2O30uYntmaWxsOiNmZGZkZmQ7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTY0IDM2NSkiPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMTAuNDA1IiBoZWlnaHQ9IjEwLjM0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE2NCAtMzY1KSIvPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMTAuNDA1IiBoZWlnaHQ9IjEwLjM0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE2NCAtMzUzLjYyMSkiLz48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjEwLjQwNSIgaGVpZ2h0PSIxMC4zNDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNjQgLTM0Mi4yNDEpIi8+PHJlY3QgY2xhc3M9ImIiIHdpZHRoPSIxMC40MDUiIGhlaWdodD0iMTAuMzQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTc1LjY1MyAtMzY1KSIvPjxyZWN0IGNsYXNzPSJiIiB3aWR0aD0iMTAuNDA1IiBoZWlnaHQ9IjEwLjM0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE3NS42NTMgLTM1My42MjEpIi8+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxMC40MDUiIGhlaWdodD0iMTAuMzQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTc1LjY1MyAtMzQyLjI0MSkiLz48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjEwLjQwNSIgaGVpZ2h0PSIxMC4zNDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExODcuMzA2IC0zNjUpIi8+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxMC40MDUiIGhlaWdodD0iMTAuMzQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTg3LjMwNiAtMzUzLjYyMSkiLz48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjEwLjQwNSIgaGVpZ2h0PSIxMC4zNDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExODkuNTk1IC0zMzkuMzQ1KSIvPjwvZz48L3N2Zz4="
                                alt="logo"
                                width={36}
                                height={36}
                            />
                        </a>
                    </Link>
                </Grid>
                <Grid item container lg={10} justifyContent={"flex-end"}>
                    <ul className={Home.menuBlock}>
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
                                        <Link href={"/"}
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
                                        <Link href={"/"} locale={"ru-RU"}>
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
                    </ul>
                </Grid>
            </Grid>
        </header>
    )
}

export default Header;