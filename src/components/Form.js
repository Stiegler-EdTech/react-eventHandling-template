import "./Form.css";

const Form = () => {
    const myFunction = (event) => {
        event.preventDefault();
        console.log("formSubmitHandler as been invoked/called!");
    }
    return (
      <div className="form-container">
        <form>
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-field">
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" />
          </div>
          <button type="submit" onClick={myFunction}className="submit-button">Submit</button>
        </form>
      </div>
    );
  };
  
  export default Form;