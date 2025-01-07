-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2025 at 06:12 PM
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
-- Database: `carservice`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` bigint(20) NOT NULL,
  `date` date DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `technician_id` bigint(20) NOT NULL,
  `vehicle_id` bigint(20) NOT NULL,
  `approved` int(11) DEFAULT NULL,
  `end_time` time(6) DEFAULT NULL,
  `start_time` time(6) DEFAULT NULL,
  `service_id` bigint(20) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `date`, `time`, `technician_id`, `vehicle_id`, `approved`, `end_time`, `start_time`, `service_id`, `user_id`) VALUES
(1, '2023-08-07', NULL, 3, 1, 1, '11:00:00.000000', '08:00:00.000000', 3, 2),
(2, '2023-08-07', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(3, '2023-08-07', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(4, '2023-08-08', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(5, '2023-08-08', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(6, '2023-08-08', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(7, '2023-08-09', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(8, '2023-08-09', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(9, '2023-08-09', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(10, '2023-08-10', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(11, '2023-08-10', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(12, '2023-08-10', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(13, '2023-08-11', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(14, '2023-08-11', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(15, '2023-08-11', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(16, '2023-08-12', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(17, '2023-08-12', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(18, '2023-08-12', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(19, '2023-08-13', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(20, '2023-08-13', NULL, 3, 1, 2, '11:00:00.000000', '08:00:00.000000', 3, 2),
(21, '2023-08-13', NULL, 3, 1, 1, '11:00:00.000000', '08:00:00.000000', 3, 2),
(23, '2024-08-16', NULL, 3, 2, 0, '10:00:00.000000', '09:00:00.000000', 2, 2),
(24, '2023-08-16', NULL, 3, 1, 0, '11:00:00.000000', '08:00:00.000000', 3, 2),
(25, '2024-08-16', NULL, 3, 1, 1, '11:00:00.000000', '08:00:00.000000', 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `appointment_services`
--

CREATE TABLE `appointment_services` (
  `appointment_id` bigint(20) NOT NULL,
  `service_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` enum('ROLE_ADMIN','ROLE_TECHNICIAN','ROLE_USER') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ROLE_ADMIN'),
(3, 'ROLE_TECHNICIAN'),
(2, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) NOT NULL,
  `cost` double DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `category_id` bigint(20) NOT NULL,
  `slots` int(11) DEFAULT NULL,
  `time_period` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `cost`, `description`, `name`, `category_id`, `slots`, `time_period`) VALUES
(2, 900, 'Full body wash with interior clean up', 'BodyWash', 1, 2, 60),
(3, 30000, 'Comprehensive vehicle inspection and maintenance', 'Full Service', 1, 3, 180),
(4, 250000, 'Hybrid battery replacement generally involves swapping out an aging or malfunctioning battery pack with a new one', 'Battery Replacements', 2, 2, 240),
(5, 35000, 'Hybrid cell replacements refer to the process of replacing worn-out or damaged battery cells in hybrid vehicles', 'Cell Replacements', 2, 3, 120),
(6, 15000, 'An oil change involves draining the old engine oil and replacing it with new oil, along with replacing the oil filter', 'Oil Change', 1, 4, 60),
(7, 5000, 'You should change your engine air filter every 15,000 to 30,000 miles, or based on age intervals of 1, 2, or 3 years', 'Air-Filter Change', 1, 3, 60),
(8, 8000, 'An interim service focuses on the fluids that your car needs to run as smoothly as possible', 'Interim Service', 1, 2, 120),
(9, 250000, 'Eco battery replacement refers to the process of replacing batteries with more environmentally friendly options', 'Eco Battery Replace', 2, 2, 180),
(10, 2500, 'A hybrid battery scan involves using specialized diagnostic tools to assess the condition and performance of a hybrid vehicle\'s high voltage (HV) battery.', 'Battery Scanning', 2, 5, 30),
(11, 25000, 'Nano Coating Protects car paint against scratches, bird droppings,acid rain, tar, and other environmental stains. It\'s hydrophobic and easy to clean.', 'Nano Coating', 3, 2, 240),
(12, 150000, 'Full body painting of a car involves applying a new layer of paint to the entire exterior surface of the vehicle.', 'Full Body Paint', 3, 1, 600),
(13, 12000, 'To paint a car panel effectively, you should start with proper panel preparation, which includes removing old paint and rust, fixing holes or dents, and applying a base layer', 'Panel Painting', 3, 2, 240),
(14, 15000, 'Cut and polish for a car is a process designed to refresh the vehicle\'s paintwork. It helps to eliminate microscopic scratches, oxidation, fade marks', 'Cut And Polish', 3, 2, 300),
(15, 15000, 'Dent repair can be a simple and fast process, depending on a few different factors. The size, location, and paint damage all affect how easy it will be to repair a dent', 'Dent Repairs', 4, 3, 120),
(16, 7500, 'Fender benders, even the more minor cases, can cause some serious damage to a vehicle', 'Bumper Repair', 4, 2, 240),
(17, 30000, 'A car tune-up typically involves several key maintenance tasks aimed at improving engine performance and efficiency.', 'Tune-Ups', 5, 3, 120),
(18, 20000, 'Valve adjustments are essential maintenance tasks for combustion engines, as they ensure proper engine performance', 'Valve Adjustments', 5, 3, 60),
(19, 10000, 'Engine rebuilds involve disassembling an engine, inspecting its components, replacing worn parts, and reassembling it to restore functionality', 'Engine Rebuilds', 5, 3, 240);

-- --------------------------------------------------------

--
-- Table structure for table `service_categories`
--

CREATE TABLE `service_categories` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service_categories`
--

