import React, {FC} from 'react';
import styles from '../../../styles/OurProjectMobile.module.css'

const RelatedProjects: FC = () => {

    return (
        <>
            <h3 className={styles.small_title}>Related Projects</h3>
            <p className={styles.small_sub_title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </p>
            <div className={styles.id_bottom_image_container}>
                <div className={styles.id_bottom_image_container_item}></div>
                <div className={styles.id_bottom_image_container_item}></div>
            </div>
        </>
    );
};

export default RelatedProjects;