import '../../styles/Home.scss'
import logements from '../../data/logements.json'
import Card from '../../components/Card'
import { Link } from 'react-router-dom';

const listeLogements = logements;


function Home() {
  return (
    <div className='Home'>
      <div className='Banner'>
        Chez vous, partout et ailleurs</div>
      <div className='Gallery'>
        {listeLogements.map((logement) => (
          <Link key={"link" + logement.id} to={"/FicheLogement/" + logement.id}>
            <Card 
          key={logement.id}
          title={logement.title}
          cover={logement.cover}
          /></Link>
        ))}

      </div>
    </div>
  )
}

export default Home