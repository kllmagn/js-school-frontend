import SearchBox from "components/inputs/SearchBox";
import styles from "./SearchPage.module.css";
import { useState } from "react";
import { SearchElement } from "./SearchElement/SearchElement";

export function SearchPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showResults, setShowResults] = useState(false);
    const handleSearch = () => {
        setShowResults(true);
    };
	return (
		<div className={styles.container}>
			<div className={styles.list}>
				<span className={styles.mainTopic}>Искать среди пользователей</span>
                <SearchBox
                    query={searchQuery}
                    setQuery={setSearchQuery}
                    onSearch={handleSearch}
                />
                {
                    searchQuery && showResults && <SearchElement/>
                }
			</div>
		</div>
	);
}
