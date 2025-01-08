import * as React from "react";
import './HeaderArea.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

interface HeaderAreaProps {}

const HeaderArea: React.FC<HeaderAreaProps> = () => {
    return (
        <header className="header-area background-header">
            <div className="container">
                <nav className="main-navigation">
                    <a href="#" className="logo">
                        <h1>Villa</h1>
                    </a>
                    <ul className="navigation">
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">Properties</a></li>
                        <li><a href="#">Property Details</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li>
                            <a href="#">
                                <i>
                                    <FontAwesomeIcon icon={faCalendar}/>
                                </i>
                                Schedule a visit
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderArea;