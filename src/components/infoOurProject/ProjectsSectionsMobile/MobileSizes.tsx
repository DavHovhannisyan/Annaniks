import React, {FC} from 'react';
import styles from '../../../styles/OurProjectMobile.module.css'
import Image from "next/image";

const MobileSizes:FC = () => {
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

            </div>
        </>
    );
};

export default MobileSizes;