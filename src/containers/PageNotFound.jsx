import { Link } from "react-router-dom"

function PageNotFound() {

    return (
      <div className="page-not-found">
        <h1 className="page-not-found__text page-not-found__text--huge">404</h1>
        <h2 className="page-not-found__text">Oh no, Zoro is lost again.</h2> 
        <Link className="page-not-found__link" to="/">Go Back</Link>
      </div>
    )
}
    
export default PageNotFound
