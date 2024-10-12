import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./user.css";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/actions/userActions";

export default function User({ user, id }) {
  const dispatch = useDispatch();

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <li className="user">
      <h1 className="group user-name">
        <div className="label">Name:</div>
        <div className="value">{user.name}</div>
      </h1>
      <h2 className="group email">
        <div className="label">Email Id:</div>{" "}
        <div className="value">{user.email}</div>
      </h2>
      <h2 className="group mobile">
        <div className="label">Mobile No:</div>{" "}
        <div className="value">{user.mobile}</div>
      </h2>
      <h2 className="group address">
        <div className="label">Address:</div>
        <div className="value">{user.address}</div>
      </h2>
      <Button
        variant="contained"
        onClick={() => handleDeleteUser(id)}
        sx={{ width: "fit-content", alignSelf: "flex-end" }}
      >
        <DeleteIcon />
      </Button>
    </li>
  );
}
