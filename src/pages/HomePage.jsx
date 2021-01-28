import React, { useState, useContext, useEffect } from 'react';
import Field from '../components/Forms/Field';
import UserContext from '../contexts/UserContext';
import { setLocalStorageValue } from '../services/getUser';
import ExoPage from './ExoPage'

function Homepage({ name }) {

  const { setUserName } = useContext(UserContext);

  const [user, setUser] = useState({
    username: name ? name : 'User'
  })

  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    setUser({ ...user, [name]: value });
  }

  const [hidden, setHidden] = useState(false);
  const changeName = async (event) => {
    event.preventDefault()
    setHidden(true)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUserName(user.username)
    setLocalStorageValue('username', user.username)
    setHidden(false)
  }
  
  return (
    <>
      <div className="nes-container with-title mb-3">
      <p className="title">Welcome</p>
        <div className="message-list">
          <div className="message-left">
            <i className="nes-kirby"></i>
            <div className="nes-balloon from-left">
              <p>Bonjour <strong className="nes-text is-error">{!user.username ? name : user.username} </strong> 
                <i className="nes-icon star is-mediam"></i> et bienvenue sur <strong className="nes-text is-error">ExercicesLand</strong></p>
            </div>
          </div>
        </div>
        {!hidden && (
          <div className="d-flex justify-content-end mt-3">
            <p className="nes-balloon from-right nes-pointer" >
            Tu peux changer ton prénom en cliquant <strong className="nes-text is-success" onClick={changeName}>ici</strong>
          </p>
          <i className="nes-kirby"></i>
        </div>
        )}
        {hidden && (
          <form id="form" onSubmit={handleSubmit} >
            <Field
              type="text" name="username" label="Tu peux ajouter ton prénom ou un pseudo ici. 🔽" value={user.username} onChange={handleChange} placeholder={"Zakaria"} error={""} />
            <button type="submit" className="nes-btn is-success m-2">OK !</button>
            <button type="button" className="nes-btn is-error" onClick={() => setHidden(false)}>Cancel</button>
          </form>
        )}
      </div>
      <div className="nes-container with-title">
      <p className="title">Exercices</p>
        <hr className="my-4" />
        <ExoPage />
        </div>
    </>
  )
}

export default Homepage;