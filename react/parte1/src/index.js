import getmo from "./base/impEXP";

 //Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

//const promesa = new Promise(    (resolve, reject ) => {
    //setTimeout( () => {
       //resolve(); 

        //const p1 = getmo(2);
         //console.log(gete); 
       // resolve( p1 ); 

     /*    reject('no se pudo encontrar el heroe');

    }, 2000);
});

promesa.then(   ( heroe) =>  {
    console.log('heroe', heroe)
}) 

.catch( err => console.warn(err) ); */

const p2= ( id ) => {


     return new Promise(    (resolve, reject ) => {
        setTimeout( () => {
    
            const p1 = getmo(2);
            /*  console.log(p1);  */
           /*  resolve( p1 ); */
    
            /* reject('no se pudo encontrar el heroe');   */

            if(p1){

               resolve(p1)
            }else{
                reject('no se pudo encontrar el heroe')    
            }

        }, 200);
    });

}
p2(12).then( heroe => console.log('heroe' , heroe))
.catch( console.warn)