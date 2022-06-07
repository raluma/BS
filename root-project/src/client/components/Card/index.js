import React from "react";

export default function Card(params) {
  return (
    <article key={`brawler${params.index}`} className="card">
      <img src={params.image} alt={params.name} className='image-card'/>
      <p className="foot-card">{params.name}</p>
    </article>
  );
}
