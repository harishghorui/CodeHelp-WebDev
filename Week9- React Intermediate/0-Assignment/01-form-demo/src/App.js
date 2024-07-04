import { useState } from "react";
import Text from "./components/Text";

function App() {

  const [formData, setFormData] = useState({
    firstname : "",
    lastname : "",
    email : "",
    country : "",
    address : "",
    city : "",
    state : "",
    zip : "",
    comment : false,
    candidates : false,
    offers : false,
    pushNotification : ""
  })

  // console.log(formData)

  function onChangeHandler(event) {
    const {type, name, value, checked} = event.target // destructing

    setFormData(prevFormData => (
      {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    ))
  }

  function submitHandler(event) {
    event.preventDefault()
    console.log("Form Submitted " ,formData)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        
        <div>
          <div>
            <label htmlFor="firstname">First name</label>
          </div>
          
          <input type="text"
            placeholder="John"
            id="firstname"
            name="firstname"
            onChange={onChangeHandler}
            value={formData.firstname}
          />
        </div>
        
        <div>
          <div>
            <label htmlFor="lastname">Last name</label>
          </div>
          
          <input type="text"
            placeholder="Doe"
            id="lastname"
            name="lastname"
            onChange={onChangeHandler}
            value={formData.lastname}
          />
        </div>

        <div>
          <div>
            <label htmlFor="email">Email address</label>
          </div>
          
          <input type="email"
            id="email"
            placeholder="John@123.doe"
            name="email"
            onChange={onChangeHandler}
            value={formData.email}
          />
        </div>

        <div>
          <div>
            <label htmlFor="country">Country</label>
          </div>
          
          <select name="country" id="country" onChange={onChangeHandler} value={formData.country}>

            <option value="India">India</option>
            <option value="US">United States</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>

          </select>
        </div>

        <div>
          <div>
            <label htmlFor="address">Street address</label>
          </div>
          
          <input type="text"
            placeholder="1234 Main St"
            id="address"
            name="address"
            onChange={onChangeHandler}
            value={formData.address}
          />
        </div>

        <Text htmlFor="city"
          label="City"
          type="city"
          placeholder="London"
          id="city"
          name="city"
          onChange={onChangeHandler}
          value={formData.city}
        />

        <Text htmlFor="state"
          label="State / Province"
          type="text"
          placeholder="United Kingdom"
          id="state"
          name="state"
          onChange={onChangeHandler}
          value={formData.state}
        />

        <div>
          <div>
            <label htmlFor="zip">Zip / Postal code</label>
          </div>

          <input type="number"
            placeholder="1234"
            id="zip"
            name="zip"
            onChange={onChangeHandler}
            value={formData.zip}
          />

        </div>

        <div>
          <div>
            <h5>By Email</h5>
          </div>

          <div>
            <div className="byEmail">
            
              <input type="checkbox"
                id="comment"
                name="comment"
                onChange={onChangeHandler}
                checked={formData.comment}
              />

              <div>
                <label htmlFor="comment">Comments</label>
                <p>Get notified when someones posts a comment on a posting.</p>
              </div>

            </div>

            <div className="byEmail">
            
              <input type="checkbox"
                id="candidates"
                name="candidates"
                onChange={onChangeHandler}
                checked={formData.candidates}
              />

              <div>
                <label htmlFor="candidates">Candidates</label>
                <p>Get notified when a candidate applies for a job.</p>
              </div>

            </div>

            <div className="byEmail">
            
              <input type="checkbox"
                id="offers"
                name="offers"
                onChange={onChangeHandler}
                checked={formData.offers}
              />

              <div>
                <label htmlFor="offers">Offers</label>
                <p>Get notified when a candidate accepts or rejects an offer.</p>
              </div>

            </div>

          </div>
        </div>

        <div>
          <div>
            <h5>Push Notifications</h5>
            <p>These are delivered via SMS to your mobile phone.</p>
          </div>

          <div>
            <div>
              <input type="radio" 
                name="pushNotification"
                id="everything"
                value="everything"
                onChange={onChangeHandler}
                checked={formData.pushNotification === "everything"}
              />
              <label htmlFor="everything">Everything</label>
            </div>

            <div>
              <input type="radio" 
                name="pushNotification"
                id="sameAsEmail"
                value="sameAsEmail"
                onChange={onChangeHandler}
                checked={formData.pushNotification === "sameAsEmail"}
              />
              <label htmlFor="sameAsEmail">Same as email</label>
            </div>

            <div>
              <input type="radio"
                name="pushNotification"
                id="noPushNotifi"
                value="noPushNotifi"
                onChange={onChangeHandler}
                checked={formData.pushNotification === "noPushNotifi"}
              />
              <label htmlFor="noPushNotifi">No push notifications</label>
            </div>
          </div>
        </div>

        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
