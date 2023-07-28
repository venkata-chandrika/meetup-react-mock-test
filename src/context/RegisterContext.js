import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  optionId: 'Arts and Culture',
  isRegistered: false,
  errorMsg: false,
  changeName: () => {},
  changeTopic: () => {},
  registerName: () => {},
  updateError: () => {},
})
export default RegisterContext
