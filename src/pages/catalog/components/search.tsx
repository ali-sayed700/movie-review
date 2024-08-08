import { GoSearch } from "react-icons/go";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { saveSearch, getSearch } from "@utils/helper";

const { search } = styles;

interface Isearch {
  setQuery: (val: {}) => void;
}

const Search = ({ setQuery }: Isearch) => {
  const searchWord = getSearch();
  const { category } = useParams();
  const [searches, setSearches] = useState<string>(searchWord);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if (!searches) return;
    setQuery({ searches });
    saveSearch(searches);
    // setSearches("");
  };
  return (
    <form className={search} onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setSearches(e.target.value)}
        value={searches}
        placeholder={`Search ${category === "movie" ? "movies" : "tv series"}`}
      />
      <button type="submit">
        <GoSearch />
      </button>
    </form>
  );
};

export default Search;
