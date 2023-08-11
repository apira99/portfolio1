<?php
// Connect to the database
$conn = mysqli_connect("localhost", "root", "", "contact_form");
// Check if the connection was successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// Get the data from the form
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$sql = "INSERT INTO contacts (name, email,subject, message) VALUES ('$name', '$email','$subject', '$message')";
// Validate the name field
if (!preg_match("/^[a-zA-Z ]*$/", $_POST['name'])) {
    $errors['name'] = "Please enter a valid name.";
}
// Validate the email field
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = "Please enter a valid email address.";
}
// Validate the subject field
if (!preg_match("/^[a-zA-Z ]*$/", $_POST['subject'])) {
    $errors['subject'] = "Please enter a valid subject.";
}
// Sanitize the message field
$message = htmlspecialchars($_POST['message']);
// Display error messages if any fields failed validation
if (count($errors) > 0) {
    foreach ($errors as $key => $value) {
        echo "<p>" . $value . "</p>";
    }
} else {
    // Send the email
    $to = "your@email.com";
    $subject = $_POST['subject'];
    $message = "Name: " . $_POST['name'] . "\nEmail: " . $_POST['email'] . "\nSubject: " . $_POST['subject'] . "\nMessage: " . $_POST['message'];
    if (mail($to, $subject, $message)) {
        echo "<p>Your email has been sent.</p>";
    } else {
        echo "<p>There was an error sending your email.</p>";
    }
}
// Close the connection
mysqli_close($conn);
?>