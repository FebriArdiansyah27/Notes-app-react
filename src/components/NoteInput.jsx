import { useState } from "react";
import Input from "./Input";
import { SlNote } from "react-icons/sl";

function NoteInput({ setNotes }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isNoteInputVisible, setIsNoteInputVisible] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    setNotes((notes) => [
      ...notes,
      {
        id: timestamp,
        title: title,
        body: body,
        archived: false,
        createdAt: timestamp,
      },
    ]);

    // Reset input fields after submitting the form
    setTitle("");
    setBody("");

    // Show success notification for a brief period
    setShowSuccessNotification(true);
    setTimeout(() => {
      setShowSuccessNotification(false);
    }, 3000); // Adjust the duration as needed
  };

  return (
    <div className="note-input">
      <button className="mt-10 color-White" onClick={() => setIsNoteInputVisible(!isNoteInputVisible)}>
        Add New Note
      </button>

      {isNoteInputVisible && (
        <>
          <h2>New Notes</h2>
          <form onSubmit={onSubmitEventHandler}>
            <p className="note-input__title__char-limit">Character left: {50 - title.length}</p>
            <Input value={title} onChange={setTitle} id="title" name="title" type="text" placeholder="Input Title..." required />
            <Input value={body} onChange={setBody} id="body" name="body" type="textarea" placeholder="Write your notes here..." required />
            <button type="submit">
              Create <SlNote />
            </button>
          </form>
        </>
      )}

      {showSuccessNotification && <div className="notification">Note added successfully!</div>}
    </div>
  );
}

export default NoteInput;
