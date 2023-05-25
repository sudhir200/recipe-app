import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Gallery from './pages/Gallery/Gallery'
import Home from './pages/Home/Home'
import Header from './components/header/Header'
import StudentForm from './pages/StudentForm/StudentForm'
import Recipes from './pages/RecipeApp/Recipes'
import RecipeDetail from './pages/RecipeApp/RecipeDetail'

export default function App() {
  return (
    <>
      <Header />
      <div style={{ padding: 10 }}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/gallery'} element={<Gallery />} />
          <Route path={'/student-form'} element={<StudentForm />} />
          <Route path={'/recipes'} element={<Recipes />} />
          <Route path={'/recipe/:id'} element={<RecipeDetail />} />
        </Routes>
      </div>
    </>
  )
}
