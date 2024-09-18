import React from "react";
import { useParams } from "react-router-dom";

const facts = {
  1: "Harry Potter's full name is Harry James Potter.",
  2: "He was born on July 31, 1980.",
  3: "Harry's wand is made of holly wood with a phoenix feather core.",
  4: "Harry became a member of Gryffindor House at Hogwarts.",
};
export default function Fact() {
  const { factId } = useParams();
  const info = facts[factId];
  return (
    <div>{info ? <p>{info}</p> : <p>Fact not found for ID: {factId}</p>}</div>
  );
}
