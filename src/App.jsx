import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import NotesGrid from "./components/NotesGrid";
import NoteModal from "./components/NoteModal";
import { loadNotes, saveNotes } from "./utils/storage";
import dayjs from "dayjs";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [active, setActive] = useState("All Notes");
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  // Load notes from localStorage or notes.json
  useEffect(() => {
    const saved = loadNotes();
    if (saved) {
      setNotes(saved);
    } else {
      fetch("/notes.json")
        .then((res) => res.json())
        .then((data) => {
          setNotes(data);
          saveNotes(data);
        });
    }
  }, []);

  // Save notes automatically
  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const filteredNotes = notes
    .filter((n) => {
      if (active !== "All Notes" && n.category !== active) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          n.title.toLowerCase().includes(q) ||
          n.description.toLowerCase().includes(q)
        );
      }
      return true;
    })
    .sort(
      (a, b) => dayjs(b.timestamp).valueOf() - dayjs(a.timestamp).valueOf()
    );

  function openCreate() {
    setEditing(null);
    setModalOpen(true);
  }

  function handleSave(note) {
    if (!editing) {
      setNotes([note, ...notes]);
    } else {
      setNotes(notes.map((n) => (n.id === note.id ? note : n)));
    }
    setModalOpen(false);
  }

  function handleEdit(note) {
    setEditing(note);
    setModalOpen(true);
  }

  function handleDelete(note) {
    if (!confirm("Delete this note?")) return;
    setNotes(notes.filter((n) => n.id !== note.id));
  }

  return (
    <div className="flex">
      <Sidebar active={active} setActive={setActive} />

      <div className="flex-1 flex flex-col">
        <Navbar search={search} setSearch={setSearch} onAdd={openCreate} />

        <NotesGrid
          notes={filteredNotes}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <NoteModal
        isOpen={modalOpen}
        initial={editing}
        onSave={handleSave}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
