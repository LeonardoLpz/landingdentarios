$("#enviar").click(function (){
     

          var parametros = {
            "nombre" : $("#nombre").val(),
            "correo" : $("#email").val(),
            "mensaje" : $("#number").val()
          };

          var datos = new FormData($("#forma")[0]);

          console.log(parametros);
          
            $.ajax({
            url: '../mail.php',
            type: 'POST',
            data: datos,
            success: function(resp){
                 $('#forma')[0].reset();
                 console.log(resp);
                 document.getElementById('informativo').style.display='block';
              }
            })
   

    });
