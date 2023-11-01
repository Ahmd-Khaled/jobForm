import styles from "./styles.module.scss";

const JobForm = () => {
  return (
    <section className={styles.jobForm}>
      <div className={styles.jobForm__container}>
        <div className={styles.head}>
          <h1 className={styles.title}>طلب وظيفي</h1>
          <p className={styles.text}>الرجاء تعبئة النموذج أدناه للتقدم لوظيفة لدى شركتنا</p>
        </div>
        <form className={styles.form}>
          JobForm
        </form>
      </div>
    </section>
  )
}

export default JobForm