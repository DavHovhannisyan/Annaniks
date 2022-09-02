import React, {FC} from 'react';
import styles from '../../../styles/OurProjectMobile.module.css'
import Image from "next/image";


interface IProps {
    subtitle_2?: string
    description_2?: string
    image_2_2?: string
    image_2_3?: string
    image_2_4?: string
}

const DescriptionProject2: FC<IProps> = ({subtitle_2,description_2,image_2_2,image_2_3,image_2_4}) => {
    return (
        <section className={styles.info_text_section}>
            <figure className={`${styles.info_text_figure} ${styles.info_text_figure2}`}>
                <div className={`${styles.mobile_phone_container} ${styles.mobile_phone_container2}`}>
                    <div style={{backgroundImage:`url("${image_2_2}")`}} className={`${styles.mobile_phone_end_Item} ${styles.mobile_phone_end_Item2}`}>
                        <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                               alt={'Phone_Image'}/>
                    </div>
                    <div style={{backgroundImage:`url("${image_2_3}")`}} className={`${styles.mobile_phone_center_Item} ${styles.mobile_phone_center_Item2}`}>
                        <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                               alt={'Phone_Image'}/>

                    </div>
                    <div style={image_2_4?{backgroundImage:`url("${image_2_4}")`}:{backgroundColor:"red"}} className={`${styles.big_img}`}>
                        <div  className={`${styles.big_img_div} ${styles.big_img_div2}`}>
                            <Image className={styles.avatar} layout="fill"
                                   src='/images/ourProjectImg/phoneImg/d59bb6a.png' alt={'Phone_Image'}/>
                        </div>
                    </div>
                </div>
                <figcaption className={styles.info_text_item_figcaption}>
                    <h2 className={`${styles.project_title} ${styles.project_title2}`}>
                        {subtitle_2}
                    </h2>
                    <p className={`${styles.project_subTitle} ${styles.project_subTitle2}`}>
                        {description_2}
                    </p>
                </figcaption>
            </figure>
        </section>
    );
};

export default DescriptionProject2;