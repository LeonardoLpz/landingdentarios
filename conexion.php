<?php

$link = 'mysql:host=localhost;dbname=insanity_taller1';
$usuario = 'insanity_taller1';
$pass = 'taller1234567890';

try{
	$conexion_pdo = new PDO($link,$usuario,$pass);
	echo 'conectadoo';

} 

catch (PDOException $e){
	print "¡Error!: " . $e->getMessage() . "<br/>";
	die();
}

?>

