import React, {FC} from 'react';
import styles from "../../styles/OurProjectWebsite.module.css";
import Image from "next/image";

const ProjectInfoWebsite: FC = () => {
    return (
        <div className={`${styles["id_container"]} ${styles["padding_our_project_container"]}`}>
            <main className={styles.main}>
                <div className={styles.m_container}>
                    <h2 className={styles.project_title}>Project Name</h2>
                    <p className={styles.project_subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    <div className={styles.web_mac_image_container}>

                        <div className={styles.mac_image}>
                            <div className={styles.mac_absolute_image}></div>
                            <Image priority  layout="fill" src='/images/ourProjectImg/macImage/mac.png'
                                   alt={'Phone_Image'}/>
                        </div>
                    </div>
                    <div className={styles.inf_text_container}>
                        <div className={styles.inf_text_item}>
                            <h3 className={styles.small_title}>Project Name</h3>
                            <p className={styles.small_subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.</p>
                            <p className={styles.small_subTitle}>Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum.</p>
                        </div>
                        <div className={styles.inf_text_item_image}>

                        </div>
                    </div>

                    <div className={`${styles.inf_text_container} ${styles.inf_text_container2}`}>
                        <div className={styles.inf_text_item}>
                            <h3 className={`${styles.small_title} ${styles.small_title2}`}>Project Name</h3>
                            <p className={`${styles.small_subTitle} ${styles.small_subTitle2}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.</p>
                            <p className={`${styles.small_subTitle} ${styles.small_subTitle2}`}>Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum.</p>
                        </div>
                        <div className={styles.inf_text_item_image}>
                        </div>
                    </div>
                    <div className={styles.big_image_our_project_id}></div>

                    <h3 style={{textAlign:'center'}} className={styles.small_title}>Related Projects</h3>
                    <p style={{textAlign:'center'}} className={styles.small_subTitle}>
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