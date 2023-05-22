import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
    return ( 
        <div className="home-container">
            <h1 className="home-title">Quieres jugar?</h1>
            <Link to="/numbers" className="grow">
                <h2 className="game-title">numbers</h2>
                <img className="game-image" src={require("../images/calculator.png")} alt="calculator image"></img>
            </Link>
            <Link to="/images">
                <h2 className="game-title">images</h2>
                <img className="game-image" src={require("../images/images.png")} alt="pictures image"></img>
            </Link>
            <Link to="/phrases">
                <h2 className="game-title">phrases</h2>
                <img className="game-image" src={require("../images/question-sign.png")} alt="speech bubble image"></img>
            </Link>
        </div>
     );
}
 
export default Home;