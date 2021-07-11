import React from 'react'
import styles from '../styles/components/day1.module.scss'

export default function Day1() {
  return (
    <div className={styles.center}>
      <div className={styles.hundred}>
        <div className={styles.one}></div>
        <div className={styles.oneTail}></div>
        <div className={styles.zero}></div>
        <div className={styles.zero}></div>
      </div>

      <span>DAYS</span>
      <p>CSS Challenge</p>
    </div>
  )
}
