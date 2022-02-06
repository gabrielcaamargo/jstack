const apiCall = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve('Sucesso!')
        reject('Erro!')
    },2000)
})

// apiCall.then((resposta)=>{
//     console.log(resposta)
// })

// .catch((erro)=>{
//     console.log(erro)
// })


//A promise will be executed, only when we execute 'resolve' or 'reject', else, the promise result always will be <pending>. And nothing will happen

//When we are executing tasks that COULD be heavy, that COULD get late to end. Then, we use promises

//To get the results from a promise, we use .then and .catch

//We can get a promise result, just getting it into parameters, when we use then/catch, we get parameters to it, then the parameters will receive the promise results

//Catch to treat the promise errors. And the syntax/use is the same as the use of .then

async function run() {    
    try{
        const resposta =  await apiCall;
        console.log(resposta)
    } catch (erro){
        console.log(erro)
    }
}

run()
//When we use 'await', the JS gets the promise stuck into the call stack, until it gets resolved/rejected. It'll only continue the code run, after the promise gets resolved/rejected

//Then, to it all work, we have to get it envolved into a function, an async function, that the syntax is: async function example () {}

//To treat errors and resolves, we have to put it all, into a try/catch. Then try {the success code} catch (parameter that will receive the error result) {the error code}

//The difference using async/await and .then/.catch is: when we use .then/.catch, the code doesn't get stucked until its resolve, but using async/await, it does. So, when the rest of our code needs the promise result to continue, async/await is the way to go. 