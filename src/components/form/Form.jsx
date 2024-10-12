import { TextField, Button } from "@mui/material";
import "./form.css";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/actions/userActions";

const initialState = {
  name: "",
  email: "",
  mobile: "",
  address: "",
};

export default function Form() {
  const [user, setUser] = useState(initialState);

  const dispatch = useDispatch();

  const nameInputRef = useRef(null);

  const handleUserInfoChange = ({ target }) => {
    const { name, value } = target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.name && user.email && user.mobile && user.address) {
      dispatch(addUser(user));
      setUser(initialState);
      //   nameInputRef.current.focus();
    }
  };

  return (
    <section className="form-container">
      <h1 className="form-title">Enter User Info</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <TextField
            id="standard-basic"
            variant="standard"
            sx={{ height: "1rem" }}
            autoComplete="off"
            name="name"
            value={user.name}
            onChange={handleUserInfoChange}
            ref={nameInputRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Id:</label>
          <TextField
            id="standard-basic"
            variant="standard"
            sx={{ height: "1rem" }}
            autoComplete="off"
            name="email"
            value={user.email}
            onChange={handleUserInfoChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile No:</label>
          <TextField
            id="standard-basic"
            variant="standard"
            sx={{ height: "1rem" }}
            autoComplete="off"
            name="mobile"
            value={user.mobile}
            onChange={handleUserInfoChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={3}
            autoComplete="off"
            name="address"
            value={user.address}
            onChange={handleUserInfoChange}
          />
        </div>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </section>
  );
}
