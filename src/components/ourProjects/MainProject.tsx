import React, {FC} from 'react';
import TopBar from "./MainContent/TopBar";
import ProjectsSection from "./MainContent/ProjectsSection";
import styles from '../../styles/OurProjects.module.css'
import {useTranslation} from "next-i18next";


const MainProject: FC = () => {
    const {t} = useTranslation('common');

    return (
        <main className={styles.main_block}>
            <div className={styles.main_content}>
                <TopBar/>
                <ProjectsSection/>
            </div>
            <div className={styles.load_more}>
                <div className={styles.load_more_container}>
                    <button className={styles.view_more_button}>
                        {t("common:ourProjectpage:loadMore")}
                    </button>
                </div>
            </div>
        </main>
    );
};

export default MainProject;