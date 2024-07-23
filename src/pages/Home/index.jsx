import '../../styles/Home.css'
import logements from '../../data/logements.json'
import Card from '../../components/Card'
import BannerImage from '../../assets/HomeBackground.png'

const listeLogements = logements;


function Home() {
  return (
    <div className='Home'>
      <div style={{ backgroundImage: `url(${BannerImage})`, backgroundSize: 'cover', borderRadius: '25px', width: '100%', height: '223px', boxShadow: '0px 4px 4px 0px #00000040'
 }} className='Banner'>
        Chez vous, partout et ailleurs</div>
      <div className='Gallery'>
        {listeLogements.map((logement) => (
          <Card 
          key={logement.id}
          title={logement.title}
          cover={logement.cover}
          />
        ))}

      </div>
    </div>
  )
}

export default Home