import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useId } from "react";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";
import css from "./SearchBox.module.css";

export const SearchBox = () => {
  const searchFieldId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.formContainer}>
      <label htmlFor={searchFieldId} className={css.formLabel}>
        Find contact by Name
      </label>
      <input
        type="input"
        name="search"
        id={searchFieldId}
        className={css.formField}
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
