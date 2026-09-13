import { useState } from "react";
import useDebounce from "./hooks/debounce";

function App() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 5000);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <p>Search: {search}</p>
      <p>Debounced Search: {debouncedSearch}</p>
    </div>
  );
}

export default App;
