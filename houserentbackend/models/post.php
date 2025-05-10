<?php
include_once '../../../../config/database.php';

class Post
{
    public $conn;
    public $response;
    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }
    public function Register($username,$email,$password)
    {
         $insert = "INSERT INTO register(username,email,password)  VALUES (?,?, ?)";
         $stmt = mysqli_prepare($this->conn, $insert);
 
         if (!$stmt) {
             return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
         }
 
         mysqli_stmt_bind_param($stmt, "sss", $username,$email,$password);
         $result = mysqli_stmt_execute($stmt);
 
         if ($result) {
             return ["message" => "User Register successfully"];
         } else {
             return ["message" => "Product insertion failed"];
         }
    }
   
   
    public function apartbook($name, $email, $phone, $stay_duration, $no_of_guests, $payment, $apartment_name, $price, $status)
    {
        $insert = "INSERT INTO bookapart (name, email, phone, stay_duration, no_of_guests, payment, apartment_name, price, status) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
        $stmt = mysqli_prepare($this->conn, $insert);
    
        if (!$stmt) {
            return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
        }
    
        // Correcting the number of parameters (9 placeholders and 9 values)
        mysqli_stmt_bind_param($stmt, "sssssssss", $name, $email, $phone, $stay_duration, $no_of_guests, $payment, $apartment_name, $price, $status);
    
        $result = mysqli_stmt_execute($stmt);
    
        if ($result) {
            return ["message" => "Plan added successfully"];
        } else {
            return ["message" => "Plan addition failed: " . mysqli_error($this->conn)];
        }
    }
    
    public function villabook($name, $email, $phone, $stay_duration, $no_of_guests, $payment, $apartment_name, $price, $status)
    {
        $insert = "INSERT INTO bookvilla (name, email, phone, stay_duration, no_of_guests, payment, apartment_name, price, status) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
        $stmt = mysqli_prepare($this->conn, $insert);
    
        if (!$stmt) {
            return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
        }
    
        // Correcting the number of parameters (9 placeholders and 9 values)
        mysqli_stmt_bind_param($stmt, "sssssssss", $name, $email, $phone, $stay_duration, $no_of_guests, $payment, $apartment_name, $price, $status);
    
        $result = mysqli_stmt_execute($stmt);
    
        if ($result) {
            return ["message" => "Plan added successfully"];
        } else {
            return ["message" => "Plan addition failed: " . mysqli_error($this->conn)];
        }
    }
    



   
    


    public function apartmentimg($title, $description, $price, $file)
    {
        $advertisementQuery = "INSERT INTO apartimg (title, description, price, file) VALUES (?, ?, ?, ?)";
        $stmtadvertisement = mysqli_prepare($this->conn, $advertisementQuery);
    
        if (!$stmtadvertisement) {
            return "Failed to prepare SQL statement: " . mysqli_error($this->conn);
        }
    
        mysqli_stmt_bind_param($stmtadvertisement, 'ssss', $title, $description, $price, $file);
    
        $advertisementExec = mysqli_stmt_execute($stmtadvertisement);
        mysqli_stmt_close($stmtadvertisement);
    
        if ($advertisementExec) {
            return "Data added successfully";
        } else {
            return "Failed to insert data into database: " . mysqli_error($this->conn);
        }
    }
    
    public function villaimg($title, $description, $price, $file)
    {
        $advertisementQuery = "INSERT INTO villaimg (title, description, price, file) VALUES (?, ?, ?, ?)";
        $stmtadvertisement = mysqli_prepare($this->conn, $advertisementQuery);
    
        if (!$stmtadvertisement) {
            return "Failed to prepare SQL statement: " . mysqli_error($this->conn);
        }
    
        mysqli_stmt_bind_param($stmtadvertisement, 'ssss', $title, $description, $price, $file);
    
        $advertisementExec = mysqli_stmt_execute($stmtadvertisement);
        mysqli_stmt_close($stmtadvertisement);
    
        if ($advertisementExec) {
            return "Data added successfully";
        } else {
            return "Failed to insert data into database: " . mysqli_error($this->conn);
        }
    }
    

    



























 





}
?> 
