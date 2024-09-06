import React from "react";
import Hero from "./hero";

function Content() {
  return (
    <React.Fragment>
      <Hero
        name="Бетмен"
        imgLink="https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
      />
      <Hero
        name="Супермен"
        imgLink="https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"
      />
    </React.Fragment>
  );
}

export default Content;
