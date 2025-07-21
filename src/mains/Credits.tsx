import Nav from "../components/Nav";
import "../styles/credits.css"; 

export default function Credits() {
  return (
    <>
      <main>
        <br />
        <h1>Credits</h1>
        <br />
        <p>This website was created by Jess Christine So for CAS CS 392 Web Development class Assignment 1.</p>
        <p>All images are from the owner.</p>
        <p>Fonts are derived from Google Fonts</p>
        <p>
          Fonts used:{" "}
          <a href="https://fonts.google.com/specimen/Space+Mono" target="_blank" rel="noopener noreferrer">
            Space Mono
          </a>{" "}
          from Google Fonts.
        </p>
        <p>
          Fonts used:{" "}
          <a href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" target="_blank" rel="noopener noreferrer">
            Pacifico
          </a>{" "}
          from Google Fonts.
        </p>
      </main>
    </>
  );
}
