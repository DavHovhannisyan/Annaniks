import React, {FC} from 'react';
import styles from '../../../styles/OurProjects.module.css'
import ProjectModalInfo from "./ProjectModalInfo";


const ProjectsSection: FC = () => {
    return (
        <div className={styles.our_projects_section}>
            <div className={styles.background_img}/>
            <div className={styles.our_projects_global_container}>
                <div className={styles.our_projects_carousel}>
                    <ProjectModalInfo/>
                    <ProjectModalInfo/>
                    <ProjectModalInfo/>
                    <ProjectModalInfo/>
                    <ProjectModalInfo/>
                </div>

            </div>
        </div>
    );
};

export default ProjectsSection;