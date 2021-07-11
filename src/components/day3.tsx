import React from 'react'
import styles from '../styles/components/day3.module.scss'

export default function Day3() {
  return (
    <div className={styles.center}>
      <div className={styles.circle}>
        <div className={styles.sun} />

        <div className={styles.pyramid}>
          <div className={styles.front} />
          <div className={styles.side} />
          <div className={styles.shadow} />
        </div>

        <div className={styles.ground} />
      </div>
    </div>
  )
}
