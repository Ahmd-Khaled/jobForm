import styles from "./styles.module.scss";

const Select = ({ selectList, defaultOption }) => {
  return (
    <div className={styles.selectBox}>
      <select>
        <option defaultValue>{defaultOption}</option>
        {
          selectList?.map((item, index) => (
            <option value={item.titleEn}>{item.titleAr}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Select;