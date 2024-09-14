import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";

import css from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            // data={contact}
            // name={contact.name}
            // number={contact.number}
            // onClick={() => handleDelete(contact.id)}
            data={contact}
          />
        </li>
      ))}
    </ul>
  );
}
