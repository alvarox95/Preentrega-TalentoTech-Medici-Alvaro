function saludar() {
  alert("Hello");
}

async function fetchSelectedPokemon() {
  const gallery = document.getElementById("galeria");
  const selectedPokemon = ["pikachu", "charmander", "bulbasaur", "squirtle"];

  try {
    for (const name of selectedPokemon) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const pokemonData = await response.json();

      const img = document.createElement("img");
      img.src = pokemonData.sprites.front_default;
      img.alt = pokemonData.name;
      img.id = `pokemon-${name}`;
      gallery.appendChild(img);
    }
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
}

fetchSelectedPokemon();
