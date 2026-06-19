import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul>
        <li><Link to="/">Asosiy Sahifa</Link></li>
        <li><Link to="/kitoblar">Kitoblar</Link></li>
        <li><Link to="/mualliflar">Mualliflar</Link></li>
        <li><Link to="/chegirmalar">Chegirmalar</Link></li>
      </ul>
      <div className="buttons">
        <Link to="/login" className='Login-btn-link'>
          <button className='Login'><p>Kirish</p></button>
        </Link>
        
        <button className='globe'>
          <i className="fa-solid fa-globe"></i>
          <p>O'zbekcha</p>
        </button>
        <button className='search'>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  )
}

export default Navbar

