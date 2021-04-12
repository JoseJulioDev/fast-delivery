import './styles.css';
import { ReactComponent as MainImg } from './main.svg';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Faça seu pedido <br/> 
                            que entregamos <br/>
                            pra você.
                        </h1>
                        <h3 className="home-subtitle">
                            Escolha o seu pedido e em poucos minutos <br/> 
                            levaremos a você.
                        </h3>
                        <a href="/" className="home-button">
                            FAZER PEDIDO
                        </a>
                    </div>
                    <div className="home-image">
                        <MainImg />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;