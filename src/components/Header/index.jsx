import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/Header.css'

function Header() {
    return (
        <div className='Header'>
            <img src={logo} alt="Logo Kasa" className='logoKasa' />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/APropos">A Propos</Link>
            </nav>
        </div>
    )
}
export default Header