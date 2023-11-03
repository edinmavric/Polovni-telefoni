import { Link } from 'react-router-dom';
import './index.scss';
import {
    AiOutlineYoutube,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineFacebook,
    AiOutlineLinkedin,
} from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
            <div className="fast-links">
                <h3>Brzi linkovi</h3>
                <Link to="/o-nama">O nama</Link>
                <Link to="/">Pocetna</Link>
            </div>
            <div className="contact">
                <h3>Kontaktirajte nas</h3>
                <button>Kontaktiraj nas</button>
            </div>
            <div className="socialmedia-links">
                <Link to="https://www.youtube.com">{<AiOutlineYoutube />}</Link>
                <Link to="https://www.instagram.com">
                    {<AiOutlineInstagram />}
                </Link>
                <Link to="https://www.twitter.com">{<AiOutlineTwitter />}</Link>
                <Link to="https://www.facebook.com">
                    {<AiOutlineFacebook />}
                </Link>
                <Link to="https://www.linkedin.com">
                    {<AiOutlineLinkedin />}
                </Link>
            </div>
            <p>Sva prava zadrzana ©2023</p>
        </footer>
    );
};

export default Footer;
