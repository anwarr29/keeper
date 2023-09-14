import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  const [show, setShow] = useState(false);
  function showFull() {
    setShow(true);
  }
  return (
    <div >
      <form className="create-note">
        <input
          style={{ display: !show ? "none" : "block" }}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onClick={showFull}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={!show ? "1" : "3"}
        />
        <Zoom in={show}>
          <Fab
            style={{ display: !show ? "none" : "block" }}
            onClick={submitNote}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
