import React, {FC, useState} from 'react';
import styles from "../../../styles/OurProjects.module.css";
import Image from "next/image";
import img from "../../../../public/images/ourProjectImg/colors.png";
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

interface IProps {
    id: number
    title: string
    description: string
}

const ProjectModalInfo: FC<IProps> = ({id, title, description}) => {
    const {t} = useTranslation('common');
    const router = useRouter()
    const [height, setHeight] = useState(false)
    const [secondHeight, setSecondHeight] = useState(false)

    const handleStyle = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        if (!secondHeight) {
            setHeight(true)
        }
    }

    const handleIconClick = (e: any) => {
        setHeight(false)
        setSecondHeight(true)
    }
    const handleSecondIconClick = (e: any) => {
        setSecondHeight(false)
        setHeight(true)
    }
    const handleButtonClick = (e: any) => {
        router.push(`ourprojects/${e.target.id}`)
    }

    return (
        <>
            <div className={styles.carousel_item_heading}>
                <div style={{marginLeft: 5, width: 50}}>
                    <Image src={img}/>
                </div>
            </div>
            <div className={styles.our_projects_carousel_item_main}>
                <div onMouseLeave={() => setHeight(false)} onMouseEnter={handleStyle}
                     className={styles.card_portfolio_container}>
                    <div
                        className={height ? styles[`card_portfolio_overlay_height`] : styles[`card_portfolio_overlay`]}>
                        <div className={styles.card_portfolio_info_container}>
                            <button onClick={handleIconClick} style={{
                                position: 'absolute',
                                top: 15,
                                right: 20,
                                cursor: 'pointer',
                                transition: 'all .3s',
                                opacity: '.6',
                                border: 'none',
                                backgroundColor: 'white'
                            }}><InfoOutlinedIcon/></button>
                            <button onClick={handleButtonClick} id={id.toString()}
                                    className={styles.card_portfolio_button}>{t("common:OurProjects:buttonText")}</button>
                        </div>
                    </div>
                    <div
                        className={secondHeight ? styles.card_portfolio_overlay_info_height : styles.card_portfolio_overlay_info}>
                        <div className={styles.card_info_item}>
                            <div className={styles.card_info_title}>
                                <h3>{title}</h3>
                                <button onClick={handleSecondIconClick} className={styles.close_button}>
                                    <CloseIcon/>
                                </button>
                            </div>
                            <p className={styles.card_info_subTitle}>
                                {description}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <p style={{
                marginTop: '20px',
                textAlign: 'left',
                fontWeight: "900",
                fontSize: '22px',
                color: "#101639"
            }}>{title}</p>
        </>


    );
};

export default ProjectModalInfo;