INSERT INTO `service_categories` (`id`, `name`) VALUES
(1, 'VehicleServices'),
(2, 'Hybrid Services'),
(3, 'Painting Services'),
(4, 'Accident Repair'),
(5, 'Engine Repair');

-- --------------------------------------------------------

--
-- Table structure for table `service_time_slots`
--

CREATE TABLE `service_time_slots` (
  `service_id` bigint(20) NOT NULL,
  `fixed_time_slot` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service_time_slots`
--

INSERT INTO `service_time_slots` (`service_id`, `fixed_time_slot`) VALUES
(2, '09:00-10:00'),
(2, '12:00-13:00'),
(2, '15:00-16:00'),
(3, '09:00-11:00'),
(3, '11:00-13:00'),
(3, '14:00-16:00'),
(4, '09:00-13:00'),
(4, '13:00-17:00'),
(5, '09:00-11:00'),
(5, '11:00-13:00'),
(5, '14:00-16:00'),
(6, '08:30-09:30'),
(6, '10:30-11:30'),
(6, '12:00-13:00'),
(6, '14:30-15:30'),
(7, '09:30-10:30'),
(7, '10:30-11:30'),
(7, '15:00-16:00'),
(8, '10:30-12:30'),
(8, '14:30-16:30'),
(9, '10:00-12:30'),
(9, '13:30-16:30'),
(10, '08:00-08:30'),
(10, '09:30-10:00'),
(10, '10:30-11:00'),
(10, '12:00-12:30'),
(11, '08:00-12:00'),
(11, '12:00-16:00'),
(12, '08:00-17:00'),
(13, '08:00-12:00'),
(13, '13:00-16:00'),
(14, '08:00-13:00'),
(14, '13:00-17:00'),
(15, '09:00-11:00'),
(15, '11:00-13:00'),
(15, '14:00-16:00'),
(16, '09:00-13:00'),
(16, '13:00-17:00'),
(17, '09:00-11:00'),
(17, '11:00-13:00'),
(17, '14:00-16:00'),
(18, '09:00-10:00'),
(18, '12:00-13:00'),
(18, '15:00-16:00'),
(19, '09:00-13:00'),
(19, '13:00-17:00');

-- --------------------------------------------------------

--
-- Table structure for table `technician`
--

CREATE TABLE `technician` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `technician`
--

INSERT INTO `technician` (`id`, `email`, `name`, `role_id`, `user_id`) VALUES
(3, 'technician@gmail.com', 'technician01', 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(120) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `phone_number`, `username`) VALUES
(1, 'admin01@gmail.com', '$2a$10$OxTYjURuwuWLxNti/AxJj.HhHy2Kw2p4MxQQuWkJIX/v/c6QRawi.', NULL, 'admin01'),
(2, 'user01@gmail.com', '$2a$10$er65QRQBVFTjX9wPlyNs7OK63A7HbSU2VWnzK5Sx8GDGI5px.0h0i', '011234567', 'user01'),
(3, 'technician@gmail.com', '$2a$10$MIqlPxjAQLalCC9EBc4ibOEe759f7FanLES10Du3WE9gIE72ZDZxe', NULL, 'technician01'),
(4, 'admin02@gmail.com', '$2a$10$/fZoroTD1Zh4qf58Jd3/8OYusD2Es9OmvXqJslA/Gcvm9CzpY.lSe', NULL, 'admin02'),
(5, 'user02@gmail.com', '$2a$10$nJPfTQ8vyLe8JIUBXdmf/eabjhx.P4jV.9WdvSgvYtcgTgT5l199q', '011234568', 'user02'),
(6, 'pamitha@gmail.com', '$2a$10$1zWpPByvcTeXGS0Z02w8r.e.UBqYe/TityU4x5B9Q1uy3S5FPbV6K', '0703159274', 'pamitha'),
(7, 'yeran@gmail.com', '$2a$10$qz7FT7k5FZaEset.IFy1bejRUPN/g8DMFX3VIa2TQpMgpPPfZADM.', '0771234567', 'yeran'),
(8, 'yeran1@gmail.com', '$2a$10$QxgRERuoiWZo2dfdG6YA8..pJPOSTBNY4jmlvhTyG4Er3D09au08.', '0771234567', 'yeran1'),
(9, 'yeran2@gmail.com', '$2a$10$TTjPBCAt5pjrYtHxVcXFMuDXHOGZJS2DnJOyQDeWrxrLCZgQ7Id.u', '0771234567', 'yeran2'),
(10, 'yeran3@gmail.com', '$2a$10$k9Wh2iRKv0F2U3VSv1eAKOO9RZKnq6x/YxolzPTxvEQfrz9tCTEIy', '0771234567', 'yeran3'),
(11, 'janani@gmail.com', '$2a$10$9sa9XOfFWDnnl9Hnj6HsPemXnxcKvJMPDR4SA4GdM5QlAvbRv3RFK', '0765080967', 'Janani');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 1),
(5, 2),
(6, 2),
(7, 2),
(8, 2),
(9, 2),
(10, 2),
(11, 2);

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

CREATE TABLE `vehicles` (
  `id` bigint(20) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `license_plate` varchar(255) DEFAULT NULL,
  `make` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `vehicle_no` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vehicles`
--

INSERT INTO `vehicles` (`id`, `color`, `license_plate`, `make`, `model`, `user_id`, `type`, `vehicle_no`) VALUES
(1, NULL, NULL, 'Toyota', 'Corolla', 2, 'Car', 'CBB-7788'),
(2, NULL, NULL, 'Honda', 'VEZEL', 2, 'SUV', 'CAA-5555');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKd4rr45fm3j1ekgg1p42m4lhpr` (`technician_id`),
  ADD KEY `FKalpncq8pxtwld2wmgw4sxct70` (`vehicle_id`),
  ADD KEY `FK5iltr7k9pows18hk8nc101vc1` (`service_id`),
  ADD KEY `FK886ced1atxgvnf1o3oxtj5m4s` (`user_id`);

--
-- Indexes for table `appointment_services`
--
ALTER TABLE `appointment_services`
  ADD PRIMARY KEY (`appointment_id`,`service_id`),
  ADD KEY `FK68fbfnf0iy7uq0tfb5mjmm2hx` (`service_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_ofx66keruapi6vyqpv6f2or37` (`name`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKfffr4emayc2n4uq3yv618d9j0` (`category_id`);

--
-- Indexes for table `service_categories`
--
ALTER TABLE `service_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_time_slots`
--
ALTER TABLE `service_time_slots`
  ADD KEY `FKd4xs6jvkhk8fimq11j4clnd08` (`service_id`);

--
-- Indexes for table `technician`
--
ALTER TABLE `technician`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_jcrt1trgnxmgib6u2p1fpqib2` (`user_id`),
  ADD KEY `FKl1ru85hgy6tja3kogybmm6ns7` (`role_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`);

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKo4u5y92lt2sx8y2dc1bb9sewc` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `service_categories`
--
ALTER TABLE `service_categories`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `technician`
--
ALTER TABLE `technician`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `FK5iltr7k9pows18hk8nc101vc1` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`),
  ADD CONSTRAINT `FK886ced1atxgvnf1o3oxtj5m4s` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKalpncq8pxtwld2wmgw4sxct70` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`),
  ADD CONSTRAINT `FKd4rr45fm3j1ekgg1p42m4lhpr` FOREIGN KEY (`technician_id`) REFERENCES `technician` (`id`);

--
-- Constraints for table `appointment_services`
--
ALTER TABLE `appointment_services`
  ADD CONSTRAINT `FK68fbfnf0iy7uq0tfb5mjmm2hx` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`),
  ADD CONSTRAINT `FK7smp9csy21h26g51aii9gvfn8` FOREIGN KEY (`appointment_id`) REFERENCES `appointments` (`id`);

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `FKfffr4emayc2n4uq3yv618d9j0` FOREIGN KEY (`category_id`) REFERENCES `service_categories` (`id`);

--
-- Constraints for table `service_time_slots`
--
ALTER TABLE `service_time_slots`
  ADD CONSTRAINT `FKd4xs6jvkhk8fimq11j4clnd08` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`);

--
-- Constraints for table `technician`
--
ALTER TABLE `technician`
  ADD CONSTRAINT `FKl1ru85hgy6tja3kogybmm6ns7` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `FKnxerfu3dpwim5li2bcfi3xsnr` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `FKhfh9dx7w3ubf1co1vdev94g3f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD CONSTRAINT `FKo4u5y92lt2sx8y2dc1bb9sewc` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
