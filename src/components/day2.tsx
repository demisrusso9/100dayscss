import React from 'react'
import styles from '../styles/components/day2.module.scss'

export default function Day2() {
  return (
    <div className={styles.center}>
      <div className={styles.animation}>
        <input type="checkbox" id="click" />
        <label htmlFor="click">
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </label>
      </div>
    </div>
  )
}
