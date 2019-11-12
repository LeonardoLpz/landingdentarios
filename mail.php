<?php

include_once "conexion.php"; 

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$numero = $_POST['number'];

if ($nombre!=''){

	if ($correo!='') {

		if ($numero!='') {


			$agregarCliente='INSERT INTO taller1 (nombre,correo,telefono) VALUES (?,?,?)';
			$nuevoCliente = $conexion_pdo->prepare($agregarCliente);
			$nuevoCliente->execute(array($nombre,$correo,$numero));

			var_dump($nuevoCliente);

		
		}

		else {

	
	}

}

	else {

	
	

}
}

else {

	

}
