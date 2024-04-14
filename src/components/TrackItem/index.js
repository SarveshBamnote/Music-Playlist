import {MdDelete} from 'react-icons/md'
import './index.css'

const TrackItem = props => {
  const {songDetail, onClickDelete} = props
  const {id, imageUrl, name, genre, duration} = songDetail

  const onClickDeleteBtn = () => {
    onClickDelete(id)
  }

  return (
    <li className="list-item">
      <div className="image-and-name-cont">
        <img className="track-image" src={imageUrl} alt="track" />
        <div className="name-and-genre">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-and-delete">
        <p className="duration">{duration}</p>
        <button
          onClick={onClickDeleteBtn}
          className="delete-button"
          type="button"
          data-testid="delete"
        >
          <MdDelete className="delete-icon" />
          {}
        </button>
      </div>
    </li>
  )
}

export default TrackItem
