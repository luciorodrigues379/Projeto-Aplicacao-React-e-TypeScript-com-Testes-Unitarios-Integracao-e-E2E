import { Link } from "react-router-dom";

const Menu = () => {

    return (
        
        <nav className ="navbar navbar-light navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>  
                <a className="navbar-brand" href="#">UNES</a>
                </Link>  
            </div>
      </nav>


    )

}

export default Menu;