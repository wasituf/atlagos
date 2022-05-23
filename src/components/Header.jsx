import { Link } from 'react-router-dom'
import Navigation from './Navigation'

function Header() {
  return (
    <header className='header'>
      <Link to='/' className='logo'>
        átlagos
      </Link>
      <Navigation />
    </header>
  )
}
export default Header
