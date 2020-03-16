const somethingWillHappen = ()=>{

    return new Promise((resolve, reject) =>{
        if(true){

          resolve ('EST TODO  BIEENNNNN');
        }else{

          reject('OPPS  todo  mallll');
        }
    })

}

function someWillHappen2() {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve('Muy bien');
        }, 3000)
      : reject(new Error('Whoops'));
  });
}




someWillHappen2()
.then(function(response){

    console.log(response)
})
.catch(function(error){

    console.log(error)
});

Promise.all([somethingWillHappen(), someWillHappen2()])
  .then((response) =>console.log(response))
  .catch((error) =>console.log(error));