import { Link } from 'react-router-dom'

function Button({ text, type, link }) {
  return (
    <Link to={link} className={type}>
      {text}
    </Link>
  )
}

export default Button
