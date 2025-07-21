import Footer from "../components/Footer";
import "../styles/home.css";

import beach from "./beach.jpg";
import woods from "./woods.jpg";
import icecream from "./icecream.png";
import buko from "./buko.png";
import jess from "./jess.jpg";
export default function Home() {
  return (
    <>

   <br />
        <div className="decor">
        <img src={beach} className="decor beach" alt="beach" /> 
        <img src={woods} className="decor woods" alt="woods" />
        <img src={icecream} className="decor icecream" alt="icecream" />
        <img src={buko} className="decor buko" alt="buko" />
        </div>

        <main>
        <div id="page-wrapper">
<br />

          <img src={jess} className="mainimage" alt="Jess" />

          <br />
          <br />
          <p>I'm Jess, and I'm currently an undergraduate student at Boston University pursuing</p>
          <p>a dual degree in Computer Science and Advertising.</p>
          <br />
          <p>
            Originally from the tropical country the Philippines, I grew up surrounded by the
            cooleest blend
          </p>
          <p>
            of tradition and heart - from karaoke nights to coconut trees by the beach. I thrive in
            fast-paced environments
          </p>
          <p>and have a knack for connecting with people, solving problems, and creative work.</p>
        </div>
      </main>

      <Footer />
    </>
  );
}
