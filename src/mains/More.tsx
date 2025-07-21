import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/more.css";

import bangka from './bangka.png';
import bingsu from './bingsu.png';
import brownstone from './brownstone.png';
import duck from './duck.png';
import boat from './boat.png';
import blossom from './blossom.png';
import bike from './bike.png';
import train from './trains.png';
export default function More() {
  return (
    <>
      <main> <br /><br />
        <h1>Welcome to my film collection!</h1>


        <div className="photolib">
            <img src={bangka} className="bangka" alt="bangka" />
            <img src={bingsu} className="bingsu" alt="bingsu" />
            <img src={brownstone} className="brownstone" alt="brownstone" />
            <img src={duck} className="duck" alt="duck" />
            <img src={boat} className="boat" alt="boat" />
          <br />
            <img src={blossom} className="blossom" alt="blossom" />
            <img src={bike} className="bike" alt="bike" />
            <img src={train} className="train" alt="train" />
        </div>
      </main>

      <Footer />
    </>
  );
}
