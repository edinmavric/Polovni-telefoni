import { Link } from 'react-router-dom';
import nobglogo from '../../public/croped-nobg-logo.png';
import { BsPhone } from 'react-icons/bs';
import { BiSearchAlt, BiMenuAltRight } from 'react-icons/bi';
import './index.scss';

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={nobglogo} rel="noreferrer" />
            </Link>
            <nav>
                <p>{<BsPhone />}</p>
                <p>{<BiSearchAlt />}</p>
                <p>{<BiMenuAltRight />}</p>
            </nav>
        </header>
    );
};

export default Header;
