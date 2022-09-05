import '../styles/components/navbar.sass'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='nav'>
        <ul>
            <Link exact to='/'><li>home</li></Link>
            <Link to='/mypalettes'><li>my palettes</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar