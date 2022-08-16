import Head from "next/head"

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

   const paths = data.map( artist => {
       return {
           params: {id: artist.id.toString()}
       }
   })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return {
        props: {
            artist: data
        }
    }
}

const Details = ({artist}) => {
    return ( 
        <>
         <Head>
      <title>Artists List | Details</title>
      <meta name="keywords" content="artists"/>
        </Head>
        <div>
            <h1>{artist.name} - {artist?.username}</h1>
            <p>Email: {artist?.email}</p>
            <p>Website: {artist?.website}</p>
            <p>City: {artist?.address?.city}</p>

        </div>
        </>
     );
}
 
export default Details;