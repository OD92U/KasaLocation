import logements from '../../data/logements.json'
import Carrousel from '../../components/Carrousel'
import Collapse from '../../components/Collapse'
import { useParams } from 'react-router-dom';
import '../../styles/FicheLogement.scss';
import ratingPlus from '../../assets/ratingPlus.png'
import ratingMinus from '../../assets/ratingMinus.png'


function FicheLogement() {
  const listeLogements = logements;
  const {idCards} = useParams();
  let exists = false;

 for (let i = 0; i < listeLogements.length; i++) {
  if (listeLogements[i].id === idCards) {
    var data = listeLogements[i];
    exists = true;
  }  
}

if (exists===false) {
 window.location.href="/Error";
}

const ratings = parseInt(data.rating);
function CreateRatings(nb) {
  const items = [];

  for (let i = 0; i < nb; i++) {
    items.push(<img src={ratingPlus} alt="star" key={'ratingPlus' + i}/>);
  }

  for (let i = 0; i < 5-nb; i++) {
    items.push(<img src={ratingMinus} alt="star" key={'ratingMinus' + i}/>);
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
              {data.tags.map((tag, index) => (
                <div className='Tag' key={index}>{tag}</div> ))}
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
            <div className='collapseDiv'><Collapse 
            key={'Description-' + idCards}
            title={'Description'}
            body={data.description}
            /></div>
            <div className='collapseDiv'><Collapse
            key={'Equipements-' + idCards}
            title={'Equipements'}
            body={data.equipments}
            /> </div>
          </div>
        </div>
        
      </div>
  )
}

export default FicheLogement