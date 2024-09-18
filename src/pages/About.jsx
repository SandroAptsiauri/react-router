import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About Harry Potter</h1>
      <p>
        Harry Potter is a fictional character and the titular protagonist in
        J.K. Rowling's series of novels. He is a young wizard who embarks on a
        journey to defeat the dark wizard Lord Voldemort.
      </p>
      <li>
        <Link to="/1">Fact 1</Link>
      </li>
      <li>
        <Link to="/2">Fact 2</Link>
      </li>
      <li>
        <Link to="/3">Fact 3</Link>
      </li>
      <li>
        <Link to="/4">Fact 4</Link>
      </li>
    </div>
  );
}
