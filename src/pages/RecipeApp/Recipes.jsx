import React from 'react'
import RecipeCard from '../../components/recipe-app/cards/RecipeCard'
import styles from './Recipe.module.css'

export default function Recipes() {
  return (
    <div className={styles.recipeCardsWrapper}>
      {[0, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((recipe) => (
        <div>
          <RecipeCard />
        </div>
      ))}
    </div>
  )
}
