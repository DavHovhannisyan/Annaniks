import React, {FC} from 'react';
import DescriptionProject from "./ProjectsSectionsMobile/DescriptionProject";
import MobileSizes from "./ProjectsSectionsMobile/MobileSizes";
import DescriptionProject2 from "./ProjectsSectionsMobile/DescriptionProject2";
import RelatedProjects from "./ProjectsSectionsMobile/RelatedProjects";
import styles from '../../styles/OurProjectMobile.module.css'
import {IPortfolioType, ISingleData} from "../../types/ourProject/type";

interface sss{
    id: number
    title: string
    description: string
    subtitle_1: string
    description_1: string
    subtitle_2: string
    description_2: string
    image_1_1: string
    image_1_2: string
    image_1_3: string
    image_1_4: string
    image_1_5: string
    image_2_1: string
    image_2_2: string
    image_2_3: string
    image_2_4: string
    image_2_5: string
    portfolio_type: Array<IPortfolioType>
}

interface IProp {
    data: ISingleData
}

const ProjectInfoMobile: FC<IProp> = ({data}) => {
    return (
        <div className={`${styles["id_container"]} ${styles["padding_our_project_container"]}`}>
            <main className={styles.main}>
                <div className={styles.m_container}>
                    <DescriptionProject description={data.description} title={data.title} image_1_1={data.image_1_1}
                                        image_1_2={data.image_1_2}   image_1_3={data.image_1_3}
                    />
                    <MobileSizes subtitle_1={data.subtitle_1} description_1={data.description_1} image_1_4={data.image_1_4} image_1_5={data.image_1_5} image_2_1={data.image_2_1} />
                    <DescriptionProject2 subtitle_2={data.subtitle_2} description_2={data.description_2} image_2_2={data.image_2_2} image_2_3={data.image_2_3} image_2_4={data.image_2_4}/>
                    <RelatedProjects/>
                </div>
            </main>
        </div>
    );
};

export default ProjectInfoMobile;