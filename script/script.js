function calculoNota(){
    

    /*** Entrada de datos ***/

    let NotaWordPress=Number(document.getElementById("WordPress").value);
    let NotaJS=Number(document.getElementById("JS").value);

    /*** Cálculo de nota ***/ /*NotaJS */
    let notaFInal=(75*NotaWordPress+25*NotaJS)/100

    /*** Salida de resultados ***/

    document.getElementById("resultado").innerHTML=
    "La nota final es: "+notaFInal;

    resultado.style.color = "white"
    resultado.style.FontSize = "700px"
    resultado.style.marginLeft = "1175px"


}