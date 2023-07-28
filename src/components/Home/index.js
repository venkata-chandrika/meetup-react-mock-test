import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'

import Header from '../Header'

import './index.css'

const Home = props => (
  <RegisterContext.Consumer>
    {value => {
      const {name, optionId, isRegistered} = value

      const onClickRegister = () => {
        const {history} = props
        history.replace('/register')
      }

      return (
        <>
          <Header />
          {isRegistered ? (
            <div className="register-container">
              <h1>Hello {name}</h1>
              <p>Welcome to {optionId}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
                className="meetup"
              />
            </div>
          ) : (
            <div className="register-container">
              <h1>Welcome to MeetUp</h1>
              <p>Please register for the topic</p>
              <Link to="/register">
                <button
                  type="button"
                  className="register"
                  onClick={onClickRegister}
                >
                  Register
                </button>
              </Link>

              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
                className="meetup"
              />
            </div>
          )}
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
