import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Artists List | Home</title>
      <meta name="keywords" content="artists"/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1> 
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint eum repudiandae excepturi dolorum incidunt debitis minus veritatis tenetur praesentium eveniet consectetur atque ab, neque repellendus cumque eligendi? Laudantium, maiores assumenda.</p>
      <p className={styles.text} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, earum, perspiciatis ad ipsum placeat, facilis molestias eius dolore cumque aperiam quasi ea nisi sequi ut. Facere reprehenderit voluptate possimus velit.</p>
      <Link href='/artists'>
        <a className={styles.btn}>See all Artists</a>
      </Link>
    </div>
    </>
  )
}
