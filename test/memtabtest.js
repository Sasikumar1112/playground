class Test {
    constructor(name){
        this.name = name;
    }
}

const globalTest = new Test("globaltest");
const globalString = "globalString";
{
    const innerTest = new Test("innerTest");
    const innerString = "innerString";
    debugger
    console.log(innerTest.name);
    console.log(innerString);
}

const map = new WeakMap();
let i =0;
setInterval(()=>{
    const obj = {i};
    map.set(obj, `Index ${i}`)
    i++;
},1)