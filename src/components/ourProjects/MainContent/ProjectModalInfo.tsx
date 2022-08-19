import React, {FC, MouseEventHandler, useState} from 'react';
import styles from "../../../styles/OurProjects.module.css";
import Image from "next/image";
import img from "../../../../public/images/ourProjectImg/colors.png";
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const ProjectModalInfo: FC = () => {
    const [height, setHeight] = useState(false)
    const [secondHeight, setSecondHeight] = useState(false)

    const handleStyle = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        if (!secondHeight){
            setHeight(true)
        }
    }

    const handleIconClick = (e:any) => {
        setHeight(false)
        setSecondHeight(true)
    }
    const handleSecondIconClick = (e:any) => {
        setSecondHeight(false)
        setHeight(true)
    }

    return (
        <div className={styles.our_projects_carousel_item}>
            <div className={styles.carousel_item_heading}>
                <div style={{marginLeft: 5, width: 50}}>
                    <Image src={img}/>
                </div>
            </div>
            <div className={styles.our_projects_carousel_item_main}>
                <div onMouseLeave={()=>setHeight(false)} onMouseEnter={handleStyle} className={styles.card_portfolio_container}>
                    <div className={height ? styles[`card_portfolio_overlay_height`] : styles[`card_portfolio_overlay`]}>
                        <div className={styles.card_portfolio_info_container}>
                            <InfoOutlinedIcon onClick={handleIconClick} style={{
                                position: 'absolute',
                                top: 15,
                                right: 20,
                                cursor: 'pointer',
                                transition: 'all .3s',
                                opacity: '.6',

                            }}/>
                            <button className={styles.card_portfolio_button}>VIEW MORE</button>
                        </div>
                    </div>
                    <div className={secondHeight?styles.card_portfolio_overlay_info_height:styles.card_portfolio_overlay_info}>
                        <div className={styles.card_info_item}>
                            <div className={styles.card_info_title}>
                                <h3>Crumbiz for ProConnectors</h3>
                                <div>
                                    <button className={styles.close_button}>
                                        <CloseIcon onClick={handleSecondIconClick}/>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.card_info_subTitle}>
                                Professional connectors are wasting time, micromanaging their networks with
                                tools, which d..
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProjectModalInfo;