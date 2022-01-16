import { AddUser } from "./components/11.1_express_with-react/addUser";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
          <AddUser />
      </BrowserRouter>
    </>
  );
}

export default App;
