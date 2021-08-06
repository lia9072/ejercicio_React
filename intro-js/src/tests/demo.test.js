


test(' debe ser iguales los string  ' ,  () => {

    const mensaje = 'hola mundo';
    // esta es la prueba 
    const mensaje2 = `hola mundo!`;
    // observar el comportamiento 
    expect( mensaje ).toBe( mensaje2 )// ==== este como decir que son iguales de manera   estricta 
    
})