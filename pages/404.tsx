import Link from 'next/link'

const  NotFound = () => {
    return (
        <div>
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>    
        </div>
    )
}

export default NotFound
