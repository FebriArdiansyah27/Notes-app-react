const Input = (attributes) => {
  const changeHandler = (event) => {
    if (attributes.name === "title") {
      const currentText = event.target.value;
      attributes.onChange((oldText) => (currentText.length <= 50 ? currentText : oldText));
    } else {
      attributes.onChange(event.target.value);
    }
  };

  return (
    <>
      {attributes.type === "textarea" ? (
        <textarea {...attributes} className="note-input__body" value={attributes.value} spellCheck={false} onChange={changeHandler} />
      ) : (
        <input {...attributes} className="note-input__title" value={attributes.value} spellCheck={false} onChange={changeHandler} />
      )}
    </>
  );
};

export default Input;
