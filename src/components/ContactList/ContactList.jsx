import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";

import css from "./ContactList.module.css";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};
