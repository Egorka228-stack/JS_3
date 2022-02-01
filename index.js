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







function Car(marka,model, godWupuska,cwet, rasxodTopliva, objemBaka){
   
this.exat = function(){
    return 'brum brum'
};
this.marka = marka;
this.model = model;
this.godWupuska = godWupuska;
this. cwet = cwet;
this.rasxodTopliva = rasxodTopliva;
this.objemBaka = objemBaka;

// return this; небезательно писать return ибо всегда возвращает this
}

const car1 = new Car('Audi','A6', 2015, 'Grey', 1.7, 87);