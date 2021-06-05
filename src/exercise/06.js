// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitNames}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const [loweredFirstName, setFirstName] = React.useState('')
  const [loweredLastName, setLastName] = React.useState('')

  const firstNameInputRef = React.useRef()
  const lastNameInputRef = React.useRef()

  function handleChange(event) {
    const firstName = firstNameInputRef.current.value
    const lastName = lastNameInputRef.current.value
    console.log(event.target)
    setFirstName(firstName.toLowerCase())
    setLastName(lastName.toLowerCase())
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.dir(event.target)
    onSubmitNames(loweredFirstName, loweredLastName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstNameInput">Firstname:</label>
        <input
          type="text"
          ref={firstNameInputRef}
          onChange={handleChange}
          value={loweredFirstName}
        />
      </div>
      <div>
        <label htmlFor="lastNameInput">Lastname:</label>
        <input
          type="text"
          ref={lastNameInputRef}
          onChange={handleChange}
          value={loweredLastName}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitNames = (firstname, lastname) =>
    alert(`You entered: ${firstname} ${lastname}`)
  return <UsernameForm onSubmitNames={onSubmitNames} />
}

export default App
