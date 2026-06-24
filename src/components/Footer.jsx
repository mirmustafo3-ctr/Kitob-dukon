import { Link } from 'react-router-dom' 
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <Link to="/"><h2>Logo</h2></Link>
          <p>Sizning sevimli onlayn kitob do'koningiz. Eng sara asarlar va hamyonbop narxlar faqat bizda.</p>
          
          <div className="social-icons">
            <a href="https://t.me/mustafomirzayunusov"><i className="fa-brands fa-telegram"></i></a>
            <a href="https://www.instagram.com/mustafo.__000"><i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.youtube.com/feed/you"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Tezkor Menyular</h3>
          <ul>
            <li><Link to="/">Asosiy Sahifa</Link></li>
            <li><Link to="/kitoblar">Kitoblar</Link></li>
            <li><Link to="/mualliflar">Mualliflar</Link></li>
            <li><Link to="/chegirmalar">Chegirmalar</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Aloqa</h3>
          <p><i className="fa-solid fa-phone"></i> +998 (91) 155-77-25</p>
          <p><i className="fa-solid fa-envelope"></i> info@bookstore.uz</p>
          <p><i className="fa-solid fa-location-dot"></i> Toshkent sh., Chilonzor tumani</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BookStore. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  )
}

export default Footer