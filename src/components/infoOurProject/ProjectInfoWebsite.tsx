import React, {FC} from 'react';
import styles from "../../styles/OurProjectWebsite.module.css";
import Image from "next/image";
import DescriptionProject2 from "./ProjectsSectionsMobile/DescriptionProject2";
import {IPortfolioType, ISingleData} from "../../types/ourProject/type";

interface sss{
    id?: number
    title?: string
    description?: string
    subtitle_1?: string
    description_1?: string
    subtitle_2?: string
    description_2?: string
    subtitle_3?: string
    description_3?: string
    image_1_1?: string
    image_1_2?: string
    image_1_3?: string
    image_1_4?: string
    image_1_5?: string
    image_2_1?: string
    image_2_2?: string
    image_2_3?: string
    image_2_4?: string
    image_2_5?: string
    portfolio_type?: Array<IPortfolioType>
}

interface IProp {
    length: number
    data: ISingleData
}

const ProjectInfoWebsite: FC<IProp> = ({length,data}) => {


    return (
        <div className={`${styles["id_container"]} ${styles["padding_our_project_container"]}`}>
            <main className={styles.main}>
                <div className={styles.m_container}>
                    <h2 className={styles.project_title}>{data.title}</h2>
                    <p className={styles.project_subTitle}>{data.description}</p>
                    <div className={styles.web_mac_image_container}>
                        <div className={styles.mac_image}>
                            <div style={{backgroundImage:`url("${data.image_1_1}")`}} className={styles.mac_absolute_image}></div>
                            <Image priority layout="fill" src='/images/ourProjectImg/macImage/mac.png'
                                   alt={'Phone_Image'}/>
                        </div>
                    </div>
                    <div className={styles.inf_text_container}>
                        <div className={styles.inf_text_item}>
                            <h3 className={styles.small_title}>{data.subtitle_1}</h3>
                            <p className={styles.small_subTitle}>{data.description_1}</p>
                        </div>
                        <div style={{backgroundImage:`url("${data.image_1_2}")`}} className={styles.inf_text_item_image}>

                        </div>
                    </div>
                    {length === 2 ? <DescriptionProject2 subtitle_2={data.subtitle_2} description_2={data.description_2} image_2_2={data.image_2_2} image_2_3={data.image_2_3} image_2_4={data.image_2_4}/> : null}
                    <div className={`${styles.inf_text_container} ${styles.inf_text_container2}`}>
                        <div className={styles.inf_text_item}>
                            <h3 className={`${styles.small_title} ${styles.small_title2}`}>{data.subtitle_2}</h3>
                            <p className={`${styles.small_subTitle} ${styles.small_subTitle2}`}>{data.description_2}</p>
                        </div>
                        <div style={{backgroundImage:`url("${data.image_1_3}")`}} className={styles.inf_text_item_image}>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url("${data.image_1_4}")`}}  className={styles.big_image_our_project_id}></div>

                    <h3 style={{textAlign: 'center'}} className={styles.small_title}>Related Projects</h3>
                    <p style={{textAlign: 'center'}} className={styles.small_subTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <div className={styles.id_bottom_image_container}>
                        <div className={styles.id_bottom_image_container_item}></div>
                        <div className={styles.id_bottom_image_container_item}></div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProjectInfoWebsite;