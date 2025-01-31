import CollapsedExcerpt from '../components/CollapsedExcerpt/CollapsedExcerpt';
import svoc from '../content/projects_svoc.json'
import myaccount from '../content/projects_myaccount.json'
import nssot from '../content/projects_nssot.json'
import styles from './background.module.css'


const Projects = () => {
    return (
        <div className={styles.standard}>
            <CollapsedExcerpt title={myaccount.title} content={myaccount.content}></CollapsedExcerpt>
            <CollapsedExcerpt title={svoc.title} content={svoc.content}></CollapsedExcerpt>
            <CollapsedExcerpt title={nssot.title} content={nssot.content}></CollapsedExcerpt>
        </div>
    )
}
export default Projects;