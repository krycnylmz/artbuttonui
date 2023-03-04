import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  return (
    <div className={styles.buttonContainer}>
      <button {...props} className={styles[props.type]}>
        {props.text}
      </button>
    </div>
  )
}
