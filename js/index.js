function fetchRandomPokemon() {
  const gallery = document.getElementById('galeria');
  const randomIds = [];
  for (let i = 0; i < 4; i++) {
    randomIds.push(Math.floor(Math.random() * 151) + 1);
  }

  randomIds.forEach(id => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(pokemonData => {
        const img = document.createElement('img');
        img.src = pokemonData.sprites.front_default;
        img.alt = pokemonData.name;
        img.id = `pokemon-${pokemonData.name}`;

        gallery.appendChild(img);
      })
      .catch(error => console.error('Error fetching Pokémon data:', error));
  });
}
fetchRandomPokemon();

function capitalizarPrimeraLetra(cadena) {
  return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
}

async function obtenerDescripcionPokedex(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.toLowerCase()}`;
  try {
      const respuesta = await fetch(url);
      if (respuesta.ok) {
          const datos = await respuesta.json();
          const descripcion = datos.flavor_text_entries.find(entry => entry.language.name === 'es');
          return descripcion ? descripcion.flavor_text : "Descripción no disponible.";
      }
  } catch (error) {
      console.error("Error al obtener la descripción de la Pokédex:", error);
  }
  return "Descripción no disponible.";
}

async function createCard() {
  const productos = document.getElementById('productos');

  const randomIds = [];
  for (let i = 0; i < 4; i++) {
      randomIds.push(Math.floor(Math.random() * 151) + 1);
  }

  for (const id of randomIds) {
      try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          if (response.ok) {
              const pokemonData = await response.json();
              const descripcion = await obtenerDescripcionPokedex(pokemonData.name);
              
              const card = document.createElement('div');
              card.classList.add('card');
              card.innerHTML = `
                  <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                  <h2>${capitalizarPrimeraLetra(pokemonData.name)}</h2>
                  <p>${descripcion}</p>
                  <button>Añadir al carrito</button>
              `;

              productos.appendChild(card);
          } else {
              console.error('Error fetching Pokémon data:', response.status);
          }
      } catch (error) {
          console.error('Error fetching Pokémon data:', error);
      }
  }
}
createCard();