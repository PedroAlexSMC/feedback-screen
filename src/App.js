import "./App.css";
import star from "../src/Assets/images/icon-star.svg";
import thankyou from "../src/Assets/images/illustration-thank-you.svg";
import { useState } from "react";

function App() {
  const rating = [1, 2, 3, 4, 5];
  const [selectedRating, setSelectedRating] = useState(null);
  const [submited, setSubmitted] = useState(false);

  function handleChange(event) {
    setSelectedRating(event.target.value);
    console.log(selectedRating);
  }
  function handleSubmit() {
    if (selectedRating != null) {
      setSubmitted(!submited);
    }
  }
  return (
    <div className="bg-very-dark-blue h-screen w-screen flex justify-center items-center">
      <div className="bg-gradient-to-t from-very-dark-blue to-dark-blue w-80 sm:w-96 p-7 h-fit flex flex-col gap-6 justify-evenly border rounded-2xl">
        {!submited ? (
          <>
            <div className="bg-dark-blue shadow-sm rounded-full w-10 min-w-10 h-10 flex justify-center items-center m-0">
              <img src={star} alt="star icon" className="h-3 w-3"></img>
            </div>
            <h1 className="text-white text-left text-lg">How did we do?</h1>
            <p className="text-light-Grey text-sm">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <ul className="flex flex-row w-full justify-between sm:gap-4 gap-2">
              {rating.map((item) => {
                return (
                  <li key={item.id}>
                    <input
                      onClick={handleChange}
                      name="option"
                      type="radio"
                      value={item}
                      id={`option-${item}`}
                      className="hidden peer"
                      required
                    ></input>
                    <label
                      htmlFor={`option-${item}`}
                      className="bg-dark-blue cursor-pointer hover:bg-medium-grey hover:text-white peer-checked:bg-primary-orange peer-checked:text-white text-light-Grey rounded-full w-12 h-12 flex text-sm justify-center items-center m-0"
                    >
                      {item}
                    </label>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={handleSubmit}
              className="bg-primary-orange w-80/100 text-white hover:bg-white hover:text-primary-orange py-2 rounded-3xl"
            >
              SUBMIT
            </button>
          </>
        ) : (
          <div className="flex flex-col justify-center text-center gap-5">
            <img
              src={thankyou}
              alt="thank you icon"
              className="w-56 self-center p-3"
            ></img>
            <p className="text-primary-orange bg-dark-blue rounded-full w-fit px-7 py-2 self-center my-3">
              You selected {selectedRating} out of 5
            </p>
            <h1 className="text-white text-lg font-bold">Thank you!</h1>
            <p className="text-light-Grey">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
