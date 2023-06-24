import { Films } from '@/components/Films/Films';
import { Filters } from '@/components/Filters/Filters';
import styles from './page.module.css'
import { getCinemas } from "@/api/CinemasService";

export default async function Home() {

  const cinemas = await getCinemas()

  return (
    <div className={styles.main_wrapper}>
      <Filters cinemas={cinemas}/>
      <Films/>
    </div>
    )
}
