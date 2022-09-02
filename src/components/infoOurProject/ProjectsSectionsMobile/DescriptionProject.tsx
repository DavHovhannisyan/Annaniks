import React, {FC} from 'react';
import styles from '../../../styles/OurProjectMobile.module.css'
import Image from "next/image";
import {Property} from "csstype";
import BackgroundImage = Property.BackgroundImage;

interface IProps {
    title?: string
    description?: string
    image_1_1?: string
    image_1_2?: string
    image_1_3?: string
}

const DescriptionProject: FC<IProps> = ({title, description, image_1_1, image_1_2, image_1_3}) => {
    return (
        <section className={styles.info_text_section}>
            <figure className={styles.info_text_figure}>
                <div className={styles.mobile_phone_container}>
                    <div style={{backgroundImage:`url("${image_1_1}")`}} className={styles.mobile_phone_end_Item}>
                        <Image layout="fill"
                               src={ '/images/ourProjectImg/phoneImg/without_color.svg'}
                               alt={'Phone_Image'}/>
                    </div>
                    <div style={{backgroundImage:`url("${image_1_2}")`}} className={styles.mobile_phone_center_Item}>
                        <Image layout="fill"
                               src={'/images/ourProjectImg/phoneImg/without_color.svg'}
                               alt={'Phone_Image'}/>

                    </div>
                    <div style={{backgroundImage:`url("${image_1_3}")`,backgroundRepeat:'no-repeat'}} className={styles.big_img}>
                        <div  className={styles.big_img_div}>
                            <Image className={styles.avatar} layout="fill"
                                   src={ '/images/ourProjectImg/phoneImg/d59bb6a.png'}
                                   alt={'Phone_Image'}/>
                        </div>
                    </div>
                </div>
                <figcaption className={styles.info_text_item_figcaption}>
                    <h2 className={styles.project_title}>
                        {title}
                    </h2>
                    <p className={styles.project_subTitle}>
                        {description}
                    </p>

                </figcaption>
            </figure>
        </section>
    );
};

export default DescriptionProject;