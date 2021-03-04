<?php
$to_email = "rockpeter734@gmail.com";
$subject = "Simple Email Test via PHP";
$body = "Hi,nn This is test email send by PHP Script";
$headers = "From: limitless@gmail.com";

 
if (mail($to_email, $subject, $body)) {
    echo "Email successfully sent to $to_email...";
} else {
    echo "Email sending failed...";
}

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
  //Receive the RAW post data.
  $content = trim(file_get_contents("php://input"));

  $decoded = json_decode($content, true);

  //If json_decode failed, the JSON is invalid.
  if(! is_array($decoded)) {

  } else {
    // Send error back to user.
  }
}

?>