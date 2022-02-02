import "./styles.css";
import Hookscomponent from "./Hookscomponent";
import Classcomponent from "./Classcomponent";

export default function App() {
  return (
    <div className="App">
      <h1>Hooks vs Classes</h1>
      <Classcomponent />
      <br />
      <hr />
      <Hookscomponent />
    </div>
  );
}
//component using function
