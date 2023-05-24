import { Link } from "react-router-dom";
import "./Home.css"

const Home = ({setLanguage}) => {

    const handleLanguageSelect = (event) => {
        setLanguage(event.target.value);
    }


    return ( 
        <div className="home-container">

            <h1 className="home-title">quieres jugar un juego?</h1>
            <h2 className="home-title-EN">do you want to play a game?</h2>
            <div className="games-container">
                <Link to="/numbers" className="grow games-card">
                    <h2 className="games-title">numbers</h2>
                    <img className="games-image" src={require("../images/calculator.png")} alt="calculator image"></img>
                </Link>
                <Link to="/images" className="grow games-card">
                    <h2 className="games-title">images</h2>
                    <img className="games-image" src={require("../images/images.png")} alt="pictures image"></img>
                </Link>
                <Link to="/phrases" className="grow games-card">
                    <h2 className="games-title">phrases</h2>
                    <img className="games-image" src={require("../images/question-sign.png")} alt="speech bubble image"></img>
                </Link>
            </div>



        </div>
     );
}
 
export default Home;