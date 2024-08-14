import '../../styles/Error.css'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='mainError'>
            <p className='bigError'>404</p>
            <p className='oups'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='versAccueil' to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error