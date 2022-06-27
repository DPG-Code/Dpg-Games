import './styles/GameDetail.css'

export default function GameDetail(props) {
    return (
        <div className='game-detail'>
            <section className='game-detail-img'>
                <img className='img-detail' src={props.thumbnail} alt={props.title} />
                <div className='container_link-game'>
                    <p className='free'>FREE</p>
                    <a className='link-game' href={props.game_url} target='_blank'>Play Now</a>
                </div>
            </section>
            <aside className='game-detail-info'>
                <h3>{props.title}</h3>
                <p className='description'>{props.short_description}</p>
                <div className="tags">
                    <p className='platform'>{props.platform}</p>
                    <p className='genre'>{props.genre}</p>
                </div>
                <p className='developer'>Developer: {props.developer}</p>
                <p className='publisher'>Publisher: {props.publisher}</p>
                <p className='release_date'>Release Date: {props.release_date}</p>
            </aside>
            <img className='img-detail-back' src={props.thumbnail} alt={props.title} />
        </div>
    )
}