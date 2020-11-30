<?php 

if (isset($_POST['submit'])) {

    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "juliantmayes@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have recieved and email from ".$name.".\n\n".$message;

    mail($mailTo, $headers, $txt );
    header("Location: http://178.128.226.51/?sent!");
}

?>
