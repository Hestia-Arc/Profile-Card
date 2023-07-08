import "./styles.css";
import photo from "./images/photo.jpg";

export default function App() {
  return (
    <div className="App">
      {/* Photo */}
      <img src={photo} alt="dev photo" className="img" />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <div className="skills">
        <Skills skill="HTML - CSS" bg="seagreen" />
        <Skills skill="Web Design" bg="orange" />
        <Skills skill="Javascript" bg="teal" />
        <Skills skill="Git and GitHub" bg="coral" />
        <Skills skill="Reactjs" bg="silver" />
        <Skills skill="RWD" bg="beige" />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h1> Afolabi Esther </h1>
      <div>
        Frontend web developer at Huygensoft Limited and an avid learner. Loves
        video games and puzzles.
      </div>
    </div>
  );
}

function Skills(props) {
  return (
    <>
      <span className="skill-item" style={{ background: props.bg }}>
        {" "}
        {props.skill}{" "}
      </span>
    </>
  );
}
