function pares(num){
    let pares=[];

    for(let i=0; i<num.length; i++){
        if (num[i]%2===0){
            pares.push(num[i]);
        }
    }
return pares;
}

let ArregloNum=[1,2,3,4,5,6,7,8];
let ArregloPares= pares(ArregloNum);

console.log(ArregloPares);