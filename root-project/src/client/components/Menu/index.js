import React from "react";

export default function Menu(params) {
  return (
    <section
      className={
        params.orientation === "H"
          ? params.cssMenu + " menuH"
          : params.orientation === "V"
          ? params.cssMenu + " menuV"
          : params.cssMenu
      }
      orientation={params.orientation}
      list={params.list}
    >
      {params.list.map((item) => (
        <article
          key={`categorie${item.id}`}
          id={`categorie${item.id}`}
          className={'clickable '+item.css}
          onClick={()=>params.articleClick(item.name)}
        >
          {item.name}
        </article>
      ))}
    </section>
  );
}
