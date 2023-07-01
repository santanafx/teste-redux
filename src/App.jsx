import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { teste, teste2 } = useSelector(
    (rootReducer) => rootReducer.userReducer
  );

  console.log(teste, teste2);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "ACTION",
      payload: 10,
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
