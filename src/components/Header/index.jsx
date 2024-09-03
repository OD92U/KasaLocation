import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/Header.scss'




function Header() {
    const location = useLocation()
    const current = location.pathname
    var accueilUnderline = 'none'
    var aproposUnderline = 'none'

    if (current==='/') {
        accueilUnderline ='underline'
        aproposUnderline ='none'
    }
    if (current==='/APropos') {
        accueilUnderline ='none'
        aproposUnderline ='underline'
    }

    const accueilStyle = {
        textDecoration: accueilUnderline,
    }

    const aproposStyle = {
        textDecoration: aproposUnderline,
    }

    return (
        <div className='Header'>
            <img src={logo} alt="Logo Kasa" className='logoKasa' />
            <nav>
                <Link className='accueil' style={accueilStyle} to="/">Accueil</Link>
                <Link className='apropos' style={aproposStyle} to="/APropos">A Propos</Link>
            </nav>
        </div>
    )
}
export default Header