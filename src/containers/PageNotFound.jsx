import { Link } from "react-router-dom"

const PageNotFound = () => {

  return (
    <div className="page-not-found">
      <h1 className="page-not-found__text page-not-found__text--huge">404</h1>
      <h2 className="page-not-found__text">Page not found</h2>
      <p className="page-not-found__text page-not-found__text--small">Oh no, Zoro is lost again.</p>
      <p className="page-not-found__text page-not-found__text--small">Sorry, we couldn’t find the page you’re looking for.</p> 
      <Link className="page-not-found__link page-not-found__link--hovered" to="/">Go Back</Link>
    </div>
  )
}

export default PageNotFound
