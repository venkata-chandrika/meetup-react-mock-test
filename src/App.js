import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import './App.css'
import NotFound from './components/NotFound'
import RegisterContext from './context/RegisterContext'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    name: '',
    optionId: 'Arts and Culture',
    isRegistered: false,
    errorMsg: false,
  }

  onChangeInput = name => {
    this.setState({name})
  }

  onChangeTopic = optionId => {
    this.setState({optionId})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  errorMsg = () => {
    this.setState({errorMsg: true})
  }

  render() {
    const {name, optionId, isRegistered, errorMsg} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          optionId,
          isRegistered,
          errorMsg,
          changeName: this.onChangeInput,
          changeTopic: this.onChangeTopic,
          registerName: this.registerName,
          updateError: this.errorMsg,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
