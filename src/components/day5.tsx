import React from 'react'
import styles from '../styles/components/day5.module.scss'

export default function Day5() {
  return (
    <div className={styles.center}>
      <div className={styles.box}>
        <header>
          <section className={styles.top}>
            <h1>Weekly Report</h1>
            <span>Revenue</span>
          </section>

          <section className={styles.bottom}>
            <span>01. Feb - 07. Feb</span>
            <span>$ 3621.79</span>
          </section>
        </header>

        <div className={styles.legend}>
          <span>Views</span>
          <span>Purchases</span>
        </div>

        <div className={styles.chart}>
          <hr />
          <hr />
          <hr />

          <section className={styles.viewLine}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <p />
          </section>

          <section className={styles.purchaseLine}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <p />
          </section>
        </div>

        <div className={styles.week}>
          <span>MON</span>
          <span>TUE</span>
          <span>WED</span>
          <span>THU</span>
          <span>FRI</span>
          <span>SAT</span>
          <span>SUN</span>
        </div>
      </div>
    </div>
  )
}
