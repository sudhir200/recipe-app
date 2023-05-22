import React from 'react'
import styles from './RecipeCard.module.css'

export default function RecipeCard() {
  return (
    <>
      <div className={styles.recipeCardWrapper}>
        <img
          alt=""
          src={`https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg`}
        />
        <div className={styles.contentWrapper}>
          <span className={styles.mealTitle}>Spicy Arrabiata Penne</span>
          <span className={styles.mealSubtitle}>
            Time: <b>15m</b>
          </span>
        </div>
      </div>
    </>
  )
}
