import Films from '../Films/Films';
import Filters from '../Filters/Filters';
import styles from './Main.module.css'

function Main() {
    return ( 
        <div className={styles.main_wrapper}>
            <Filters/>
            <Films/>
        </div>
    );
}
    
export default Main;