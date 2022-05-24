import { Link } from 'react-router-dom'

function Button({ text, type, link }) {
  return (
    <Link to={link} className={'btn ' + type}>
      {text}
    </Link>
  )
}

export default Button
