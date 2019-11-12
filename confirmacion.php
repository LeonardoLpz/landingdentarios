<?php

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];

print($nombre);

$texto = "Hola  ".$nombre."\n"."Gracias por tu preferencia!!";
            
if(mail($correo,'Confirmacion de compra', $texto))
    {
        echo "se mando";
    }
        

