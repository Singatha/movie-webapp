import { Link } from "react-router-dom"
import { ReactComponent as FacebookIcon } from "../assets/images/facebook.svg"
import { ReactComponent as TwitterIcon } from "../assets/images/twitter.svg"
import { ReactComponent as InstagramIcon } from "../assets/images/instagram.svg"

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-column">
          <Link className="footer-item__link" to="/list/tv">TV Series</Link>
          <Link className="footer-item__link" to="/list/movies">Movies</Link>
          <Link className="footer-item__link" to="/list/favourite-movies">Favourite Movies</Link>
          <Link className="footer-item__link" to="/list/favourite-tv-series">Favourite TV Series</Link>
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
