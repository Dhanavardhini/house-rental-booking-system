-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3310
-- Generation Time: Feb 16, 2025 at 03:56 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `housebook`
--

-- --------------------------------------------------------

--
-- Table structure for table `apartimg`
--

CREATE TABLE `apartimg` (
  `id` int(200) NOT NULL,
  `title` varchar(250) NOT NULL,
  `description` varchar(250) NOT NULL,
  `price` int(250) NOT NULL,
  `file` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `apartimg`
--

INSERT INTO `apartimg` (`id`, `title`, `description`, `price`, `file`) VALUES
(6, 'Maple Grove Apartments', '✔ 2 Bedrooms & 2 Bathrooms\r\n', 25000, '../upload/67a35420a7481-a1.jpeg'),
(8, 'Silverstone Apartments', 'Luxurious 2BHK Apartment in City Center\r\n', 300000, '../upload/67a765403903e-a2.jpeg'),
(9, 'Maple Grove Apartments', 'Fully Furnished with Modern Interiors', 5000000, '../upload/67a765ce36e49-a3.jpeg'),
(10, 'Riverside Flats', '1, 2, and 3-bedroom apartments', 520000, '../upload/67a76cbf5faf5-a4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `bookapart`
--

CREATE TABLE `bookapart` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `stay_duration` varchar(255) NOT NULL,
  `no_of_guests` varchar(200) NOT NULL,
  `payment` varchar(100) NOT NULL,
  `apartment_name` varchar(100) NOT NULL,
  `price` varchar(200) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookapart`
--

INSERT INTO `bookapart` (`id`, `name`, `email`, `phone`, `stay_duration`, `no_of_guests`, `payment`, `apartment_name`, `price`, `status`) VALUES
(1, 'akshaya', 'akshu@gmail.com', '6380134916', '2', '3', 'cash', 'sapre apartments', '25000', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `bookvilla`
--

CREATE TABLE `bookvilla` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `stay_duration` varchar(100) NOT NULL,
  `no_of_guests` varchar(100) NOT NULL,
  `payment` varchar(100) NOT NULL,
  `apartment_name` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookvilla`
--

INSERT INTO `bookvilla` (`id`, `name`, `email`, `phone`, `stay_duration`, `no_of_guests`, `payment`, `apartment_name`, `price`, `status`) VALUES
(1, 'akshaya', 'akshu@gmail.com', '9159783990', '1', '1', 'cash', 'Serene Haven Villa', '35000', 'approved'),
(2, 'makesh', 'makesh123@gmail.com', '7890654326', '1', '1', 'creditcard', 'Ocean Breeze Villa', '100000', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `username` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `username`, `email`, `password`) VALUES
(1, 'Akshaya', 'akshu@gmail.com', '123456'),
(2, 'kavya', 'kavya@gmail.com', '123456'),
(3, 'dhanam', 'dhanm@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `villaimg`
--

CREATE TABLE `villaimg` (
  `id` int(200) NOT NULL,
  `title` varchar(250) NOT NULL,
  `description` varchar(250) NOT NULL,
  `price` varchar(250) NOT NULL,
  `file` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `villaimg`
--

INSERT INTO `villaimg` (`id`, `title`, `description`, `price`, `file`) VALUES
(5, 'Serene Haven Villa', 'nature-surrounded villa', '35000', '../upload/67a76e86167b5-v1.jpg'),
(6, 'Ocean Breeze Villa', 'countryside villa perfect for a quiet getaway', '100000', '../upload/67a76edece47f-v2.jpg'),
(7, 'Sunset Horizon Villa', 'waterfront villa with modern comforts', '65000', '../upload/67a76f0e4fb21-v3.jpg'),
(8, 'Royal Orchid Villa', 'premium villa with elegant interiors', '450000', '../upload/67a76f3dcfc7a-v4.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apartimg`
--
ALTER TABLE `apartimg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookapart`
--
ALTER TABLE `bookapart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookvilla`
--
ALTER TABLE `bookvilla`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `villaimg`
--
ALTER TABLE `villaimg`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `apartimg`
--
ALTER TABLE `apartimg`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `bookapart`
--
ALTER TABLE `bookapart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `bookvilla`
--
ALTER TABLE `bookvilla`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `villaimg`
--
ALTER TABLE `villaimg`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
