const btnAll = document.querySelector('.btnAll')
const btnMonster = document.querySelector('.btnMonster')
const btnTrapCards = document.querySelector('.trapcards')
const btnSpellCards = document.querySelector('.spellcards')



const getCards=  async() => {
    const dataYugi = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=01/01/2000&enddate=08/23/2002&dateregion=tcg_date');
 const json = await dataYugi.json();
 const cards = json.data;
  mapCards(cards);
  console.log(json)
    
  }



   const mapCards = (cards) => {
    const mappedCards = cards.map((card) => ({
      name: card.name,
      image: card.card_images[0].image_url,
      race: card.race,
      level:card.level,
      type:card.type,
      atk:card.atk,
      def:card.def,
    }));
 
    printCards(mappedCards);
};


const printCards = (cards) => {
    const container = document.querySelector('#gallery');
    container.innerHTML += ``;
    for (const card of cards) {
        const figure = document.createElement("figure");
        figure.innerHTML = `
        
        <img src=${card.image} alt=${card.name}/>`

        container.appendChild(figure);
    }
}



btnAll.addEventListener("click", (ev) => {
   
    getCards();
  });


// Monsters







const getMonsterCards= async() => {
    const dataYugi = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=01/01/2000&enddate=08/23/2002&dateregion=tcg_date');
 const json = await dataYugi.json();
 const cards = json.data;
 
const filteredMonster = cards.filter((monster)=>
monster.type === "Normal Monster");
  mapCardsMonsters(filteredMonster);
  
    
  }



   const mapCardsMonsters = (filteredMonster) => {
    const mappedCards = filteredMonster.map((card) => ({
      name: card.name,
      image: card.card_images[0].image_url,
      race: card.race,
      level:card.level,
      type:card.type,
      atk:card.atk,
      def:card.def,
    }));
 
    printCardsMonsters(mappedCards);
};


const printCardsMonsters = (mappedCards) => {
    const container = document.querySelector('#monsters');
    container.innerHTML += ``;
    for (const card of mappedCards) {
        const figure = document.createElement("figure");
        figure.innerHTML = `
        
        <img src=${card.image} alt=${card.name}/>`

        container.appendChild(figure);
    }
}



btnMonster.addEventListener("click", () => {
   
    getMonsterCards();
  });


  ///Trap Cards

  

const getTrapCards= async() => {
    const dataYugi = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=01/01/2000&enddate=08/23/2002&dateregion=tcg_date');
 const json = await dataYugi.json();
 const cards = json.data;
 console.log(json.data)
 
const filteredTrapCards = cards.filter((trap)=>
trap.type === "Trap Card");
  mapCardsTrap(filteredTrapCards);
    
  }

   const mapCardsTrap = (filteredTrapCards) => {
    const mappedCards = filteredTrapCards.map((card) => ({
      name: card.name,
      image: card.card_images[0].image_url,
      race: card.race,
      level:card.level,
      type:card.type,
      atk:card.atk,
      def:card.def,
    }));
 
    printCardsTrap(mappedCards);
};


const printCardsTrap = (mappedCards) => {
    const container = document.querySelector('#trapcards');
    container.innerHTML += ``;
    for (const card of mappedCards) {
        const figure = document.createElement("figure");
        figure.innerHTML = `
        
        <img src=${card.image} alt=${card.name}/>`

        container.appendChild(figure);
    }
}



btnTrapCards.addEventListener("click", () => {
    
    getTrapCards();
  });


  
  ///Trap Cards

  

async function getSpellCards() {
    const dataYugi = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=01/01/2000&enddate=08/23/2002&dateregion=tcg_date')
    const json = await dataYugi.json()
    const cards = json.data

    const filteredSpellCards = cards.filter((spell) => spell.type === "Spell Card")
    mapCardsSpell(filteredSpellCards)

}

   const mapCardsSpell = (filteredSpellCards) => {
    const mappedCards = filteredSpellCards.map((card) => ({
      name: card.name,
      image: card.card_images[0].image_url,
      race: card.race,
      level:card.level,
      type:card.type,
      atk:card.atk,
      def:card.def,
    }));
 
    printCardsTrap(mappedCards);
};


const printSpellTrap = (mappedCards) => {
    const container = document.querySelector('#spellcards');
    container.innerHTML = ``;
    for (const card of mappedCards) {
        const figure = document.createElement("figure");
        figure.innerHTML = `
        
        <img src=${card.image} alt=${card.name}/>`

        container.appendChild(figure);
    }
}

btnSpellCards.addEventListener("click", () => {
    
    getSpellCards();
  });

  

