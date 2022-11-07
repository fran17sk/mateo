import img from '../assets/img/mateo.jpg'
const Header = () => {
    return (
        <header>
            <div><img src={img} className='img rounded-circle'></img></div>
            <div className='title-container'><h1 className='title'>MATEO JULIÁN</h1></div>

        </header>
    )
}
export {Header}