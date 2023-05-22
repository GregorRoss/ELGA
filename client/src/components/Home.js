import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
    return ( 
        <div className="home-container">
            <h1 className="home-title">quieres jugar un juego?</h1>
            <h2 className="home-title-EN">do you want to play a game?</h2>
            <div className="games-container">
                <Link to="/numbers" className="grow game-card">
                    <h2 className="game-title">numbers</h2>
                    <img className="game-image" src={require("../images/calculator.png")} alt="calculator image"></img>
                </Link>
                <Link to="/images" className="grow game-card">
                    <h2 className="game-title">images</h2>
                    <img className="game-image" src={require("../images/images.png")} alt="pictures image"></img>
                </Link>
                <Link to="/phrases" className="grow game-card">
                    <h2 className="game-title">phrases</h2>
                    <img className="game-image" src={require("../images/question-sign.png")} alt="speech bubble image"></img>
                </Link>
            </div>
        </div>
     );
}
 
export default Home;