<?php

$to = 'rockpeter734@gmail.com';
$name = $_POST["name"];
$email= $_POST["email"];
$message= $_POST["message"];
$phone= $_POST["phone"];


$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= "From: " . $email . "\r\n"; // Sender's E-mail
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$message ='<table style="width:100%">
    <tr>
        <td>'.$name.'  '.$phone.'</td>
    </tr>
    <tr><td>Email: '.$email.'</td></tr>
    <tr><td>phone: '.$phone.'</td></tr>
    <tr><td>Text: '.$message.'</td></tr>

</table>';


if (@mail($to, $email, $message, $headers))
{
  echo json_encode([true,'We would get in touch with you shortly']);
}else{
  echo json_encode([false,"Sorry something wrong happened, please, try again!"]);
}

?>
