


function mostrarFormulario(){
    console.log("se mostro el formulario")
    
    document.getElementById("formulario").style.display = "grid"
    document.getElementById("video").pause();
    
   
    
}
function whatsapp(){
  return gtag_report_conversion('https://wa.me/525540947364')
}
function pago(){
  datos()
}
function cerrar(){
  document.getElementById("formulario").style.display = "none"
}
function llamada(){
  location.href = "tel:5540947364"
}

/*function datos(){
    console.log("datos")
    document.getElementById("formulario").style.display = "none" 
    location.href ="https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=247875916-c2b8e6de-f348-4fba-ba5a-ec22d59dff9c"
}*/

//



/////
function datos2(){

  console.log("datos")
  
  nombre = document.getElementById('nombre').value;
  correo = document.getElementById('email').value;
  numero = document.getElementById('tel').value;



  if (nombre!='') {
      if (correo!='') {
          if (numero!='') {

              var parametros = {
                "nombre" : $("#nombre").val(),
                "correo" : $("#email").val(),
                "number" : $("#tel").val()
              };

              console.log(parametros);
        
              $.ajax({
                url: '../mail.php',
                type: 'POST',
                data: parametros,
                cache: false,
                async: true,
                success: function(){
                  $('#forma')[0].reset();
                  document.getElementById("formulario").style.display = "none"
                  return gtag_report_conversion(window.location)
      
            }
          })

          $.ajax({
            type: "POST",
            
            url: "../sendEmail.php",
            data: parametros,
            cache: false,
            async: true,
            success: function(parametros){
              console.log(parametros)
              console.log('se envio el correo')
              alert('registro exitoso, en breve le enviaremos un correo')

          }});





        }
    else{
        alert('faltó el telefono')
    }
      }

else{
    alert('faltó el correo')
    }
  }

else{
      alert('faltó el nombre')
    }

    



}


function datos(){

    console.log("datos")
    
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('email').value;
    numero = document.getElementById('tel').value;



    if (nombre!='') {
        if (correo!='') {
            if (numero!='') {

                var parametros = {
                  "nombre" : $("#nombre").val(),
                  "correo" : $("#email").val(),
                  "number" : $("#tel").val()
                };

                console.log(parametros);
          
                $.ajax({
                  url: '../mail.php',
                  type: 'POST',
                  data: parametros,
                  cache: false,
                  async: true,
                  success: function(){
                    $('#forma')[0].reset();
                    document.getElementById("formulario").style.display = "none"
                    return gtag_report_conversion('https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=125500562-d2cb7f33-8850-452e-a358-fcd7974c281a')
        
              }
            })

                /*$.ajax({
                  type: "POST",
                  
                  url: "../confirmacionEspera.php",
                  data: parametros,
                  cache: false,
                  async: true,
                  success: function(parametros){
                    console.log(parametros)
                    console.log('se envio el correo')

                }});*/
                
                $.ajax({
                  type: "POST",
                  
                  url: "../sendEmail.php",
                  data: parametros,
                  cache: false,
                  async: true,
                  success: function(parametros){
                    console.log(parametros)
                    console.log('se envio el correo')
                    alert('registro exitoso, en breve le enviaremos un correo')

                }});





              }
          else{
              alert('faltó el telefono')
          }
            }

      else{
          alert('faltó el correo')
          }
        }

    else{
            alert('faltó el nombre')
          }

          
   

    
}

