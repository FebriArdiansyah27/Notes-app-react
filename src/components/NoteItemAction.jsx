import React, { useState } from "react";
import Notification from "./Notification";
import { BsFillTrashFill } from "react-icons/bs";
import { BiArchiveOut, BiArchiveIn } from "react-icons/bi";

function NoteItemAction({ onDeleteNote, onArchiveNote, id, archived }) {
  const [deleteNotification, setDeleteNotification] = useState(false);
  const [archiveNotification, setArchiveNotification] = useState(false);

  const handleDeleteNote = () => {
    onDeleteNote(id);
    setDeleteNotification(true);
  };

  const handleArchiveNote = () => {
    onArchiveNote(id);
    setArchiveNotification(true);
  };

  return (
    <div className="note-item__action">
      <button id={id} onClick={handleDeleteNote} aria-label="Delete Button">
        <BsFillTrashFill />
      </button>
      <button id={id} onClick={handleArchiveNote} aria-label="Archive Button">
        {archived ? <BiArchiveOut /> : <BiArchiveIn />}
      </button>

      {deleteNotification && <Notification message="Note deleted" onClose={() => setDeleteNotification(false)} />}

      {archiveNotification && <Notification message={`Note ${archived ? "archived" : "unarchived"}`} onClose={() => setArchiveNotification(false)} />}
    </div>
  );
}

export default NoteItemAction;
