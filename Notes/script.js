const addNoteBtn = document.getElementById("add-note");
const noteInput = document.getElementById("note-input");
const notesContainer = document.getElementById("notes-container");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((note, index) => {
    const noteEl = document.createElement("div");
    noteEl.className = "note";
    noteEl.innerHTML = `
      ${note}
      <button onclick="deleteNote(${index})">🗑️</button>

    `;
    notesContainer.appendChild(noteEl);
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  renderNotes();
}

addNoteBtn.addEventListener("click", () => {
  const noteText = noteInput.value.trim();
  if (noteText !== "") {
    notes.push(noteText);
    noteInput.value = "";
    saveNotes();
    renderNotes();
  }
});

// Initial render
renderNotes();
