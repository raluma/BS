import React, { useState } from "react";
import Card from "../../components/Card";
import Menu from "../../components/Menu";
import { listOfCategories } from "../../services/ArrayList";
import * as rarity from "../../services/ListOfBrawlers";

export default function Match() {
  const [list, setList] = useState(rarity.listOfEpic);

  const changeList = (name) => {
    if (name === "Chromatic") setList(rarity.listOfChromatic);
    else if (name === "Legendary") setList(rarity.listOfLegendary);
    else if (name === "Epic") setList(rarity.listOfEpic);
    else if (name === "SuperRare") setList(rarity.listOfSuperRare);
    else if (name === "Rare") setList(rarity.listOfRare);
    else setList(rarity.listOfTrophies);
  };

  return (
    <div className="Page-Match">
      <Menu
        orientation="H"
        list={listOfCategories}
        cssMenu="border-2 border-gray-900"
        articleClick={(param) => changeList(param)}
      />

      <section>
        <p className="scoreboard">scoreboard</p>
      </section>

      <section className="body">
        {list.map((item, index) => (
          <Card index={index} name={item.name} image={item.image} />
        ))}
      </section>
    </div>
  );
}
