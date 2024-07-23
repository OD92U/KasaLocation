import footerLogo from '../../assets/footerLogo.png'
import '../../styles/Footer.css'

function Footer() {
    return (
        <div className='Footer'>
            <img src={footerLogo} alt="Logo Kasa"/>
            <p id='footerText'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer