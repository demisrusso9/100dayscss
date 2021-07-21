import React from 'react'
import Day1 from '../components/day1'
import Day2 from '../components/day2'
import Day3 from '../components/day3'
import Day4 from '../components/day4'
import Day5 from '../components/day5'
import Day6 from '../components/day6'
import Day7 from '../components/day7'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Day7 />

      <Day1 />
      <Day2 />
      <Day3 />
      <Day4 />
      <Day5 />
      <Day6 />
    </div>
  )
}
