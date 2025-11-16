export const KEY = "notes-app-data";


export const loadNotes = () => {
try {
const saved = localStorage.getItem(KEY);
return saved ? JSON.parse(saved) : null;
} catch (e) {
return null;
}
};


export const saveNotes = (notes) => {
localStorage.setItem(KEY, JSON.stringify(notes));
};