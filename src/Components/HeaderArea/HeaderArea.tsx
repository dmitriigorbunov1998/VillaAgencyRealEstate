import * as React from "react";
import './HeaderArea.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

interface Props {}

const HeaderArea: React.FC<Props> = () => {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <a href="#" className="logo">
                                <h1>Villa</h1>
                            </a>
                            <ul className="nav">
                                <li><a href="#" className="active">Home</a></li>
                                <li><a href="#">Properties</a></li>
                                <li><a href="#">Property Details</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#"><i className="fa fa-calendar"><FontAwesomeIcon icon={faCalendar} /></i> Schedule a visit</a></li>
                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderArea;