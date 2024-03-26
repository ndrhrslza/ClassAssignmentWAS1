<?php
$name = $_POST['name'];
$matricno = $_POST['matricno'];
$newaddress = $_POST['newaddress'];
$homeaddress = $_POST['homeaddress'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$homephone = $_POST['homephone'];

// You can process the form data here as needed

// For demonstration, let's just echo the data back
echo "Name: $name<br>";
echo "Matric No: $matricno<br>";
echo "Current Address: $newaddress<br>";
echo "Home Address: $homeaddress<br>";
echo "Email: $email<br>";
echo "Mobile Phone No: $phone<br>";
echo "Home Phone No (Emergency): $homephone<br>";
?>
