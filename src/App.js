import "./App.css";
import star from "../src/Assets/images/icon-star.svg";

function App() {
  const rating = [1, 2, 3, 4, 5];
  return (
    <div className="bg-very-dark-blue h-screen w-screen flex justify-center items-center">
      <div className="bg-gradient-to-t from-very-dark-blue to-dark-blue w-96 p-7 h-fit flex flex-col gap-6 justify-evenly border rounded-2xl">
        <div className="bg-dark-blue shadow-sm rounded-full w-10 h-10 flex justify-center items-center m-0">
          <img src={star} alt="star icon" className="h-3 w-3"></img>
        </div>
        <h1 className="text-white text-left text-lg">How did we do?</h1>
        <p className="text-light-Grey text-sm">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul className="flex flex-row w-full justify-between gap-4">
          <Numbers array={rating}></Numbers>
        </ul>
        <button className="bg-primary-orange w-80/100 text-white hover:bg-white hover:text-primary-orange py-2 rounded-3xl">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

function Numbers({ array }) {
  return (
    <>
      {array.map((item, key) => {
        return (
          <li>
            <input
              name="option"
              type="radio"
              id={`option-${item}`}
              class="hidden peer"
              required
            ></input>
            <label
              htmlFor={`option-${item}`}
              key={key}
              className="bg-dark-blue cursor-pointer hover:bg-medium-grey hover:text-white peer-checked:bg-primary-orange peer-checked:text-white text-light-Grey rounded-full w-12 h-12 flex text-sm justify-center items-center m-0"
            >
              {item}
            </label>
          </li>
        );
      })}
    </>
  );
}

export default App;

// <div
//             key={key}
//             className="bg-dark-blue hover:bg-medium-grey hover:text-white selection:bg-primary-orange selection:text-white text-light-Grey rounded-full w-12 h-12 flex text-sm justify-center items-center m-0"
//           >
//             {item}
//           </div>
