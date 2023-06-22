import FAQ from "@/components/FAQ/FAQ";
import styles from './page.module.css'

function FAQPage() {
    return (  
        <div className={styles.faq_wrapper}>
            <FAQ/>
        </div>
    );
}

export default FAQPage;