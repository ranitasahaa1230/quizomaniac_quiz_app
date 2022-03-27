import React from 'react'
import {data} from "./data"
import "./Categories.css"
import { Link } from 'react-router-dom'

export const Categories = () => {
  return (
    <main className="main-quiz">
          <h2 className="categories">Categories</h2>
          <div className="card__flex">
              {data.map((product)=>(
                <div className="card" key={product.id}>
                <img src={product.img} alt="travel" className="card__img"/>
                <h3>{product.category}</h3>
              <div className="desc">{product.description}
              </div>
              <div className="card__desc">
                <div className="desc__span">2 Questions</div>
                <Link to="/quiz"><button className="text">TAKE QUIZ</button></Link>
              </div>
                </div>
              ))}
        </div>
        </main>
  )
}