import React from 'react';
import styles from './cardlist.module.css';
import { Card } from './Card/Card';
import { useCategoryData } from '../hooks/useCategoryData';

type CardListProps = {
  levelId: number;
};

export function CardList({levelId}: CardListProps) {
  const [data] = useCategoryData(levelId);
  return (
    <div className={styles.container}>
      {data.map((category) => (<Card id={category.id} title={category.title} description={category.description}/>))}
    </div>
  );
}
