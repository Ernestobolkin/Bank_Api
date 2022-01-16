import { AddUser } from "./components/11.1_express_with-react/addUser";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="https://erto-bank-api-server.herokuapp.com/">
          <AddUser />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
