import styles from "./SearchBox.module.css";

import {ReactComponent as IconSearch} from "icons/search.svg";
import {ReactComponent as IconClose} from "icons/close.svg";

type SearchBoxProps = {
    query: string;
    setQuery: (query: string) => void;
    onSearch: () => void;
	placeholder?: string;
};

const SearchBox = ({ query, setQuery, onSearch, placeholder = "Поиск..." }: SearchBoxProps) => {
	return (
		<div className={styles.searchContainer}>
			<div className={styles.searchInputContainer}>
				<input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
					className={styles.searchInput}
					type="text"
					placeholder={placeholder}
				/>
				{query && <div className={styles.closeButton} onClick={() => {
                    setQuery("");
                }}>{<IconClose/>}</div>}
			</div>
			<div
                onClick={onSearch}
                className={styles.searchButton}
            >{<IconSearch/>}</div>
		</div>
	);
};

export default SearchBox;
