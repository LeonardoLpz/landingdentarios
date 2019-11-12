<?php
$to = $_POST['correo'];
$subject = "Registro Taller";
$name = $_POST['nombre'];

$message = "
<html>

<style>

#boton{
	width: 50%;
    background-color: #26B2C3;
    text-align: center;
    text-decoration-line: none;
    font-family: roboto;
    border-radius: 5px;
    color: #043767;
    border-style: none;
}
</style>

<body>
<h3>Gracias por registrarte ".$name.", si aún no has pagado da click en el siguiente botón!</h3>

<a href='https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=247875916-c2b8e6de-f348-4fba-ba5a-ec22d59dff9c'><input type='button' value='Pagar' style='color: #043767;background-color: #26B2C3;width: 50%;text-align: center;border-radius: 5px;border-style: none;' id='boton'></a>

<img src='http://dentarios.com.mx/img/taller-promo.png' style='margin-top: 80px; width: 80%; height:60%'>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <taller@dentarios.com>' . "\r\n";
$headers .= 'Bcc: deroman890@gmail.com' . "\r\n";

mail($to,$subject,$message,$headers);