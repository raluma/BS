import React from "react"; 

export default function Card(params) {
  const image = 
  require(`../../../server/images/brawlers/${params.rarity}/${params.name}.png`)

  return (
    <article key={`${params.index}brawler${params.name}`} className="card">
      <img src={image} alt={params.name} className='image-card'/>
      <p className="foot-card">{params.name}</p>
    </article>
  );
}
