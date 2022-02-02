// 'use strict'
//Объекты

// const MelnikEgor = {
//     first_Name : 'Egor',
//     last_Name: 'Melnik',
//     weight : 67,
//     Is_Male : true,
//     null_Propetry : null,
//     undefind_Property : undefined,
//     address : {
//         country: 'UA',
//         city: 'ZP',
//         stereet: 'nope'
//     },
//     sayHello: function(){
// alert('Дорова');
//     }
// };       // Объект и функция в объекте
//  // создаем объект {} - объектний ритерал]

//  //удаление с объекта
//  delete MelnikEgor.address;
 

//  // проверка для оъектов

//  function greet(MelnikEgor){
//      if(typeof MelnikEgor.first_Name === 'string' && MelnikEgor.first_Name !== '' && typeof MelnikEgor.last_Name === 'string' && MelnikEgor.last_Name !== ''){
//          return 'Hallo ' + MelnikEgor.first_Name + ' ' + MelnikEgor.last_Name
//      }else{
//          return 'sdgfsdg' 
//      }
//  }
 
//  const book = {
    
//     name: 'lort',
//     author: 'Tolkien'
// }




// function Car(marka,model, godWupuska,cwet, rasxodTopliva, objemBaka){
   
// this.drive = function(){
//     return 'мы едем'
// };
// this.marka = marka;
// this.model = model;
// this.godWupuska = godWupuska;
// this. cwet = cwet;
// this.rasxodTopliva = rasxodTopliva;
// this.objemBaka = objemBaka;

// // return this; небезательно писать return ибо всегда возвращает this

// this.getDriveDistant = function(){
//     return this.rasxodTopliva * this.objemBaka;
// }
// }

// const car1 = new Car('Audi','A6', 2015, 'Grey', 8.3, 60);




// let num1 = 5;
// let num2 = 3;

// alert(`${num1} * ${num2} = ${num1 * num2}`);

function TablUmnosh(){
    const Table = {}
  for(let i = 1 ; i <= 10; i++){
      for(let j = 1; j <=10; j++){
    // console.log(b =n * a);
    Table [`${i} * ${j} = `] = j * i;
      }
}
 
return Table;


}