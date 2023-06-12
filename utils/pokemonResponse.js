const pokemonResponse = {
  first_selection: [
    {
      id: 1,
      name: "Pikachu",
      sprites: {
        back_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        front_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      },
      types: [
        "electric",
      ],
      stats: [
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/"
          }
        },
        {
          base_stat: 55,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/"
          }
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/"
          }
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/"
          }
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/"
          }
        },
        {
          base_stat: 90,
          effort: 2,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/"
          }
        }
      ],
      moves: [
        {
          name: "mega-punch",
          power: 80,
          type: "normal",
          pp: 20
        },
        {
          name: "double-kick",
          power: 100,
          type: "normal",
          pp: 10
        },
        {
          name: "thunder-punch",
          power: 120,
          type: "thunder",
          pp: 5
        },
        {
          name: "quick-attack",
          power: 50,
          type: "normal",
          pp: 20
        }
      ]
    },
    {
      id: 2,
      name: "Charizard",
      sprites: {
        back_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
        front_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
      },
      types: [
        "fire",
        "flying"
      ],
      stats: [
        {
          base_stat: 78,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/"
          }
        },
        {
          base_stat: 84,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/"
          }
        },
        {
          base_stat: 78,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/"
          }
        },
        {
          base_stat: 109,
          effort: 3,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/"
          }
        },
        {
          base_stat: 85,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/"
          }
        },
        {
          base_stat: 100,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/"
          }
        }    
      ],
      moves: [
        {
          name: "flamethrower",
          power: 150,
          type: "fire",
          pp: 5
        },
        {
          name: "fly",
          power: 80,
          type: "flying",
          pp: 10
        },
        {
          name: "fire blast",
          power: 80,
          type: "fire",
          pp: 15
        },
        {
          name: "quick-attack",
          power: 50,
          type: "normal",
          pp: 20
        }
      ]
    },
    {
      id: 3,
      name: "Feraligatr",
      sprites: {
        back_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/160.png",
        front_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png"
      },
      types: [
        "water"
      ],
      stats: [
        {
          base_stat: 85,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/"
          }
        },
        {
          base_stat: 105,
          effort: 2,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/"
          }
        },
        {
          base_stat: 100,
          effort: 1,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/"
          }
        },
        {
          base_stat: 79,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/"
          }
        },
        {
          base_stat: 83,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/"
          }
        },
        {
          base_stat: 78,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/"
          }
        }
      ],
      moves: [
        {
          name: "ice-punch",
          power: 75,
          type: "ice",
          pp: 15
        },
        {
          name: "hydro cannon",
          power: 150,
          type: "water",
          pp: 5
        },
        {
          name: "dragon pulse",
          power: 85,
          type: "dragon",
          pp: 10
        },
        {
          name: "water pulse",
          power: 80,
          type: "water",
          pp: 15
        }
      ]
    },
    {
      id: 4,
      name: "Miltank",
      sprites: {
        back_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/241.png",
        front_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png"
      },
      types: [
        "normal"
      ],
      stats: [
        {
          base_stat: 95,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/"
          }
        },
        {
          base_stat: 80,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/"
          }
        },
        {
          base_stat: 105,
          effort: 2,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/"
          }
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/"
          }
        },
        {
          base_stat: 70,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/"
          }
        },
        {
          base_stat: 100,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/"
          }
        }
      ],
      moves: [
        {
          name: "double-edge",
          power: 120,
          type: "normal",
          pp: 5
        },
        {
          name: "secret power",
          power: 70,
          type: "normal",
          pp: 15
        },
        {
          name: "earthquake",
          power: 100,
          type: "ground",
          pp: 5
        },
        {
          name: "dynamic punch",
          power: 100,
          type: "fighting",
          pp: 5
        }
      ]
    },
    {
      id: 5,
      name: "Salamence",
      sprites: {
        back_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/373.png",
        front_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png"
      },
      types: [
        "dragon",
        "flying"
      ],
      stats: [
        {
          base_stat: 95,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/"
          }
        },
        {
          base_stat: 135,
          effort: 3,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/"
          }
        },
        {
          base_stat: 80,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/"
          }
        },
        {
          base_stat: 110,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/"
          }
        },
        {
          base_stat: 80,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/"
          }
        },
        {
          base_stat: 100,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/"
          }
        }
      ],
      moves: [
        {
          name: "fly",
          power: 80,
          type: "flying",
          pp: 10
        },
        {
          name: "dragon tail",
          power: 60,
          type: "dragon",
          pp: 20
        },
        {
          name: "earthquake",
          power: 100,
          type: "ground",
          pp: 5
        },
        {
          name: "outrage",
          power: 120,
          type: "dragon",
          pp: 5
        }
      ]
    }
  ],
  second_selection: {
    types: [
      {
        pokemon_type: "fire",
        pokemones: [
          {
            id: 6,
            name: "Arcanine",
            sprites: {
              back_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/59.png",
              front_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
            },
            types: [
              "fire"
            ],
            stats: [
              {
                base_stat: 90,
                effort: 0,
                stat: {
                  name: "hp",
                  url: "https://pokeapi.co/api/v2/stat/1/"
                }
              },
              {
                base_stat: 110,
                effort: 2,
                stat: {
                  name: "attack",
                  url: "https://pokeapi.co/api/v2/stat/2/"
                }
              },
              {
                base_stat: 80,
                effort: 0,
                stat: {
                  name: "defense",
                  url: "https://pokeapi.co/api/v2/stat/3/"
                }
              },
              {
                base_stat: 100,
                effort: 0,
                stat: {
                  name: "special-attack",
                  url: "https://pokeapi.co/api/v2/stat/4/"
                }
              },
              {
                base_stat: 80,
                effort: 0,
                stat: {
                  name: "special-defense",
                  url: "https://pokeapi.co/api/v2/stat/5/"
                }
              },
              {
                base_stat: 95,
                effort: 0,
                stat: {
                  name: "speed",
                  url: "https://pokeapi.co/api/v2/stat/6/"
                }
              }
            ],
            moves: [
              {
                name: "take down",
                power: 90,
                type: "normal",
                pp: 10
              },
              {
                name: "flame wheel",
                power: 60,
                type: "fire",
                pp: 25
              },
              {
                name: "flame blitz",
                power: 120,
                type: "fire",
                pp: 5
              },
              {
                name: "crunch",
                power: 80,
                type: "normal",
                pp: 5
              }
            ]
          }
        ]
      },
      {
        pokemon_type: "water",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "ice",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "dragon",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "normal",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "ground",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "grass",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "electric",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "fighting",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "poison",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "flying",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "psychic",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "bug",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "rock",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "ghost",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "dark",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "steel",
        pokemones: [
          {}
        ]
      },
      {
        pokemon_type: "fairy",
        pokemones: [
          {}
        ]
      }
    ]
  }
}

export default pokemonResponse