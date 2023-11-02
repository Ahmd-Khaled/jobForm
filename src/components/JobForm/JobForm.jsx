import Input from "../Input/Input";
// import Select from "../Select/Select";
import Select from 'react-select';
import styles from "./styles.module.scss";
import { useState } from "react";

const availableJobs = [
  {
    id: 1,
    label: "مندوب ميداني",
    value: "مندوب ميداني",
  },
  {
    id: 2,
    label: "تسويق الكتروني",
    value: "تسويق الكتروني",
  },
  {
    id: 3,
    label: "قانون موارد بشرية",
    value: "قانون موارد بشرية",
  },
  {
    id: 4,
    label: "مشرف ميداني",
    value: "مشرف ميداني",
  },
  {
    id: 5,
    label: "برمجة تطبيقات",
    value: "برمجة تطبيقات",
  },
];

const JobForm = () => {
  const [slectedJob, setSlectedJob] = useState("");

  const slectedJobHandler = (option) => {
    setSlectedJob(option);
  }
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
                  value={slectedJob}
                  onChange={slectedJobHandler}
                  options={availableJobs}
                  className={styles.customSelect}
                  classNamePrefix={styles.innerSelect}
                  placeholder="اختر الوظيفة المطلوبة"
                />
                {/* <Select 
                  defaultOption=""
                  selectList={availableJobs}
                /> */}
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