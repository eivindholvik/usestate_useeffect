import { useState, useEffect } from "react";

// if(isActive) {
//   return "I am active";
// } else {
//   return "I am not active";
// }

function ShowActive(props) {
  const [isActive, setIsActive] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    console.log("effect");
    let counter = 0;
    const stopWatch = setInterval(() => {
      console.log(counter, stopWatch);
      counter++;
    }, 1000);
    return () => {
      clearInterval(stopWatch);
      console.log("cleanup");
    };
  }, [isActive]);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleChange = (e) => {
    // console.log(e);
    console.log(e.target.value);
    setUserEmail(e.target.value);
  };

  return (
    <>
      <div>{isActive ? "I am active" : "I am not active"}</div>
      <button onClick={handleClick}>Toggle Active</button>
      <form action="submit">
        <label htmlFor="email">email:</label>
        <input
          value={userEmail}
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
        />
      </form>
    </>
  );
}

export default ShowActive;
