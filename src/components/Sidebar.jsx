import React from "react";
import { FiHome, FiBriefcase, FiUser, FiBookOpen, FiMoreHorizontal } from "react-icons/fi";


const items = [
{ label: "All Notes", icon: <FiHome /> },
{ label: "Work", icon: <FiBriefcase /> },
{ label: "Personal", icon: <FiUser /> },
{ label: "Ideas", icon: <FiBookOpen /> },
{ label: "Others", icon: <FiMoreHorizontal /> },
];


export default function Sidebar({ active, setActive }) {
return (
<aside className="w-60 bg-white border-r h-screen p-5">
<h1 className="text-xl font-bold mb-6">Notes</h1>


<ul className="space-y-2">
{items.map((item) => (
<li key={item.label}>
<button
onClick={() => setActive(item.label)}
className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition
${active === item.label ? "bg-gray-200 font-semibold" : ""}`}
>
{item.icon}
{item.label}
</button>
</li>
))}
</ul>
</aside>
);
}