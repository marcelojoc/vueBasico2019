const fetchData = require('../promises/utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api)=>{
    try{

        const data = await fetchData(url_api);
        const character = await fetchData(`${url_api}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url)

        console.log(data);
        console.log(character);
        console.log(origin);

    }catch(err){

      console.error(error)

    }


}


console.log('antes')
anotherFunction(API);
console.log('Despues')