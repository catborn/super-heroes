import React from "react";
import Hero from "./hero";

function Content() {
  return (
    <React.Fragment>
      <div>
        <Hero
          name="Бетмен"
          imgLink="https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
          universe="DC Comics"
          alterego="Брюс Уэйн"
          occupation="борец с преступностью, филантроп, миллиардер"
          friens="Робин, Бэтгерл"
          superpowers="интеллект, обширные познания, знания боевых искусств, ловкость"
          info="По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом. Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций."
        />
        <Hero
          name="Супермен"
          imgLink="https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"
        />
      </div>
    </React.Fragment>
  );
}

export default Content;
