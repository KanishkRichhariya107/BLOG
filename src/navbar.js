import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dev Bhai Blogs</h1>
            <div className="links">
            <Link to="/" >HOME</Link>
            <Link to="/create">NEW BLOG</Link>
            <Link to="/ "style={{
                color:"white",
                backgroundColor:"#f1356d",
                borderRadius:"5px"
            }}>login</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;