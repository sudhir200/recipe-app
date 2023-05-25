import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  getAllRecipeCategories,
  getAllRecipesByCategory,
  getMealBySearchTerm,
} from '../../apis/recipe'
import SearchField from '../../components/common/SearchField'
import RecipeCard from '../../components/recipe-app/cards/RecipeCard'
import styles from './Recipe.module.css'

export default function Recipes() {
  const [categories, setCategories] = React.useState([])
  const [selectedCategory, setSelectedCategory] = React.useState('Chicken')
  const [meals, setMeals] = React.useState([])

  useEffect(() => {
    getRecipeCategories()
  }, [])

  useEffect(() => {
    getMealsByCategory();
  }, [selectedCategory])

  const getRecipeCategories = () => {
    getAllRecipeCategories().then((res) => {
      setCategories(res)
    })
  }
  const getMealsByCategory = () => {
    getAllRecipesByCategory(selectedCategory).then((res) => {
      setMeals(res)
    })
  }
  const filterByName = (name) => {
    getMealBySearchTerm(name).then((res) => {
      setMeals(res)
    })
  }
  return (
    <>
      <SearchField
        onSearchInitiate={(searchTerm) => {
          filterByName(searchTerm)
        }}
      />
      <div className={styles.categoriesWrapper}>
        {categories?.length > 0 &&
          categories?.map((category) => (
            <div
              style={{
                cursor: 'pointer',
                background:
                  selectedCategory === category.strCategory
                    ? 'var(--chip-color)'
                    : '',
                color:
                  selectedCategory === category.strCategory
                    ? 'white'
                    : 'var(--chip-color)',
              }}
              onClick={() => {
                setSelectedCategory(category.strCategory)
              }}
              className={styles.categoryItem}
              key={category.idCategory}
            >
              {category?.strCategory}
            </div>
          ))}
      </div>
      <div className={styles.recipeCardsWrapper}>
        {meals?.map((recipe) => (
          <Link
            to={`/recipe/${recipe.idMeal}`}
            className={styles.recipeCardWrapper}
            key={recipe.idMeal}
          >
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </>
  )
}
