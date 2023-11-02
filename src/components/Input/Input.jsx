import styles from "./styles.module.scss";

const Input = ({ width, type, placeholder, id}) => {
  return (
    <div className={styles.inputBox} style={{width: width}}>
      <input type={type} placeholder={placeholder} id={id} />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  )
}

export default Input