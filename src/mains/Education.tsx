import "../styles/education.css"; 
import postit from "./postit.png";

export default function Education() {
    return (
        <main>
            <br />
            <br />
        <h1 className="educ">Education</h1>
        <div className="postit-wrapper">
            <div className="postit-container">
            <img src={postit} alt="Post-it Note" />
            <div className="text">
                Boston University College of Arts and Sciences<br />
                Bachelor of Arts in Computer Science
            </div>
            </div>

            <div className="postit-container">
            <img src={postit} alt="Post-it Note" />
            <div className="text">
                Boston University College of Communications<br />
                Bachelor of Science in Advertising
            </div>
            </div>

            <div className="postit-container">
            <img src={postit} alt="Post-it Note" />
            <div className="text">
                Assumption College<br />
                High School
            </div>
            </div>
        </div>
        </main>

    );
  }
  