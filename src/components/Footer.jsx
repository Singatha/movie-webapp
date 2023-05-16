import { Link } from "react-router-dom"
import { ReactComponent as FacebookIcon } from "../assets/images/facebook.svg"
import { ReactComponent as TwitterIcon } from "../assets/images/twitter.svg"
import { ReactComponent as InstagramIcon } from "../assets/images/instagram.svg"

function Footer() {

  return (
    <div className="footer">
      <div className="footer-column">
          <Link className="footer-item__link" to="/list">TV Series</Link>
          <Link className="footer-item__link" to="/list">Movies</Link>
          <Link className="footer-item__link" to="/list">Favourites</Link>
      </div>
      <div className="footer-media">
        <p className="footer-media__text">Follow us</p>
        <div className="footer-media-links">
          <FacebookIcon className="footer-media-links__icon"/>
          <TwitterIcon className="footer-media-links__icon"/>
          <InstagramIcon className="footer-media-links__icon"/>
        </div>
      </div>
    </div>
  )
}
  
export default Footer
