import React, { useState } from 'react'
import { GiSquare } from 'react-icons/gi'
import styles from '../styles/components/day7.module.scss'

export default function Day7() {

  const [menu, setMenu] = useState(false);

  return (
    <div className={styles.center}>
      <div className={`${styles.box} ${menu && styles.activeMenu}`}>
        <header>
          <input type="checkbox" id="icon" className={styles.iconClick} />
          <label
            onClick={_ => setMenu(prev => !prev)}
            htmlFor="icon"
            className={styles.icon}
          >
            <div className={styles.bar} />
            <div className={styles.bar} />
            <div className={styles.circle} />
          </label>

          <h1>Notifications</h1>

          <div className={styles.search}>
            <input
              className={styles.enableSearch}
              type="checkbox"
              id="click"
            />

            <label htmlFor="click">
              <GiSquare />
              <input
                type="search"
                className={styles.searchBar}
                placeholder="Search ..."
              />
            </label>
          </div>
        </header>

        <div className={styles.notifications}>
          <div className={styles.line} />

          <div className={styles.comment}>
            <small>9:24 AM</small>
            <p><strong>John Walker</strong> posted a photo on your wall.</p>
          </div>

          <div className={styles.comment}>
            <small>8:19 AM</small>
            <p><strong>Alice Parker</strong> commented your last post.</p>
          </div>

          <div className={styles.comment}>
            <small>Yesterday</small>
            <p><strong>Luke Wayne</strong> added you as friend.</p>
          </div>
        </div>
      </div>

      <nav className={styles.sidebar}>
        <ul>
          <li><div />Dashboard</li>
          <li><div />Profile</li>
          <li><div />Notifications</li>
          <li><div />Messages</li>
          <li><div />Settings</li>
        </ul>
      </nav>
    </div >
  )
}