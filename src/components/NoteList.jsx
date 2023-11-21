import React from "react";
import NoteItem from "./NoteItem.jsx";

function NoteList({ notes, label, setNotes }) {
  return (
    <>
      <h2>{label}</h2>
      <div className="notes-list">{notes.length === 0 ? <p className="notes-list__empty-message">Nothing To Show</p> : notes.map((note) => <NoteItem action={setNotes} key={note.id} {...note} />)}</div>
    </>
  );
}

export default NoteList;
