import './styles.css';
import { ReactComponent as LinkedinIcon } from './linkedin.svg'

function Footer() {
    return(
        <footer className="main-footer">
            <p>JoseJulioDev</p>
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/jos%C3%A9-julio-umbelino-57264b209/" target="_new">
                    <LinkedinIcon />
                </a>
            </div>
        </footer>
    );
}

export default Footer;