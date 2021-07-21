import React from 'react'
import Image from 'next/image'
import styles from '../styles/components/day6.module.scss'

export default function Day6() {
  return (
    <div className={styles.center}>
      <div className={styles.box}>
        <section>
          <figure>
            <div className={styles.image}>
              <Image
                src="/jessica-potter.jpg"
                height={75}
                width={75}
                objectFit='cover'
                alt={'Profile Image'}
              />
              <div className={styles.circle} />
              <div className={styles.circle} />
            </div>

            <figcaption>Jessica Potter</figcaption>
            <small>Visual Artist</small>
          </figure>


          <button>Follow</button>
          <button>Message</button>
        </section>

        <aside>
          <div className={styles.posts}>
            <span>523</span>
            <span>Posts</span>
          </div>

          <div className={styles.likes}>
            <span>1387</span>
            <span>Likes</span>
          </div>

          <div className={styles.followers}>
            <span>146</span>
            <span>Followers</span>
          </div>
        </aside>
      </div>
    </div>
  )
}
