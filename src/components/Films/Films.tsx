import FilmCard from './FilmCard/FilmCard';
import styles from './Films.module.css'

function Films() {
    return ( 
        <div className={styles.films_wrapper}>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
        </div>
    );
}

export default Films;