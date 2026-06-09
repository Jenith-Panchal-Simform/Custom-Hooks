import { useState } from "react";
import { useDebounce } from "../hooks/11_useDebounce";

export function Search() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Debounced: {debouncedSearch}</p>
    </div>
  );
}