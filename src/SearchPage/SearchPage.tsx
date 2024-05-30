import styles from "./SearchPage.module.css";


export function SearchPage() {
	return (

		<div className={styles.container}>
             <div className={styles.list}>
              
                  <a className={styles.mainTopic}>Искать среди пользователей</a>
                  <div className={styles.searchModule}>
                    <div className={styles.searchBorder}>
                        <input className={styles.inputSearch}></input>
                        <button className={styles.closeButton}>
                        <svg width="37" height="41" viewBox="0 0 37 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="36.3716" y1="0.334482" x2="0.371647" y2="40.3345" stroke="black"/>
<line x1="0.367402" y1="0.66086" x2="36.3674" y2="39.6609" stroke="black"/>
</svg>

</button>
</div>
                    
                    <button className={styles.searchButton}> <svg width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47 15C47 22.9782 40.0913 29.5 31.5 29.5C22.9087 29.5 16 22.9782 16 15C16 7.02178 22.9087 0.5 31.5 0.5C40.0913 0.5 47 7.02178 47 15Z" stroke="black"/>
<line x1="19.3221" y1="24.3825" x2="0.322068" y2="40.3825" stroke="black"/>
</svg></button>
                  </div>
            </div>
		</div>
       
	);
}
