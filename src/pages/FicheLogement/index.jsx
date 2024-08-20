import logements from '../../data/logements.json'
import Carrousel from '../../components/Carrousel'
import Collapse from '../../components/Collapse'
import { useParams } from 'react-router-dom';
import '../../styles/FicheLogement.css';
import ratingPlus from '../../assets/ratingPlus.png'
import ratingMinus from '../../assets/ratingMinus.png'


function FicheLogement() {
  const listeLogements = logements;
  const {idCards} = useParams();
  let test1 = false;

 for (let i = 0; i < listeLogements.length; i++) {
  if (listeLogements[i].id === idCards) {
    var data = listeLogements[i];
    test1 = true;
  }  
}
console.log(test1);
if (test1===false) {
 window.location.href="/Error";
}

const ratings = parseInt(data.rating);
function CreateRatings(nb) {
  const items = [];

  for (let i = 0; i < nb; i++) {
    items.push(<img src={ratingPlus} alt="star"/>);
  }

  for (let i = 0; i < 5-nb; i++) {
    items.push(<img src={ratingMinus} alt="star"/>);
  }
  return <>{items}</>;
}


  return (
      <div className='FicheLogement'>
        <div className='carrouselImages'>
        <Carrousel
        key={idCards}
        images={data.pictures}
        />
        </div>
        <div className='mainLogements'>
          <div className='infoLogements'>
            <div className='TitleandTags'>
            <div className='titleLogements'>
              <h1>{data.title}</h1>
              <p>{data.location}</p>
            </div>
            <div className='tagsLogements'>
              {data.tags.map((tag) => (
                <div className='Tag'>{tag}</div> ))}
            </div>
            
          </div>
          <div className='HostandRatings'>
            
            <div className='Host'>
              <p>{data.host.name}</p>
              <img src={data.host.picture} alt={data.host.name}></img>
            </div>
            <div className='ratingsLogements'>
              {CreateRatings(ratings)}
            </div>
          </div>
          </div>
          <div className='collapsesLogements'>
            <Collapse 
            key={'Description'}
            title={'Description'}
            body={data.description}
            />
            <Collapse
            key={'Equipements'}
            title={'Equipements'}
            body={data.equipments}
            /> 
          </div>
        </div>
        
      </div>
  )
}

export default FicheLogement