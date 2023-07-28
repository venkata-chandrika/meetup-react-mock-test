import RegisterContext from '../../context/RegisterContext'

import Header from '../Header'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        optionId,
        changeName,
        changeTopic,
        registerName,
        updateError,
        errorMsg,
      } = value

      const onChangeInput = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      const onSubmitDetails = event => {
        event.preventDefault()
        if (name !== '' && optionId !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      return (
        <>
          <Header />
          <div className="register-page-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="register-img"
            />
            <form className="form" onSubmit={onSubmitDetails}>
              <h1>Let us join</h1>
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Your Name"
                onChange={onChangeInput}
              />
              <label htmlFor="topics">TOPICS</label>
              <select id="topics" value={optionId} onChange={onChangeTopic}>
                {topicsList.map(each => (
                  <option key={each.id} value={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="register">
                Register Now
              </button>
              {errorMsg && <p>Please enter your name</p>}
            </form>
          </div>
        </>
      )
    }}
  </RegisterContext.Consumer>
)
export default Register
