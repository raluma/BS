import React, { useState } from "react";
import Card from "../../components/Card";
import Menu from "../../components/Menu";
import { listOfCategories } from "../../../server/services/ArrayList";
import * as rarity from "../../../server/services/ListOfBrawlers";

export default function Match() {
  const [list, setList] = useState({
    rarity: "Epic",
    array: rarity.listOfEpic,
  });

  const changeList = (name) => {
    if (name === "C")
      setList({ rarity: "Chromatic", array: rarity.listOfChromatic });
    else if (name === "M")
      setList({ rarity: "Mythic", array: rarity.listOfMythic });
    else if (name === "L")
      setList({ rarity: "Legendary", array: rarity.listOfLegendary });
    else if (name === "E")
      setList({ rarity: "Epic", array: rarity.listOfEpic });
    else if (name === "S")
      setList({ rarity: "SuperRare", array: rarity.listOfSuperRare });
    else if (name === "R")
      setList({ rarity: "Rare", array: rarity.listOfRare });
    else setList({ rarity: "Trophies", array: rarity.listOfTrophies });
  };

  return (
    <div className="Page-Match">

      <section key="score">
        <p className="scoreboard">scoreboard</p>
      </section>

      <div className="container">
        <Menu
          orientation="V"
          list={listOfCategories}
          cssMenu="border-2 border-gray-900 w-[16%] h-[532px]"
          articleClick={(param) => changeList(param)}
        />

        <section key="body" className="body">
          {list.array.map((item, index) => (
            <Card index={index} name={item.name} rarity={list.rarity} />
          ))}
        </section>
      </div>

    </div>
  );
}
