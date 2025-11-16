import React from "react";
import dayjs from "dayjs";


export default function NoteCard({ note, onEdit, onDelete }) {
return (
<div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer border">
<span className={`tag tag-${note.category}`}>{note.category}</span>


<h3 className="font-semibold text-lg mt-2">{note.title}</h3>


<p className="text-gray-600 text-sm mt-1 line-clamp-3">{note.description}</p>


<div className="text-xs text-gray-400 mt-3">
{dayjs(note.timestamp).format("MMM DD, YYYY — hh:mm A")}
</div>


<div className="mt-3 flex gap-3 text-sm">
<button onClick={() => onEdit(note)} className="text-blue-600">Edit</button>
<button onClick={() => onDelete(note)} className="text-red-600">Delete</button>
</div>
</div>
);
}