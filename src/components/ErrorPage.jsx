import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="error-page">
          <p className="error-message">Oops, something went wrong. Please try again later.</p>
          <Link className="back-home-link" to="/">Back home</Link>
        </div>
      );
    }      

export default ErrorPage;