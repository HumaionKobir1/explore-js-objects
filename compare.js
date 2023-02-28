const first = {a: 5, b: 8, c: 7};
const second = {a: 5, c: 6, d: 3};
const fristString = JSON.stringify(first);
const secondString = JSON.stringify(second);

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length) {
        for(const key of firstKeys){
            if (first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    // else{
    //     return false;
    // }
}
const isSame = compareObject(first, second);
console.log(isSame);