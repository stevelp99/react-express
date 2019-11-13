import React from "react";
const margin={
    display:"flex",
    flexDirection:"column",
    margin: 50,
    listStyleType:"none",
    borderStyle:"solid",
    width:250,
    padding:10
}
export default function LatestBooksPage(){
    const titles = ["IT","The Shinning","Pet Sematary"];
    const listItems = titles.map((titles) =>
    <li href="/:id">{titles}</li>);

    return (<h2 style={margin}>Latest Books{listItems}</h2>);
}