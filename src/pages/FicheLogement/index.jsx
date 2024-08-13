import logements from '../../data/logements.json'
import Carrousel from '../../components/Carrousel'
import Collapse from '../../components/Collapse'
import { useParams } from 'react-router-dom';
import '../../styles/FicheLogement.css';
import ratingPlus from '../../assets/ratingPlus.png'
import ratingMinus from '../../assets/raitingMinus.png'

function FicheLogement() {
  const listeLogements = logements;
  const {idCards} = useParams();

 for (let i = 0; i < listeLogements.length; i++) {
  if (listeLogements[i].id === idCards) {
    var data = listeLogements[i];
  }
}

const Stars = ({n}) => {
  let stars = []
  for (let i = 0; i < n; ++i) {
    stars.push(<img src={ratingPlus} alt="ratings"/>)
  }

  return (
    <div className="Stars">
      {stars}
    </div>
  )
}

function Hi3Times(nb) {
  const items = [];

  for (let i = 0; i < nb; i++) {
    items.push(<img src={ratingPlus} alt="star"/>);
  }

  for (let i = 0; i < 5-nb; i++) {
    items.push(<img src={ratingMinus} alt="star"/>);
  }




  return <>{items}</>;
}
const rat = parseInt(data.rating);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let text = fruits.join();



const CreateRatings = (nb) => {
  const rat = parseInt(nb);
  for (let i=0; i<rat; i++) {
    console.log('avant');
    // <img src={ratingPlus} alt="stars"/>
    <p>x</p>
    console.log('apres');
  }
}

  return (
      <div className='FicheLogement'>
        <div className='carrouselImages'>
        <Carrousel
        images={data.pictures}
        />
        </div>
        <div className='mainLogements'>
          <div className='titleandhostLogements'>
            <div className='titleLogements'>
              <h1>{data.title}</h1>
              <p>{data.location}</p>
            </div>
            <div className='Host'>
              <p>{data.host.name}</p>
              <img src={data.host.picture} alt={data.host.name}></img>
            </div>
          </div>
          <div className='tagsandraitingsLogements'>
            <div className='tagsLogements'>
              {data.tags.map((tag) => (
                <div className='Tag'>{tag}</div> ))}
            </div>
            <div className='raitingsLogements'>
              {Hi3Times(rat)}
            </div>
          </div>
          <div className='collapsesLogements'>
            <Collapse 
            title={'Description'}
            body={data.description}
            />
            <Collapse
            title={'Equipements'}
            body={data.equipements}
            />
          </div>
        </div>
        
      </div>
  )
}

export default FicheLogement