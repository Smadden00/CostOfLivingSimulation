import Link from 'next/link';

export default function Button({link, text, query}) {

  return (
    <div className='buttonContainer'>
        <Link href={{pathname: link, query: query}}>
            <h2 className='button'>{text}</h2>
        </Link>
    </div>
  )
}
