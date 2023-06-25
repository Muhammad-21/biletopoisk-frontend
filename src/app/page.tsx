import { Films } from '@/components/Films/Films';
import { Filters } from '@/components/Filters/Filters';
import styles from './page.module.css'

export default async function Home() {

  return (
    <div className={styles.main_wrapper}>
      <Filters />
      <Films/>
    </div>
    )
}
