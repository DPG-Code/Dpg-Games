import { Link } from 'wouter'
import god from '../img/god.webp'
import back from '../img/background.webp'

export default function HomeContent(){
    return(
        <section className="inicio">
          <aside>
            <h1>FreeGames</h1>
            <p>Game list for browser and pc</p>
            <div className="links">
              <Link className="filters" to='/games'>SEARCH BY FILTERS</Link>
              <Link className="all-games_movile" to='/allgames'>All Games</Link>
            </div>
          </aside>
          <img className="img-inicio" src={god} alt="god-of-war" />
          <img className="img-inicio-back" src={back} alt="god-of-war" />
        </section>
    )
}