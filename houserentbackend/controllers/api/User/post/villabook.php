<?php
// Define paths to required files
$modelsPath = '../../../../models/post.php';
$headersPath = '../../../../config/header.php';

// Check if required files exist and include them
if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Required files are missing']);
    exit();
}

require_once $modelsPath;
require_once $headersPath;

// Decode the incoming JSON data
$data = json_decode(file_get_contents('php://input'), true);

// Validate JSON data
if ($data === null) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit();
}

// Debugging: Log the incoming data
error_log("Received Data: " . print_r($data, true));

// Extract the data from the decoded JSON (Fixed incorrect variable mappings)
$name = $data['name'] ?? null;
$email = $data['email'] ?? null;
$phone = $data['phone'] ?? null;
$stay_duration = $data['stay_duration'] ?? null; // Fixed typo from 'stay_duaration' to 'stay_duration'
$no_of_guests = $data['no_of_guests'] ?? null;
$payment = $data['payment'] ?? null;
$apartment_name = $data['apartment_name'] ?? null;
$price = $data['price'] ?? null;
$status = $data['status'] ?? null;

// Ensure required fields are present
if (!$stay_duration) {  // Adjusted error message field
    http_response_code(400);
    echo json_encode(['error' => 'Stay duration is required']);
    exit();
}

// Debugging: Log extracted values
error_log("Stay Duration: " . $stay_duration);

// Create an instance of the Post class
$obj = new Post();

// Insert data
$result = $obj->villabook(
    $name, $email, $phone, $stay_duration, $no_of_guests, $payment, $apartment_name, $price, $status
);

// Handle errors
if ($result === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Internal server error']);
    exit();
}

// Send response
echo json_encode($result);
?>
