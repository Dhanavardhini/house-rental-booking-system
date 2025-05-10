<?php
include_once '../../../../config/database.php';

class Put
{
    public $conn;
    public $response;

    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }

  

    public function apartbook($id, $name, $email, $phone, $stay_duration, $no_of_guests, $payment, $apartment_name, $price, $status)
    {
        $id = (int)$id;
    
        if (!$this->conn) {
            die(json_encode(["error" => "Database connection error: " . mysqli_connect_error()]));
        }
    
        $checkUserQuery = "SELECT * FROM bookapart WHERE id = ?";
        $checkUserStmt = mysqli_prepare($this->conn, $checkUserQuery);
        if (!$checkUserStmt) {
            die(json_encode(["error" => "Query preparation failed: " . mysqli_error($this->conn)]));
        }
    
        mysqli_stmt_bind_param($checkUserStmt, "i", $id);
        mysqli_stmt_execute($checkUserStmt);
        $checkUserResult = mysqli_stmt_get_result($checkUserStmt);
    
        if (mysqli_num_rows($checkUserResult) == 1) {
            $updateQuery = "UPDATE bookapart SET name = ?, email = ?, phone = ?, stay_duration = ?, no_of_guests = ?, payment = ?, apartment_name = ?, price = ?, status = ? WHERE id = ?";
            $updateStmt = mysqli_prepare($this->conn, $updateQuery);
            if (!$updateStmt) {
                die(json_encode(["error" => "Update query preparation failed: " . mysqli_error($this->conn)]));
            }
    
            error_log("Updating ID: $id, Status: $status"); // Debugging
    
            mysqli_stmt_bind_param(
                $updateStmt,
                "sssssssssi", // Fixed: "status" should be treated as a string
                $name,
                $email,
                $phone,
                $stay_duration,
                $no_of_guests,
                $payment,
                $apartment_name,
                $price,
                $status, // Corrected position for string binding
                $id
            );
    
            if (!mysqli_stmt_execute($updateStmt)) {
                die(json_encode(["error" => "Query failed: " . mysqli_error($this->conn)]));
            }
    
            http_response_code(200);
            return ["message" => "Booking details updated successfully"];
        } else {
            http_response_code(404);
            return ["error" => "Booking not found"];
        }
    }
    
   
    
    public function villabook($id, $name, $email, $phone, $stay_duration, $no_of_guests, $payment, $apartment_name, $price, $status)
    {
        $id = (int)$id;
    
        if (!$this->conn) {
            die(json_encode(["error" => "Database connection error: " . mysqli_connect_error()]));
        }
    
        $checkUserQuery = "SELECT * FROM bookvilla WHERE id = ?";
        $checkUserStmt = mysqli_prepare($this->conn, $checkUserQuery);
        if (!$checkUserStmt) {
            die(json_encode(["error" => "Query preparation failed: " . mysqli_error($this->conn)]));
        }
    
        mysqli_stmt_bind_param($checkUserStmt, "i", $id);
        mysqli_stmt_execute($checkUserStmt);
        $checkUserResult = mysqli_stmt_get_result($checkUserStmt);
    
        if (mysqli_num_rows($checkUserResult) == 1) {
            $updateQuery = "UPDATE bookvilla SET name = ?, email = ?, phone = ?, stay_duration = ?, no_of_guests = ?, payment = ?, apartment_name = ?, price = ?, status = ? WHERE id = ?";
            $updateStmt = mysqli_prepare($this->conn, $updateQuery);
            if (!$updateStmt) {
                die(json_encode(["error" => "Update query preparation failed: " . mysqli_error($this->conn)]));
            }
    
            error_log("Updating ID: $id, Status: $status"); // Debugging
    
            mysqli_stmt_bind_param(
                $updateStmt,
                "sssssssssi", // Fixed: "status" should be treated as a string
                $name,
                $email,
                $phone,
                $stay_duration,
                $no_of_guests,
                $payment,
                $apartment_name,
                $price,
                $status, // Corrected position for string binding
                $id
            );
    
            if (!mysqli_stmt_execute($updateStmt)) {
                die(json_encode(["error" => "Query failed: " . mysqli_error($this->conn)]));
            }
    
            http_response_code(200);
            return ["message" => "Booking details updated successfully"];
        } else {
            http_response_code(404);
            return ["error" => "Booking not found"];
        }
    }




    

    
   





     
}
?>