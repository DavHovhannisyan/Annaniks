import React, {FC} from 'react';
import DescriptionProject from "./ProjectsSectionsMobile/DescriptionProject";
import MobileSizes from "./ProjectsSectionsMobile/MobileSizes";
import DescriptionProject2 from "./ProjectsSectionsMobile/DescriptionProject2";
import RelatedProjects from "./ProjectsSectionsMobile/RelatedProjects";
import styles from '../../styles/OurProjectMobile.module.css'

const ProjectInfoMobile:FC = () => {
    return (
        <div className={`${styles["id_container"]} ${styles["padding_our_project_container"]}`}>
            <main className={styles.main}>
                <div className={styles.m_container}>
                    <DescriptionProject/>
                    <h3 className={styles.small_title}>Lorem Ipsum Dolor</h3>
                    <p className={styles.small_sub_title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad;<br/>
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.

                    </p>
                    <MobileSizes/>
                    <DescriptionProject2/>
                    <h3 className={styles.small_title}>Related Projects</h3>
                    <p className={styles.small_sub_title}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <RelatedProjects/>
                </div>
            </main>
        </div>
    );
};

export default ProjectInfoMobile;