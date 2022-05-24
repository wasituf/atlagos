import { Link } from 'react-router-dom'
import Newsletter from './Newsletter'

function Footer() {
  return (
    <div>
      <Newsletter />
      <div className='footer'>
        <div className='footer-nav'>
          <Link className='footer-nav-link' to='/contact'>
            Contact
          </Link>
          <Link className='footer-nav-link' to='/about'>
            About Us
          </Link>
          <Link className='footer-nav-link' to='/privacy-policy'>
            Privacy Policy
          </Link>
        </div>
        <p className='copyright'>&copy; 2022 Átlagos Inc</p>
      </div>
    </div>
  )
}
export default Footer
