<?php
  $ign = $_POST['ign'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $to = "vLumiWest@gmail.com"
  $subject = "Lumi Inquiry"

  mail[$to, $subject, $message, "From: " . $ign];
  echo "Your message has been sent."
?>
