import React from 'react'
import { movies } from '../../utils/constants'
import './Main.css'
import { Button } from '../button/Button'

export const Main = () => {
  return (
    <main>
        <section className='movies-conteiner'>
            {movies.map((item)=>(
                <div className='movie-div'>
                    <img className='movie-img' src={item.img} alt="" />

                    <article className='article'>

                    <h3 className='movie-title'>{item.title}</h3>

                    <form className='form'>
                     <Button className="stars"> {item.rating}/5 stars</Button>
                     <Button className="delete">Delete</Button>
                     <Button className="edit">EDIT</Button>
                    </form>

                    </article>

                </div>
                
            ))}
        </section>
    
    </main>
  )
}
