import Input from "../Input/Input";
import Select from "../Select/Select";
import styles from "./styles.module.scss";

const availableJobs = [
  {
    id: 1,
    titleAr: "مندوب ميداني",
    titleEn: "",
  },
  {
    id: 2,
    titleAr: "تسويق الكتروني",
    titleEn: "",
  },
  {
    id: 3,
    titleAr: "قانون موارد بشرية",
    titleEn: "",
  },
  {
    id: 4,
    titleAr: "مشرف ميداني",
    titleEn: "",
  },
  {
    id: 5,
    titleAr: "برمجة تطبيقات",
    titleEn: "",
  },
];

const JobForm = () => {
  return (
    <section className={styles.jobForm}>
      <div className={styles.jobForm__container}>
        <div className={styles.head}>
          <h1 className={styles.title}>طلب وظيفي</h1>
          <p className={styles.text}>الرجاء تعبئة النموذج أدناه للتقدم لوظيفة لدى شركتنا</p>
        </div>
        <form className={styles.form}>
          <div className={styles.group}>
            <div className={styles.inputWrapper}>
              <h3 className={styles.inpTitle}>الوظيفة المطلوبة</h3>
              <div className={styles.inputs}>
                <Select 
                  defaultOption=""
                  selectList={availableJobs}
                />
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <h3 className={styles.inpTitle}>الاسم الكامل</h3>
              <div className={styles.inputs}>
                <Input 
                  id="fName"
                  type="text"
                  placeholder="الاسم الاول"
                />
                <Input 
                  id="mName"
                  type="text"
                  placeholder="اسم الأب"
                />
                <Input 
                  id="lName"
                  type="text"
                  placeholder="اسم العائلة"
                />
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <h3 className={styles.inpTitle}>تاريخ الميلاد</h3>
              <div className={styles.inputs}>
                <Input 
                  width="150px"
                  id="day"
                  type="text"
                  placeholder="اليوم"
                />
                <Input 
                  width="150px"
                  id="month"
                  type="text"
                  placeholder="الشهر"
                />
                <Input 
                  width="150px"
                  id="year"
                  type="text"
                  placeholder="السنة"
                />
              </div>
            </div>
          </div>
          <div className={styles.group}>
            1111
          </div>
        </form>
      </div>
    </section>
  )
}

export default JobForm