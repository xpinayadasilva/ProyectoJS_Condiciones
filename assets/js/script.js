//Requerimiento nro. 1
const bordeImagen = document.querySelector(".imagen-logo");

bordeImagen.addEventListener("click", () => {
    if (bordeImagen.style.border == "2px solid red") {
        bordeImagen.style.border = "none";
    } else {
        bordeImagen.style.border = "2px solid red";
    }
})
//Requerimiento nro. 2    
const boton= document.querySelector("#btn-verificar")
boton.addEventListener("click", () => {
    const num1 = document.querySelector("#card-1");
    const num2 = document.querySelector("#card-2");
    const num3 = document.querySelector("#card-3");
   
    const suma = Number(num1.value) + Number(num2.value) + Number(num3.value);
    if (suma > 10) {
        document.querySelector("#txt-verificar").innerHTML = "Llevas demasiados stickers";
    } else {
        document.querySelector("#txt-verificar").innerHTML = `Llevas ${suma} stickers.`;
    }
    
})

    //Requerimiento nro. 3
let passwordcorrecto1 =911
let passwordcorrecto2 =714
const botonpassword= document.querySelector("#btn-ingresar")
botonpassword.addEventListener("click", () => {
    const valor1 = document.getElementById("valor-1").value;
    const valor2 = document.getElementById("valor-2").value;
    const valor3 = document.getElementById("valor-3").value;
    const password = Number(valor1 + valor2 + valor3);

    const mensaje = document.getElementById("txt-password");
    (password === passwordcorrecto1) 
        ? (mensaje.innerHTML = "Password 1 correcto")
        : password === passwordcorrecto2
        ? (mensaje.innerHTML = "Password 2 correcto")
        : (mensaje.innerHTML = "Password Incorrecto!");
})

