function gameObject() {
  return {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: [
        {
          playerName: 'Alan Anderson',
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        {
          playerName: 'Reggie Evans',
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        {
          playerName: 'Brook Lopez',
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        {
          playerName: 'Mason Plumlee',
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        {
          playerName: 'Jason Terry',
          number: 31,
          shoe: 15, // Fixed the typo here
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      ],
    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],
      players: [
        {
          playerName: 'Jeff Adrien',
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        {
          playerName: 'Bismak Biyombo',
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        {
          playerName: 'DeSagna Diop',
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        {
          playerName: 'Ben Gordon',
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        {
          playerName: 'Brendan Haywood',
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      ],
    },
  };
}

// console.log(gameObject());


// function homeTeamName () {
//   return gameObject()['home']['teamName']
// }

// console.log(homeTeamName())

// let oo = { foo: 42, bar: 83, "key w/ spaces": true };
// console.log(oo["foo"]);
// console.log(oo["bar"]);
// console.log(oo["key w/ spaces"]);

// // console.log(oo.foo);
// // console.log(oo.bar);


// let oo = { foo: 42, bar: 83, baz: 79 };
// for (let key in oo) {
//   let value = oo[key];
//   console.log("key:", key, "value:", value);
// }

//Using built-in functions
// let oo = { foo: 42, bar: 83, baz: 79 };
// console.log( Object.keys(oo));
// console.log( Object.values(oo));
// console.log( Object.entries(oo));


function numPointsScored(playerName) {
  let allData = gameObject()
for (const team in  allData) {
  const footballers =  allData[team].players

  for (const player of footballers) {
    if (player.playerName === playerName) 
    return player.points
  }
}}

const result = numPointsScored('Brendan Haywood')
console.log(result)





function shoeSize(playerName) {
  let allData = gameObject()
for (const team in  allData) {
  const footballers =  allData[team].players

  for (const player of footballers) {
    if (player.playerName === playerName) 
    return player.shoe
  }
}}


const shoeSz = shoeSize('Brendan Haywood')
console.log(shoeSz)


function teamColors (teamName) {
  let allData = gameObject() 
  for (const team in allData) {
     const nameOfTeam = allData[team].teamName

     if (nameOfTeam === teamName) {
      return allData[team].colors

     }
    }
  }
  const colour = teamColors( 'Charlotte Hornets')
console.log(colour)


function teamName () {
  let allData = gameObject()
  const teamNames = []
  for (const name in allData) {
     teamNames.push(allData[name].teamName)
    
}  return teamNames
}

const names = teamName();
console.log(names)


function playerNumbers(teamName) {
  const allData = gameObject();

  for (const team in allData) {
    if (allData[team].teamName === teamName) {
      const players = allData[team].players;
      const numbers = players.map(player => player.number);
      return numbers;
    }
  }
  return null; // Return null if the team is not found
}

const numbers = playerNumbers('Brooklyn Nets');
console.log(numbers);


function playerStats(playerName) {
  let allData = gameObject()
for (const team in  allData) {
  const stats =  allData[team].players

  for (const player of stats) {
    if (player.playerName === playerName) 
    return player
  }
}
}
const stat = playerStats('Alan Anderson')
console.log(stat)



function bigShoeRebounds() {
  let allData = gameObject();
  let maxShoeSize = 0;
  let maxRebounds = 0;

  for (const teamKey in allData) {
    const players = allData[teamKey].players;

    for (const player of players) {
      if (player.shoe > maxShoeSize) {
        maxShoeSize = player.shoe;
        maxRebounds = player.rebounds;
      }
    }
    
  }

  return maxRebounds
} 

const rebounds = bigShoeRebounds();
console.log(rebounds);


