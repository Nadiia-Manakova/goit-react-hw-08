import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

export default function Contact({ data, onDelete }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        <h3>{data.name}</h3>
        <p>{data.number}</p>
      </div>
      <button className={css.btn} onClick={() => handleDelete(data.id)}>
        delete
      </button>
    </>
  );
}
