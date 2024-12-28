import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>SORRY!</h2>
            <p>LINK NOT FOUND</p>
            <p>Really sad for you</p>
            <Link to="/"> Back to the homepage...</Link>
        </div>
    );
}
 
export default NotFound;