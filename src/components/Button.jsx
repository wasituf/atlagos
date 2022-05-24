import { Link } from 'react-router-dom'

function Button({ text, type, link, submit }) {
  return (
    <Link type={submit && 'submit'} to={link} className={'btn ' + type}>
      {text}
    </Link>
  )
}

export default Button
