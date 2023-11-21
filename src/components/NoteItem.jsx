import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ id, title, body, createdAt, archived, action }) {
  const onDeleteNote = (item) => action((notes) => notes.filter((note) => note.id !== item));

  const onArchiveNote = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      })
    );
  };

  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} archived={archived} action={action} />

      <NoteItemAction onDeleteNote={onDeleteNote} onArchiveNote={onArchiveNote} id={id} archived={archived} />
    </div>
  );
}

export default NoteItem;
