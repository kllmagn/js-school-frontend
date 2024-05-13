import React from 'react';
import styles from './codetabs.module.css';

export function CodeTabs() {
  return (
    <ul className={styles.codeTabs}>
        <li className={styles.codeTab} data-editor="html">
          <span className={styles.codeTabName}>
            <span>index.html</span>
          </span>
          {/* <button type="button">
                  <svg aria-hidden="true">
                    <use></use>
                  </svg>
                  <span>
                    <span>Сплит-режим</span>
                  </span>
                </button> */}
        </li>
      </ul>

  );
}
