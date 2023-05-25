import React from 'react'
import styles from './RecipeCard.module.css'

export default function RecipeCard(props) {
  return (
    <>
      <div className={styles.recipeCardWrapper}>
        <img alt="" src={props?.recipe?.strMealThumb} />
        <div className={styles.contentWrapper}>
          <span className={styles.mealTitle}>{props?.recipe?.strMeal}</span>
        </div>
      </div>
    </>
  )
}
