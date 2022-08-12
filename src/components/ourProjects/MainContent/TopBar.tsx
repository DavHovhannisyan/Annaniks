import React, {FC} from 'react';
import styles from '../../../styles/OurProjects.module.css'
import {useTranslation} from "next-i18next";
import {useForm} from 'react-hook-form';
import SearchInput from "./searchInput/SearchInput";

const TopBar: FC = () => {
    const {t} = useTranslation('common');
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'all'});
    return (
            <div className={styles.topBar}>
                <div data-aos="fade-up"
                     data-aos-easing="linear"
                     data-aos-duration="4000" className={styles.our_project_one_block}>
                    <h1 className={styles.heading}>Lorem ipsum dolor sit amet,<br/>
                        consectetur adipiscing elit</h1>
                    <p className={styles.sub_heading}>
                        Our Experience in Creating Unique and Various Types of Highly<br/> Developed Projects,<br/>
                        Where You Can See Some of Their Best
                    </p>
                </div>
                <div className={styles.our_project_search_container}>
                    <SearchInput/>
                </div>
            </div>

    );
};

export default TopBar;