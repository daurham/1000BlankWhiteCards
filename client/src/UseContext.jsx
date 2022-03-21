import React, { useContext, useState, useMemo, useEffect } from 'react';
import App from './components/App.jsx';
import axios from 'axios';


const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export default function Context() {
  const [positions, getPositions] = useState();
  const [cards, getCards] = useState();

  // useEffect(() => (
  //   axios.get('/positions')
  //     .then((result) => {
  //       const { data } = result;
  //       getPositions(data);
  //     })
  // ), []);



  const dummyCardData = [
    { image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F7%2F73%2FPikachu_artwork_for_Pok%25C3%25A9mon_Red_and_Blue.webp%2F220px-Pikachu_artwork_for_Pok%25C3%25A9mon_Red_and_Blue.webp.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPikachu&tbnid=oJtINsvYudmbrM&vet=12ahUKEwiQrvTo4df2AhWGGjQIHaa4AjYQMygAegUIARCiAg..i&docid=Z-IqOAYBW3wRpM&w=220&h=198&itg=1&q=pikachu&ved=2ahUKEwiQrvTo4df2AhWGGjQIHaa4AjYQMygAegUIARCiAg', rules: 'gimme 5 ponts', date: () => new Date(), points: 100, tags: ['pika',], creator: 'Karke', id: 1 },
    { image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.glistatigenerali.com%2Ffumetti%2Fse-pokemon-go-cambia-anche-il-mercato-immobiliare-dallaltra-parte-del-mondo%2F&psig=AOvVaw3EbFyPI7Oky2cbRX_BKkhi&ust=1647971350640000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDPnOnh1_YCFQAAAAAdAAAAABAI', rules: 'gimme 10009', date: () => new Date(), points: 100, tags: ['pika-pee'], creator: 'Kake', id: 2 },
    { image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbILE5BEyhdo&psig=AOvVaw3EbFyPI7Oky2cbRX_BKkhi&ust=1647971350640000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDPnOnh1_YCFQAAAAAdAAAAABAq', rules: 'Point per bunny', date: () => new Date(), points: 1, tags: ['Hamster', 'Bunny'], creator: 'Jini', id: 3 },
    { image: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fpokemonletsgo.pokemon.com%2Fen-us%2F&psig=AOvVaw3EbFyPI7Oky2cbRX_BKkhi&ust=1647971350640000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDPnOnh1_YCFQAAAAAdAAAAABAO', rules: 'Points if youre a dad', date: () => new Date(), points: 1200, tags: ['dad card'], creator: 'Waylon', id: 9 },
    { image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.polygon.com%2Fpokemon%2F2014%2F8%2F21%2F6051183%2Fpikachu-pokemon-mickey-mouse&psig=AOvVaw3EbFyPI7Oky2cbRX_BKkhi&ust=1647971350640000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDPnOnh1_YCFQAAAAAdAAAAABAk', rules: 'gimme 103 ponts', date: () => new Date(), points: 1300, tags: ['pika'], creator: 'Alvina', id: 4 },
    { image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.glistatigenerali.com%2Ffumetti%2Fse-pokemon-go-cambia-anche-il-mercato-immobiliare-dallaltra-parte-del-mondo%2F&psig=AOvVaw3EbFyPI7Oky2cbRX_BKkhi&ust=1647971350640000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDPnOnh1_YCFQAAAAAdAAAAABAI', rules: 'gimme -1000 ponts', date: () => new Date(), points: 100, tags: ['trap card'], creator: 'Trevor', id: 5 },
    { image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.teenvogue.com%2Fstory%2Fpikachu-breakup-bangs&psig=AOvVaw3EbFyPI7Oky2cbRX_BKkhi&ust=1647971350640000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDPnOnh1_YCFQAAAAAdAAAAABAe', rules: 'gimme -1000 points', date: () => new Date(), points: -1000, tags: ['pika',], creator: 'jake', id: 6 },
    { image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F579205202075540260%2F&psig=AOvVaw3EbFyPI7Oky2cbRX_BKkhi&ust=1647971350640000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDPnOnh1_YCFQAAAAAdAAAAABAZ', rules: 'gimme 0 points', date: () => new Date(), points: 10, tags: ['zero',], creator: 'Karli', id: 7 },
    { image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fscreenrant.com%2Fpokemon-why-pikachu-scared-poke-balls-ash%2F&psig=AOvVaw3EbFyPI7Oky2cbRX_BKkhi&ust=1647971350640000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDPnOnh1_YCFQAAAAAdAAAAABAU', rules: 'gimme 50 points', date: () => new Date(), points: 50, tags: ['test', 'card'], creator: 'kevin', id: 8 },
    { image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vulture.com%2F2019%2F04%2Ftrue-detective-pikachu-is-here-to-haunt-your-dreams.html&psig=AOvVaw3EbFyPI7Oky2cbRX_BKkhi&ust=1647971350640000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDPnOnh1_YCFQAAAAAdAAAAABAw', rules: 'gimme 300*10 points', date: () => new Date(), points: -50, tags: ['test', 'card'], creator: 'ash-Ketchup', id: 10 }
  ];
  const dummyData = {};

  if (!positions && !cards) {
    getCards(() => dummyCardData);
    getPositions(() => dummyData);
  }

  const value = useMemo(() => ({
    positions, getPositions,
  }), [positions]);

  return !positions ? null : (
    <DataContext.Provider value={value}>
      <App />
    </DataContext.Provider>
  );
}

