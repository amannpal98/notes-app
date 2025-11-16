import React from "react";
import { FiSearch, FiPlus } from "react-icons/fi";


export default function Navbar({ search, setSearch, onAdd }) {
return (
<div className="flex items-center justify-between py-4 px-6 bg-white border-b">
{/* Search */}
<div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-80">
<FiSearch className="text-gray-500 mr-2" />
<input
value={search}
onChange={(e) => setSearch(e.target.value)}
placeholder="Search notes..."
className="bg-transparent outline-none text-sm w-full"
/>
</div>


{/* Add Note */}
<button
onClick={onAdd}
className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
>
<FiPlus /> New Note
</button>
</div>
);
}