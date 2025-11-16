import React from "react";
import NoteCard from "./NoteCard";


export default function NotesGrid({ notes, onEdit, onDelete }) {
return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
{notes.length === 0 ? (
<div className="col-span-full text-gray-500">No notes found</div>
) : (
notes.map((n) => (
<NoteCard
key={n.id}
note={n}
onEdit={onEdit}
onDelete={onDelete}
/>
))
)}
</div>
);
}