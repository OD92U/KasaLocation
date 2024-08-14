import PropTypes from 'prop-types'
import '../../styles/Card.css'

function Card({ title, cover }) {
  return (
    <div style={{ backgroundImage:`url(${cover})`}} className='Card'>
      <div className='TitleCard'>{title}</div>
    </div>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card