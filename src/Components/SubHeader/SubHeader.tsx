import * as React from 'react';
import './SubHeader.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';

interface Props {
    email: string;
    address: string;
    socialLinks: {
        facebook: string;
        twitter: string;
        linkedIn: string;
        instagram: string;
    };
}

const SubHeader: React.FC<Props> = ({ email, address, socialLinks }) => {
    const { facebook, twitter, linkedIn, instagram } = socialLinks;

    return (
        <div className="sub-header">
            <div className="container">
                <div className="row">
                    <div className="row-info">
                        <ul className="info">
                            <li>
                                <i><FontAwesomeIcon icon={faEnvelope} /></i>
                                {email}
                            </li>
                            <li>
                                <i><FontAwesomeIcon icon={faMap} /></i>
                                {address}
                            </li>
                        </ul>
                    </div>
                    <div className="row-social-links">
                        <ul className="social-links">
                            <li>
                                <a href={facebook} title="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            </li>
                            <li>
                                <a href={twitter} title="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            </li>
                            <li>
                                <a href={linkedIn} title="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            </li>
                            <li>
                                <a href={instagram} title="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;