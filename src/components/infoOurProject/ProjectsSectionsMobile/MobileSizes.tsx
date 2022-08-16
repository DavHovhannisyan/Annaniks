import React, {FC} from 'react';
import styles from '../../../styles/OurProjectMobile.module.css'
import Image from "next/image";
import Slider from "react-slick";


const settings = {
    dots: true,
    dotsClass:styles.dots,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
};

const MobileSizes: FC = () => {
    return (
        <>
            <div className={styles.mobile_big_items_container}>
                <div className={styles.mobile_big_items}>
                    <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                           alt={'Phone_Image'}/>
                </div>
                <div className={styles.mobile_big_items}>
                    <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                           alt={'Phone_Image'}/>
                </div>
                <div className={styles.mobile_big_items}>
                    <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                           alt={'Phone_Image'}/>
                </div>
            </div>
            <div className={styles.mobile_big_items_container_carousel}>
                <Slider {...settings}>
                    <div style={{ backgroundColor:"#101639",margin:"0 auto"}}>
                        <div className={styles.mobile_big_items_carousel}>
                            <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                                   alt={'Phone_Image'}/>
                        </div>
                    </div>
                    <div style={{ backgroundColor:"#101639"}}>
                        <div className={styles.mobile_big_items_carousel}>
                            <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                                   alt={'Phone_Image'}/>
                        </div>
                    </div>
                    <div style={{ backgroundColor:"#101639"}}>
                        <div className={styles.mobile_big_items_carousel}>
                            <Image layout="fill" src='/images/ourProjectImg/phoneImg/without_color.svg'
                                   alt={'Phone_Image'}/>
                        </div>
                    </div >
                </Slider>
            </div>
        </>
    );
};

export default MobileSizes;