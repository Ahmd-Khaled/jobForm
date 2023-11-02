import Input from "../Input/Input";
// import Select from "../Select/Select";
import Select from 'react-select';
import styles from "./styles.module.scss";
import { useState } from "react";
import { format } from 'date-fns';
import { ClassNames, DayPicker } from 'react-day-picker';
// import styles from 'react-day-picker/dist/style.module.css';


const jobsList = [
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

const daysList = Array.from(Array(31), (_, index) => ({
  label: index+1,
  value: index+1,
}));

const monthList = Array.from(Array(12), (_, index) => ({
  label: index+1,
  value: index+1,
}));

const yearsList = Array.from(Array(74), (_, index) => ({
  label: index+1950,
  value: index+1950,
}));

const JobForm = () => {
  const [slectedJob, setSlectedJob] = useState("");
  // const [selected, setSelected] = useState("");

  // let footer = <p>Please pick a day.</p>;
  // if (selected) {
  //   footer = <p>You picked {format(selected, 'PP')}.</p>;
  // }

  // const classNames = {
  //   ...styles,
  //   head: 'custom-head'
  // };
  const [slectedDay, setSlectedDay] = useState("");
  const [slectedMonth, setSlectedMonth] = useState("");
  const [slectedYear, setSlectedYear] = useState("");


  console.log("slectedJob: ", slectedJob?.value);

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
                  onChange={setSlectedJob}
                  options={jobsList}
                  className={styles.customSelect}
                  classNamePrefix={styles.innerSelect}
                  placeholder="اختر الوظيفة المطلوبة"
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
          </div>
          <div className={styles.group}>
            <div className={styles.inputWrapper}>
              <h3 className={styles.inpTitle}>تاريخ الميلاد</h3>
              <div className={styles.inputs}>
                {/* <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  footer={footer}
                  classNames={classNames}
                /> */}
                <Select
                  value={slectedDay}
                  onChange={setSlectedDay}
                  options={daysList}
                  className={styles.customSelect}
                  classNamePrefix={styles.innerSelect}
                  placeholder="اليوم"
                />
                <Select
                  value={slectedMonth}
                  onChange={setSlectedMonth}
                  options={monthList}
                  className={styles.customSelect}
                  classNamePrefix={styles.innerSelect}
                  placeholder="الشهر"
                />
                <Select
                  value={slectedYear}
                  onChange={setSlectedYear}
                  options={yearsList}
                  className={styles.customSelect}
                  classNamePrefix={styles.innerSelect}
                  placeholder="السنة"
                />
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <h3 className={styles.inpTitle}>بيانات محل الميلاد</h3>
              <div className={styles.inputs}>
                <Input 
                  id="placeOfBirth"
                  type="text"
                  placeholder="مكان الميلاد"
                />
                <Input 
                  id="nationality"
                  type="text"
                  placeholder="الجنسية"
                />
                <Input 
                  id="religion"
                  type="text"
                  placeholder="الديانة"
                />
              </div>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.inputWrapper}>
              <h3 className={styles.inpTitle}>بيانات بطاقة الأحوال المدنية</h3>
              <div className={styles.inputs}>
                <Input 
                  id="placeOfBirth"
                  type="text"
                  placeholder="رقم البطاقة / الاقامة"
                />
                <Input 
                  id="nationality"
                  type="text"
                  placeholder="مكان الاصدار"
                />
                <Input 
                  id="religion"
                  type="text"
                  placeholder="تاريخ الاصدار"
                />
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <h3 className={styles.inpTitle}>بيانات جواز السفر</h3>
              <div className={styles.inputs}>
                <Input 
                  id="placeOfBirth"
                  type="text"
                  placeholder="رقم الجواز"
                />
                <Input 
                  id="nationality"
                  type="text"
                  placeholder="مكان الاصدار"
                />
                <Input 
                  id="religion"
                  type="text"
                  placeholder="تاريخ الاصدار"
                />
              </div>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.inputWrapper}>
              <h3 className={styles.inpTitle}>بيانات التواصل</h3>
              <div className={styles.inputs}>
                <Input 
                  id="placeOfBirth"
                  type="text"
                  placeholder="هاتف المنزل"
                />
                <Input 
                  id="nationality"
                  type="text"
                  placeholder="هاتف العمل"
                />
                <Input 
                  id="religion"
                  type="text"
                  placeholder="الجوال"
                />
                <Input 
                  id="religion"
                  type="email"
                  placeholder="البريد الالكتروني"
                />
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <h3 className={styles.inpTitle}>بيانات العنوان</h3>
              <div className={styles.inputs}>
                <Input 
                  id="placeOfBirth"
                  type="text"
                  placeholder="الدولة"
                />
                <Input 
                  id="nationality"
                  type="text"
                  placeholder="المدينة"
                />
                <Input 
                  id="religion"
                  type="text"
                  placeholder="العنوان الحالي"
                />
              </div>
              <div>
                <input type="checkbox" id="notInKSA" />
                <label htmlFor="notInKSA">غير سعودي - هل أنت مستعد لنقل الكفالة</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default JobForm