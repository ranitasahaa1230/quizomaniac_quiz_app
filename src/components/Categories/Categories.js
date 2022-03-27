import React from 'react'
import {data} from "./data"
import "./Categories.css"
import { Link } from 'react-router-dom'

export const Categories = () => {
  return (
    <main class="main-quiz">
          <h2 class="categories">Categories</h2>
          <div class="card__flex">
              {data.map((product)=>(
                <div class="card" key={product.id}>
                <img src={product.img} alt="travel" class="card__img"/>
                <h3>{product.category}</h3>
              <div class="desc">{product.description}
              </div>
              <div class="card__desc">
                <div class="desc__span">2 Questions</div>
                <Link to="/quiz"><button class="text">TAKE QUIZ</button></Link>
              </div>
                </div>
              ))}
        </div>
        </main>
  )
}
