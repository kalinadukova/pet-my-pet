import * as petService from '../../services/petService';

import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const Create = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuthContext();

  function onCreatePet(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    let name = formData.get('name');
    let description = formData.get('description');
    let imageUrl = formData.get('imageUrl');
    let type = formData.get('type');

    petService.createPet({
      name,
      description,
      imageUrl,
      type
    }, userInfo.accessToken)
      .then(result => navigate('/'));
  }

  return (
    <section id="create-page" className="create">
      <form id="create-form" onSubmit={onCreatePet} method="POST">
        <fieldset>
          <legend>Add new Pet</legend>
          <p className="field">
            <label htmlFor="name">Name</label>
            <span className="input">
              <input type="text" name="name" id="name" placeholder="Name" />
            </span>
          </p>
          <p className="field">
            <label htmlFor="description">Description</label>
            <span className="input">
              <textarea name="description" id="description" placeholder="Description"></textarea>
            </span>
          </p>
          <p className="field">
            <label htmlFor="image">Image</label>
            <span className="input">
              <input type="text" name="imageUrl" id="image" placeholder="Image" />
            </span>
          </p>
          <p className="field">
            <label htmlFor="type">Type</label>
            <span className="input">
              <select id="type" name="type">
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="parrot">Parrot</option>
                <option value="reptile">Reptile</option>
                <option value="other">Other</option>
              </select>
            </span>
          </p>
          <input className="button submit" type="submit" value="Add Pet" />
        </fieldset>
      </form>
    </section>
  );
};

export default Create;