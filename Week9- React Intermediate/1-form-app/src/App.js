import {useState} from 'react'

function App() {

  // Normal Way ------>>>>>>>>
  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")

  // function firstNameHandler(event) {
  //   // console.log(event.target.value)
  //   setFirstName(event.target.value)
  //   console.log(firstName)
  // }

  // function lastNameHandler(event) {
  //   // console.log(event.target.value)
  //   setLastName(event.target.value)
  //   console.log(lastName)
  // }

  // return (
  //   <div>
  //     <input type="text" 
  //       placeholder="first name"
  //       onChange={firstNameHandler}
  //     />

  //     <input type="text" 
  //       placeholder="last name"
  //       onChange={lastNameHandler}
  //     />
  //   </div>
  // );

  // React Way ---->>>>

  const [formData, setFormData] = useState({
    firstName : "" ,
    lastName : "" ,
    email : "",
    comment : "",
    isVisible : true,
    mode : "",
    favCar : ""
  })

  // console.log(formData)

  function formDataHandler(event) {

    // 1st method--->>>
    // setFormData(prevFormData => {
    //   return {
    //     ...prevFormData, // copying prev data
    //     [event.target.name] : event.target.value
    //   }
    // })

    // 2nd method--->>>
    const {name, value, type, checked} = event.target // destructuring the keys of event

    setFormData(prevFormData => {
      return {
        ...prevFormData, // copying prev data

        [name] : type === "checkbox" ? checked : value
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault()
    console.log("Form Submitted: " , formData)
  }

  return (
    <form onSubmit={submitHandler}>

      <input type="text" 
        placeholder="first name"
        name='firstName' // name attribute to access object's key
        onChange={formDataHandler}
        value={formData.firstName} // controlled component- syncing with the state updates
      />
      <br />

      <input type="text" 
        placeholder="last name"
        name='lastName'
        onChange={formDataHandler}
        value={formData.lastName}
      />
      <br />

      <input type="email" 
        placeholder='email'
        name='email'
        onChange={formDataHandler}
        value={formData.email}
      />
      <br />

      <textarea name="comment"
        placeholder='Enter your comments here'
        onChange={formDataHandler}
        value={formData.comment}
      />
      <br />

      <input type="checkbox"
        name="isVisible"
        id="isVisible"
        onChange={formDataHandler}
        checked={formData.isVisible} // checked attribute for checkbox
      />
      <label htmlFor="isVisible">Is it Visible?</label>
      <br />

      <fieldset>
        <legend>Mode:</legend>

        <input type="radio"
          name='mode'
          id='online-mode' // to intact the labels
          onChange={formDataHandler}
          value='online-mode'
          checked={formData.mode === "online-mode"}
        />
        <label htmlFor="online-mode">Online Mode</label>

        <input type="radio"
          name='mode'
          id='offline-mode'
          onChange={formDataHandler}
          value='offline-mode'
          checked={formData.mode === "offline-mode"}
        />
        <label htmlFor="offline-mode">Offline Mode</label>
      </fieldset>

      <label htmlFor="favCar">Select Favorite Car </label>
      <select name="favCar" id="favCar" onChange={formDataHandler} value={formData.favCar}>

        <option value="not selected">select</option>
        <option value="Fartuner">Fartuner</option>
        <option value="Thaar">Bhokaal Thar</option>
        <option value="Scarpio">Scarpio</option>
        <option value="Kia">Kia</option>
      
      </select>
      <br />

      <button>Submit</button>
    </form>
  )
}

export default App;
