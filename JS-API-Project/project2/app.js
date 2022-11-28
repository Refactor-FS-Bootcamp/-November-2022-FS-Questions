// let apiUrl = 'https://pokeapi.co/api/v2/pokemon/150'

let container = document.getElementById('pokeContainer')
const count = 150;
//i ned to fecth all the info
// i need to convert json to js object
//i need to use the api for Ui



// const getPokemon =async (n)=>{
    
//     const  response = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
//     const data = await response.json()
//     createPokemon(data)
// }

// const fetchPokeInfo = async()=>{
//     console.log('started')
//     for(let i = 1; i<=count;i++){
      
//       await getPokemon(i)
//     }
// }

// fetchPokeInfo()


// const createPokemon=(poke)=>{
//     const {id,name,sprites,types}=poke
//     const type= types[0].type.name
//     const pokeElm = `
//     <div class='inCont'> 
//     <div class='imgcont'>
//     <img src=${sprites.front_default}  alt='img'>
//     </div class='info'>
//       <span class='number'>${id}</span>
//       <h3 class='name'>${name}</h3>
//       <p class='type'>type:${type}</p>
//           </div>

//     `
//     container.innerHTML+=pokeElm
// }

const showPoke =async (n)=>{
    
    const  response = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
    const data = await response.json()
    createPokemon(data)
}

function numRandom(){
    const rand = Math.ceil(Math.random()*50)
    showPoke(rand)
    console.log(rand)
}




const createPokemon=(poke)=>{
    const {id,name,sprites,types}=poke
    const type= types[0].type.name
    const pokeElm = `
    <div class='inCont'> 
    <div class='imgcont'>
    <img src=${sprites.front_default}  alt='img'>
    </div class='info'>
      <span class='number'>${id}</span>
      <h3 class='name'>${name}</h3>
      <p class='type'>type:${type}</p>
          </div>

    `
    container.innerHTML=pokeElm
}

