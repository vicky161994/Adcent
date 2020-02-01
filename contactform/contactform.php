<?php
 include('dbconnect.php');
 if($_SERVER['REQUEST_METHOD'] != 'POST') {
     return $response = array(
         'status' => 404,
         'message' => 'Only POST method allowed here'
     );
 }
 $requestData = $_POST;
 $name = $requestData['name'];
 $email = $requestData['email'];
 $skypeID = $requestData['skypeId'];
 $subject = $requestData['subject'];
 $message = $requestData['message'];
 try{
     $sql = "INSERT INTO MyGuests (name, email, skypeId, subject, message)
        VALUES ('$name, '$email', '$skypeID','$subject', '$message')";
     return $response = array(
         'status' => 200,
         'message' => 'Thank You! Your details have been submitted sucessfully, We will reach you soon'
     );
 } catch (Exception $e) {
    return $response = array(
         'status' => 500,
         'message' => 'Something went wrong. Please try again'
     );
 }
?>
