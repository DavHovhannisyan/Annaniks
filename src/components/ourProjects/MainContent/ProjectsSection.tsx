import React, {FC} from 'react';
import styles from '../../../styles/OurProjects.module.css'
import ProjectModalInfo from "./ProjectModalInfo";

interface IItem {
    id: number
    title: string
    description: string
}

interface IProps {
    results: Array<IItem>
    inputText: string
}

const ProjectsSection: FC<IProps> = ({results, inputText}) => {
    return (
        <div className={styles.our_projects_section}>
            <div className={styles.background_img}/>
            <div className={styles.our_projects_global_container}>
                <div className={styles.our_projects_carousel}>
                    {results ?
                        results.map((singleItem) => (
                            <div key={singleItem.id} className={styles.our_projects_carousel_item}>
                                <ProjectModalInfo description={singleItem.description}
                                                  id={singleItem.id} title={singleItem.title}/>
                            </div>
                        ))
                        : null}
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;