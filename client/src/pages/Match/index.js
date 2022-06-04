import React, { useState } from "react";
import Menu from "../../components/Menu";
import { listOfCategories } from "../../services/ArrayList";
import * as rarity from "../../services/ListOfBrawlers";

export default function Match() {
  const [list, setList] = useState(rarity.listOfEpic);

  const changeList = (name) => {
    if (name === 'chromatic') setList(rarity.listOfChromatic)
    else if (name === 'legendary') setList(rarity.listOfLegendary)
    else if (name === 'epic') setList(rarity.listOfEpic)
    else if (name === 'superRare') setList(rarity.listOfSuperRare)
    else if (name === 'rare') setList(rarity.listOfRare)
    else setList(rarity.listOfTrophies)
  }
  
  return (
    <div className="Page-Match">
      <Menu
        orientation="H"
        list={listOfCategories}
        cssMenu="border-2 border-gray-900"
        articleClick={(param)=>changeList(param)}
      />

      <section>
        {list.map((item, index) => (
          <div key={`brawler${index}`}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
