
<?php

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$numero = $_POST['number'];

echo $nombre;
echo $correo;

echo'hola';

print($nombre);



echo'





<!DOCTYPE html>

<head><meta http-equiv="Content-Type" content="text/html; charset=gb18030">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="css/normalize.css">
    <link rel="stylesheet" href="css/banner.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    
   <script src="js/jquery-3.2.1.js"></script>
    <title>Confirmación</title>
</head>

<body onload="enviarCorreo2()">

<input value='.$nombre.' placeholder='.$nombre.'>

       <h2 id="aviso">
         
       </h2>


<script>



function enviarCorreo2() {



var name = $nombre

var email = $correo

var parametros2 = {
                  "nombre" : name,
                  "correo" : email
                };


  
alert(name)


$.ajax({
                  url: "../confirmacion.php",
                  type: "POST",
                  data: parametros2,
                  
                  success: function(a){
                    alert("hola")
                    console.log(parametros2)
        
              }
            });


 
}

</script>
</body>
</html>

';

