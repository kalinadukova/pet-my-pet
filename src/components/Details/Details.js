import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import * as petService from '../../services/petService';
import { AuthContext } from "../../context/AuthContext";

const Details = () => {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);
  const [pet, setPet] = useState({});

  const { petId } = useParams();

  useEffect(() => {
    petService.getPetById(petId)
      .then(result => setPet(result));

  }, [petId]);

  function onDelete(e) {
    e.preventDefault();

    petService.deletePet(petId, userInfo.accessToken)
      .then(() => {
        navigate('/')
      });
  }

  const ownerButtons = (
    <>
      <Link className="button" to="edit">Edit</Link>
      <a className="button" href="#" onClick={onDelete}>Delete</a>
    </>
  );

  const likeButton = (<a className="button" href="#">Like</a>);


  return (
    <section id="details-page" className="details">
      <div className="pet-information">
        <h3>Name: {pet.name}</h3>
        <p className="type">Type: {pet.type}</p>
        <p className="img"><img src={pet.imageUrl} /></p>
        <div className="actions">

          {userInfo._id && (userInfo._id == pet._ownerId
            ? ownerButtons
            : likeButton)
          }

          <div className="likes">
            <img className="hearts" src="/images/heart.png" />
            <span id="total-likes">Likes: 0</span>
          </div>
        </div>
      </div>
      <div className="pet-description">
        <h3>Description:</h3>
        <p>{pet.description}</p>
      </div>
    </section>
  );
};

export default Details;