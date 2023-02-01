import { useState, useEffect, useRef } from 'react'
import fallGuys from '../img/Fall-Guys.webp'
import warzone from '../img/warzone.webp'
import fortnite from '../img/Fortnite.webp'
import valorant from '../img/valorant.webp'
import apex from '../img/Apex-Legends.webp'

const imgs = [
  {
    title: 'FALL GUYS',
    description: 'Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms.',
    genre: 'Battle Royale',
    date: '2020-08-04',
    publisher: 'Mediatonic',
    img: fallGuys
  },
  {
    title: 'CALL OF DUTY: WARZONE',
    description: 'A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.',
    genre: 'Shooter',
    date: '2020-03-10',
    publisher: 'Activision',
    img: warzone
  },
  {
    title: 'FORTNITE',
    description: 'A free-to-play, standalone mode of Epic Game\'s Fortnite.',
    genre: 'Shooter',
    date: '2017-09-26',
    publisher: 'Epic Games',
    img: fortnite
  },
  {
    title: 'VALORANT',
    description: 'Test your mettle in Riot Games\' character-based FPS shooter Valorant.',
    genre: 'Shooter',
    date: '2020-06-02',
    publisher: 'Riot Games',
    img: valorant
  },
  {
    title: 'APEX LEGENDS',
    description: 'A free-to-play strategic battle royale game featuring 60-player matches and team-based play.',
    genre: 'Shooter',
    date: '2019-02-04',
    publisher: 'Electronic Arts',
    img: apex
  }
]

export default function HomeContent(){
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null)
  
    function resetTimeout() {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  
    useEffect(() => {
      resetTimeout()
      timeoutRef.current = setTimeout(() =>
        setIndex((prevIndex) =>
          prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
        ), 3500)
      return () => resetTimeout()
    }, [index])

    return(
        <section className="inicio">
            <div className="slideshow">
              <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {
                  imgs.map((game, index) => (
                    <div className="slide" key={index}>
                      <article>
                        <div className='genre-date'><span>{game.genre.toUpperCase()}</span>{game.date}</div>
                        <h1>{game.title}</h1>
                        <h2>{game.description}</h2>
                        <p>Publisher: {game.publisher}</p>
                      </article>
                      <div className="shadow-inicio"></div>
                      <img src={game.img} alt='background img' />
                    </div>
                  ))
                }
            </div>
            <div className="slideshowDots">
              {imgs.map((_, i) => (
                <div
                  key={i}
                  className={`slideshowDot${index === i ? " active" : ""}`}
                  onClick={() => setIndex(i)}
                ></div>
              ))}
            </div>
          </div>
        </section>
    )
}