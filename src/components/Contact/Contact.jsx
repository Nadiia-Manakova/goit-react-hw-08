import { useDispatch } from "react-redux";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { deleteContact, updateContact } from "../../redux/contacts/operations";

import css from "./Contact.module.css";

export default function Contact({ data }) {
  const { id, name, number } = data;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateContact({ id, data: { name: newName, number: newNumber } }))
      .unwrap()
      .then(() => {
        setIsEditing(false);
      })
      .catch(() => {
        console.log("Ошибка при сохранении контакта");
      });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewName(name);
    setNewNumber(number);
  };

  return (
    <>
      {isEditing ? (
        <div className={css.wrap}>
          <div className={css.contactEditWrap}>
            <input
              type="text"
              value={newName}
              className={css.formField}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input
              type="text"
              value={newNumber}
              className={css.formField}
              onChange={(e) => setNewNumber(e.target.value)}
            />
          </div>
          <div className={css.btnWrap}>
            <button className={css.btn} onClick={handleSave}>
              Save
            </button>
            <button className={css.btnCancel} onClick={handleCancel}>
              <CgClose />
            </button>
          </div>
        </div>
      ) : (
        <div className={css.wrap}>
          <div className={css.contactWrap}>
            <h3>{name}</h3>
            <p>{number}</p>
          </div>
          <div className={css.btnWrap}>
            <button className={css.btn} onClick={handleEdit}>
              <FiEdit2 />
            </button>
            <button className={css.btnDelete} onClick={handleDelete}>
              <AiTwotoneDelete />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
