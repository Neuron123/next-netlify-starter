import Script from 'next/script'
import Link from 'next/link'

export default function Header({ title }) {
  return(
    <div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" />
    <h1 className="title">{title}</h1>
     </div>

  )
}
