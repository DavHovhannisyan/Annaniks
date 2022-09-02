import React, {FC} from 'react';
import styles from '../../../styles/OurProjectMobile.module.css'
import Image from "next/image";
import Slider from "react-slick";


const settings = {
    dots: true,
    dotsClass: styles.dots,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
};

interface IProps {
    subtitle_1?: string,
    description_1?: string
    image_1_4?: string
    image_1_5?: string
    image_2_1?: string
}

const MobileSizes: FC<IProps> = ({subtitle_1, description_1, image_1_4, image_1_5, image_2_1}) => {
    return (
        <>
            <h3 className={styles.small_title}>{subtitle_1}</h3>
            <p className={styles.small_sub_title}>
                {description_1}
            </p>
            <div className={styles.mobile_big_items_container}>
                <div style={{backgroundImage:`url("${image_1_4}")`}} className={styles.mobile_big_items}>
                    <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                           alt={'Phone_Image'}/>
                </div>
                <div style={{backgroundImage:`url("${image_1_5}")`}} className={styles.mobile_big_items}>
                    <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                           alt={'Phone_Image'}/>
                </div>
                <div style={{backgroundImage:`url("${image_2_1}")`}} className={styles.mobile_big_items}>
                    <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                           alt={'Phone_Image'}/>
                </div>
            </div>
            <div className={styles.mobile_big_items_container_carousel}>
                <Slider {...settings}>
                    <div style={{backgroundColor: "#101639", margin: "0 auto"}}>
                        <div style={{backgroundImage:`url("${image_1_4}")`}} className={styles.mobile_big_items_carousel}>
                            <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                                   alt={'Phone_Image'}/>
                        </div>
                    </div>
                    <div style={{backgroundColor: "#101639"}}>
                        <div style={{backgroundImage:`url("${image_1_5}")`}} className={styles.mobile_big_items_carousel}>
                            <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                                   alt={'Phone_Image'}/>
                        </div>
                    </div>
                    <div style={{backgroundColor: "#101639"}}>
                        <div style={{backgroundImage:`url("${image_2_1}")`}} className={styles.mobile_big_items_carousel}>
                            <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                                   alt={'Phone_Image'}/>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default MobileSizes;