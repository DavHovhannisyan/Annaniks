import React, {FC} from 'react';
import styles from '../../../styles/OurProjectMobile.module.css'
import Image from "next/image";

const DescriptionProject2: FC = () => {
    return (
        <section  className={styles.info_text_section}>
            <figure className={`${styles.info_text_figure} ${styles.info_text_figure2}`}>
                <div className={`${styles.mobile_phone_container} ${styles.mobile_phone_container2}`}>
                    <div className={`${styles.mobile_phone_end_Item} ${styles.mobile_phone_end_Item2}`}>
                        <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                               alt={'Phone_Image'}/>
                    </div>
                    <div className={`${styles.mobile_phone_center_Item} ${styles.mobile_phone_center_Item2}`}>
                        <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                               alt={'Phone_Image'}/>

                    </div>
                    <div className={`${styles.big_img}`}>
                        <div className={`${styles.big_img_div} ${styles.big_img_div2}`}>
                            <Image className={styles.avatar} priority layout="fill"
                                   src='/images/ourProjectImg/phoneImg/d59bb6a.png' alt={'Phone_Image'}/>
                        </div>
                    </div>
                </div>
                <figcaption className={styles.info_text_item_figcaption}>
                    <h2 className={`${styles.project_title} ${styles.project_title2}`}>
                        Project Name
                    </h2>
                    <p className={`${styles.project_subTitle} ${styles.project_subTitle2}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                    <p className={`${styles.project_subTitle} ${styles.project_subTitle2}`}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </figcaption>
            </figure>
        </section>
    );
};

export default DescriptionProject2;