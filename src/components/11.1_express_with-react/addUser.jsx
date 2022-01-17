import { useEffect, useState } from "react";
import axios from "axios";

export const AddUser = () => {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const [valueCash, setValueCash] = useState("");
  const [value, setValue] = useState("");

  const changeHandler = (event) => {
    if (event.target.name === "cash") {
      setValueCash(event.target.value);
    }
    if (event.target.name === "credit") {
      setValue(event.target.value);
    }
  };

  const getAllusers = async () => {
    const res = await axios.get("https://erto-bank-api.herokuapp.com/api/users");
    setData(res.data.users);
  };
  
  const addUser = async () => {
    await axios({
      method: "post",
      url: "https://erto-bank-api.herokuapp.com/api/users",
      data: {
        cash: +valueCash,
        credit: +value,
      },
    });
    getAllusers();
    
  };

  useEffect(() => {
    getAllusers();
  }, [isClicked]);

  const renderUsers = () => {
    return (
      <>
        {data.map((user, i) => {
          return (
            <div key={i}>
              <p className={user.id}>id: {user.id}</p>
              <p className="balance">credit: {user.credit}</p>
              <p className="credit">cash: {user.cash}</p>
              <hr />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <button onClick={() => setIsClicked(!isClicked)}>Get Users</button>
      <button onClick={() => addUser()}>Add User</button>
      <input
        name="cash"
        value={valueCash}
        type="number"
        placeholder="cash"
        onChange={(e) => changeHandler(e)}
      />
      <input
        name="credit"
        value={value}
        type="number"
        placeholder="credit"
        onChange={(e) => changeHandler(e)}
      />
      {isClicked && renderUsers()}
    </div>
  );
};
