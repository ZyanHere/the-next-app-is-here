import Link from 'next/link'

const notFound = () => {
  return (
    <div>
        <h2>Not Found</h2>
        <p>Sorry, What you are looking for doesnot exist</p>
        <Link href="/">Return Home</Link>
    </div>
  )
}

export default notFound