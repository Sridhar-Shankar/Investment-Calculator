import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/result";
import { useState } from "react";

const initialData = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userinput, setUserInput] = useState(initialData);

  function handleChange(e) {
    const { name, value } = e.target;
    // console.log(name, value);
    setUserInput((prevInput) => ({ ...prevInput, [name]: +value }));
  }

  const inpudIsValid = userinput.duration >= 1;

  return (
    <>
      <Header />
      <Input input={userinput} onHandleChange={handleChange} />
      {!inpudIsValid && (
        <p className="center">Please enter the valid duration</p>
      )}
      {inpudIsValid && <Result input={userinput} />}
    </>
  );
}

export default App;
