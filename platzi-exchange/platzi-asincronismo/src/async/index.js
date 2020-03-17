const doSomethingAsync= ()=>{

      return new Promise((resolve, reject)=>{

        (true)
        ? setTimeout(()=> resolve ('Algo para  devolver'), 5000)
        : reject (new Error('test  de error '))
      })


}


const algo = async ()=>{

    const cosa = await doSomethingAsync()

    console.log(cosa)

}


console.log('antes')
algo()
console.log('despues')


const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  console.log('Before 1');
  await anotherFunction();
  console.log('After 1');
})()
