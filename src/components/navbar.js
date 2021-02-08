import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            isMenuOpen: false,
            squareCorners: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(state => ({
            isMenuOpen: !state.isMenuOpen,
            squareCorners: !state.squareCorners            
        }))
    }

    render() {
        let toggleBtnClass = this.state.squareCorners ? "openButton" : "closedButton";


        return(
            <div>
                <div id="navContainer">
                    <ul id="navList">
                        <Link to="/whatson" className="navLink">
                            <li className="navListItem">What's On</li>
                        </Link>
                        <Link to="/book" className="navLink">
                            <li className="navListItem">Book Tickets</li>
                        </Link>
                        <Link to="/comingsoon" className="navLink">
                            <li className="navListItem">Coming Soon</li>
                        </Link>
                        <Link to="/contact" className="navLink">
                            <li className="navListItem">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div id="toggleMenu">
                    <div id="toggleMenuBtn" className={toggleBtnClass} onClick={this.handleClick}>
                        <img id="burger" src={process.env.PUBLIC_URL + "./navbar/burger.png"} alt="open menu"/>
                    </div>
                    {this.state.isMenuOpen ? 
                        <ul id="toggleNavList">
                            <Link to="/whatson" className="navLink">
                                <li className="navListItem">What's On</li>
                            </Link>
                            <Link to="/book" className="navLink">
                                <li className="navListItem">Book Tickets</li>
                            </Link>
                            <Link to="/comingsoon" className="navLink">
                                <li className="navListItem">Coming Soon</li>
                            </Link>
                            <Link to="/contact" className="navLink">
                                <li className="navListItem">Contact</li>
                            </Link>
                        </ul> : ""}
                </div>
            </div>
        )
    }
    
}

export default Navbar;