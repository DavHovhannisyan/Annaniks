import React, {FC} from 'react';
import styles from '../../../../styles/OurProjectMobile.module.css'
import Image from "next/image";

const DescriptionProject: FC = () => {
    return (
        <section  className={styles.info_text_section}>
            <figure className={styles.info_text_figure}>
                <div className={styles.mobile_phone_container}>
                    <div className={styles.mobile_phone_end_Item}>
                        <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                               alt={'Phone_Image'}/>
                    </div>
                    <div className={styles.mobile_phone_center_Item}>
                        <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                               alt={'Phone_Image'}/>

                    </div>
                    <div className={styles.big_img}>
                        <div className={styles.big_img_div}>
                            <Image className={styles.avatar}  layout="fill"
                                   src='/images/ourProjectImg/phoneImg/d59bb6a.png' alt={'Phone_Image'}/>
                        </div>
                    </div>
                </div>
                <figcaption className={styles.info_text_item_figcaption}>
                    <h2 className={styles.project_title}>
                        Project Name
                    </h2>
                    <p className={styles.project_subTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                    <p className={styles.project_subTitle}>
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

export default DescriptionProject;