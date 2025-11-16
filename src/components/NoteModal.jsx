import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const CATEGORIES = ["Work", "Personal", "Ideas", "Others"];

export default function NoteModal({ isOpen, initial, onSave, onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Work");
  const [timestamp, setTimestamp] = useState(
    dayjs().format("YYYY-MM-DDTHH:mm")
  );

  useEffect(() => {
    if (initial) {
      setTitle(initial.title);
      setDescription(initial.description);
      setCategory(initial.category);
      setTimestamp(dayjs(initial.timestamp).format("YYYY-MM-DDTHH:mm"));
    } else {
      setTitle("");
      setDescription("");
      setCategory("Work");
      setTimestamp(dayjs().format("YYYY-MM-DDTHH:mm"));
    }
  }, [initial]);

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      id: initial?.id || Date.now().toString(),
      title: title.trim() || "Untitled",
      description: description.trim(),
      category,
      timestamp: dayjs(timestamp).toISOString(),
    };

    onSave(payload);
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[90%] max-w-lg p-6 shadow-xl">
        <h2 className="text-lg font-semibold mb-4">
          {initial ? "Edit Note" : "New Note"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Title</label>
            <input
              className="w-full border px-3 py-2 rounded-lg mt-1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Description</label>
            <textarea
              className="w-full border px-3 py-2 rounded-lg mt-1"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-sm text-gray-600">Category</label>
              <select
                className="w-full border px-3 py-2 rounded-lg mt-1"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Date</label>
              <input
                type="datetime-local"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
                className="border px-3 py-2 rounded-lg mt-1"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}