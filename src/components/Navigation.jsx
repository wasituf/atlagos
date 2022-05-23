import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function Navigation() {
  const [closed, setClosed] = useState(true)
  const closedClass = closed ? 'nav-items closed' : 'nav-items'

  const onClick = () => {
    setClosed(!closed)
  }

  return (
    <>
      <div onClick={onClick} className='dropdown'>
        {closed ? (
          <FaChevronDown fill='323232' />
        ) : (
          <FaChevronUp fill='323232' />
        )}
      </div>

      <nav className={closedClass}>
        <NavLink onClick={() => setClosed(!closed)} to='/' className='nav-link'>
          Home
        </NavLink>
        <NavLink
          onClick={() => setClosed(!closed)}
          to='/about'
          className='nav-link'
        >
          About Us
        </NavLink>
        <NavLink
          onClick={() => setClosed(!closed)}
          to='/contact'
          className='nav-link'
        >
          Contact
        </NavLink>
      </nav>
    </>
  )
}
export default Navigation
