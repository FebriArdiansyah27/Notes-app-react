import Input from "./Input";

function NoteHeader({ search, setQuery }) {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-indigo-900 text-white border-b border-solid border-gray-300">
      <h1>Notes App</h1>
      <div class="ml-auto">
        <Input value={search} onChange={setQuery} type="search" id="search_note" name="search_note" placeholder="Find Notes..." />
      </div>
    </div>
  );
}

export default NoteHeader;
