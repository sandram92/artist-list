import styles from '../../styles/Artists.module.css'
import Link from 'next/link'
import Head from 'next/head'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { artists: data }
    }
}

const Artists = ({ artists }) => {
    return ( 
        <>
         <Head>
      <title>Artists List</title>
      <meta name="keywords" content="artists"/>
        </Head>
    <div>
        <h1>All Artists</h1>
       {artists.map(artist => (
           <Link href={`/artists/${artist.id}`} key={artist.id}>
             <a  className={styles.single}>
                 <h3>{artist?.name}</h3>
            </a>  
           </Link>
       ))}
    </div> 
    </>
    );
}
 
export default Artists;