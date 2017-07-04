<html>
<head>
</head>
<body>


<?php


if(isset($_POST['correo'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias

// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['nombre']) ||
!isset($_POST['correo']) ||
!isset($_POST['asunto']) ||
!isset($_POST['cuerpo'])) {

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}

$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
$email_message .= "Correo electrónico: " . $_POST['correo'] . "\n";
$email_message .=  $_POST['cuerpo'] . "\n";



// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
mail($email_to, $email_subject, $email_message, $headers);
mail('vera.ingenieria@gmail.com',$_POST['asunto'] ,$email_message); 
echo "¡Gracias por contactar!";

}
header('Location: index.html');
?>
</body>

</html>
