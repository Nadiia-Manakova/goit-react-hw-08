import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filter.status;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
