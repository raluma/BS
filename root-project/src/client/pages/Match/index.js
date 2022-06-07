import React, { useState } from "react";
import Card from "../../components/Card";
import Menu from "../../components/Menu";
import { listOfCategories } from "../../../server/services/ArrayList";
import * as rarity from "../../../server/services/ListOfBrawlers";

export default function Match() {
  const [list, setList] = useState({rarity: "Epic", array: rarity.listOfEpic});

  const changeList = (name) => {
    if (name === "Chromatic") setList({rarity: name, array: rarity.listOfChromatic});
    else if (name === "Mythic") setList({rarity: name, array: rarity.listOfMythic});
    else if (name === "Legendary") setList({rarity: name, array: rarity.listOfLegendary});
    else if (name === "Epic") setList({rarity: name, array: rarity.listOfEpic});
    else if (name === "SuperRare") setList({rarity: name, array: rarity.listOfSuperRare});
    else if (name === "Rare") setList({rarity: name, array: rarity.listOfRare});
    else setList({rarity: name, array: rarity.listOfTrophies});
  };

  return (
    <div className="Page-Match">
      <Menu
        orientation="H"
        list={listOfCategories}
        cssMenu="border-2 border-gray-900"
        articleClick={(param) => changeList(param)}
      />

      <section key="score">
        <p className="scoreboard">scoreboard</p>
      </section>

      <section key='body' className="body">
        {list.array.map((item, index) => (
          <Card index={index} name={item.name} rarity={list.rarity} />
        ))}
      </section>
    </div>
  );
}
