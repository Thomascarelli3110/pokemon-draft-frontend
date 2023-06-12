import pokemonResponse from "../../../utils/pokemonResponse.js";
import getIconByType from "../../../utils/getIconByType.js";

function Card(){
    const root = document.getElementById('root');
    const firstSelection = pokemonResponse.first_selection;
    console.log(firstSelection)

    const data = `
    <div class="container"> 
        ${firstSelection.map((pokemon) => (
            `<div class="card-pokemon">
                <div class="card-header">
                    <h1 class="name">${pokemon.name}</h1>
                </div>
                <div class="card-sprite" >
                    <img src=${pokemon.sprites.front_sprite}>
                </div>
                <div class="card-information"> 
                    <div class="card-types">${pokemon.types.map((type) => (
                        `<img width="15" height="15" style=" border-radius: 50%; padding:3%; background-color: ${getIconByType(type, true)}" src=${getIconByType(type)}> </img>`
                    )).join('')}
                    </div>
                    <div class="card-button-movements">
                        <button type="button">Movements</button>
                    </div>
                </div>
                <div class="card-stats">
                    ${pokemon.stats.map((statMapping) => ( `
                        <span> ${statMapping.stat.name}: ${statMapping.base_stat} </span>
                    `
                    )).join('')}
                </div>
            </div>
            `
        )).join('')}
    </div>`

    root.innerHTML = data
}

export default Card