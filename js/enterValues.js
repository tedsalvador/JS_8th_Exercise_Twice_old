import PromptSync from "prompt-sync";

export function enterValues (){
    let anadir_numero = "";
    let pri_NumbOK=0;
    let seg_NumbOK=0;
    let salir_validacion;
//     let arrayAngle = [];
//    let pattern = /[*/+-]/; 
    const prompt = PromptSync();
    let edades=["Padre", "Hijo"];

    console.warn ("First Introduce 2 numbers to calculate (First Age of Father after Age of Son) ");
    console.warn ("============================================================================= ");
    for (let index = 1; index < 3; index++) {
        salir_validacion = "NOK";        
        do{     
            anadir_numero = Number(prompt(index + `.- La Edad del ${edades[index-1]} es = `));
            // numero= `Si es primo el valor de ${edades(index-1)} `;
            if (isNaN(anadir_numero)) 
                {
                console.error("NO TEXTO - Ingrese solo numeros");
                } else 
                     {
                      if (Number(anadir_numero) == false)
                         {
                          console.info("Ingrese solo numeros");
                         } else 
                                {
                                 salir_validacion = "OK";
                                 if (index==1){
                                     pri_NumbOK = anadir_numero;
                                     } else {
                                            seg_NumbOK = anadir_numero;
                                            }    
                                }      
                     }
          }while(salir_validacion != "OK") 

        if (pri_NumbOK<seg_NumbOK)
            {
            console.info("La Edad del Padre " + pri_NumbOK + " no puede ser menor a la Edad del Hijo: " + seg_NumbOK);
            salir_validacion = "NOK";
            index = 0;
        }
    }
    console.info("Los dos valores Ingresados son: " + pri_NumbOK + " y " + seg_NumbOK);
    return [pri_NumbOK, seg_NumbOK];
    }

