import React from 'react';
import styles from './acegutter.module.css';

export function AceGutter() {
  return (
    <div className={`${styles.aceGutter} left: 0px; width: 52px;`} aria-hidden="true">
        <div className={`${styles.aceLayer} ${styles.aceGutterLayer}`}>
            <div className={styles.aceGutterCell}  style={{height: '21px', top: '0px'}}>
                1
                <span className="display: none;"></span>
            </div>
            <div className= {styles.aceGutterCell} style={{height: '21px', top: '21px'}}>
                2
                <span className="display: none;"></span>
            </div>
            <div className= {styles.aceGutterCell} style={{height: '21px', top: '42px'}}>
                3
                <span className="display: none;"></span>
            </div>
        </div>
    </div>

  );
}
