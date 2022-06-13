-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 13-06-2022 a las 09:57:35
-- Versión del servidor: 5.7.24
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `school`
--
CREATE DATABASE IF NOT EXISTS `school` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `school`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bulletin`
--

CREATE TABLE `bulletin` (
  `id` int(11) NOT NULL,
  `content` varchar(45) NOT NULL,
  `information` int(11) NOT NULL,
  `lapse` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `extra_info`
--

CREATE TABLE `extra_info` (
  `student` varchar(15) NOT NULL,
  `birth_place` varchar(50) NOT NULL,
  `living_conditions` varchar(300) NOT NULL,
  `representant` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grades`
--

CREATE TABLE `grades` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `grades`
--

INSERT INTO `grades` (`id`, `name`) VALUES
(1, '1er grado'),
(2, '2do grado'),
(3, '3er grado'),
(4, '4to grado'),
(5, '5to grado'),
(6, '6to grado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `information`
--

CREATE TABLE `information` (
  `id` int(11) NOT NULL,
  `ci` varchar(15) NOT NULL,
  `section` int(11) NOT NULL,
  `period` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `period`
--

CREATE TABLE `period` (
  `id` int(11) NOT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `period`
--

INSERT INTO `period` (`id`, `start`, `end`) VALUES
(1, '2021-09-19', '2022-06-30'),
(2, '2022-09-19', '2023-06-30'),
(3, '2023-09-19', '2024-06-30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `representant`
--

CREATE TABLE `representant` (
  `ci` varchar(15) NOT NULL,
  `name` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `section`
--

CREATE TABLE `section` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `section`
--

INSERT INTO `section` (`id`, `name`) VALUES
(1, 'Primer grado A'),
(2, 'Primer grado B'),
(3, 'Primer grado C'),
(4, 'Segundo grado A'),
(5, 'Segundo grado B'),
(6, 'Segundo grado C'),
(7, 'Tercer grado A'),
(8, 'Tercer grado B'),
(9, 'Tercer grado C'),
(10, 'Cuarto grado A'),
(11, 'Cuarto grado B'),
(12, 'Cuarto grado C'),
(13, 'Quinto grado A'),
(14, 'Quinto grado B'),
(15, 'Quinto grado C'),
(16, 'Sexto grado A'),
(17, 'Sexto grado B'),
(18, 'Sexto grado C');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `ci` varchar(15) NOT NULL,
  `username` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `address` text NOT NULL,
  `personal_phone` varchar(11) NOT NULL,
  `local_phone` varchar(11) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `gender` varchar(10) NOT NULL,
  `group` varchar(20) NOT NULL,
  `admission_date` date NOT NULL,
  `egress_date` date DEFAULT NULL,
  `active` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bulletin`
--
ALTER TABLE `bulletin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_bulletin_information1_idx` (`information`);

--
-- Indices de la tabla `extra_info`
--
ALTER TABLE `extra_info`
  ADD KEY `fk_information_representant_idx` (`representant`),
  ADD KEY `fk_information_users1_idx` (`student`) USING BTREE;

--
-- Indices de la tabla `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_information_users_idx` (`ci`),
  ADD KEY `fk_information_section1_idx` (`section`),
  ADD KEY `fk_information_period1_idx` (`period`);

--
-- Indices de la tabla `period`
--
ALTER TABLE `period`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `representant`
--
ALTER TABLE `representant`
  ADD PRIMARY KEY (`ci`);

--
-- Indices de la tabla `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ci`),
  ADD UNIQUE KEY `ci_UNIQUE` (`ci`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bulletin`
--
ALTER TABLE `bulletin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `grades`
--
ALTER TABLE `grades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `information`
--
ALTER TABLE `information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `period`
--
ALTER TABLE `period`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `section`
--
ALTER TABLE `section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bulletin`
--
ALTER TABLE `bulletin`
  ADD CONSTRAINT `fk_bulletin_information1` FOREIGN KEY (`information`) REFERENCES `information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `extra_info`
--
ALTER TABLE `extra_info`
  ADD CONSTRAINT `fk_information_representant` FOREIGN KEY (`representant`) REFERENCES `representant` (`ci`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_information_users1` FOREIGN KEY (`student`) REFERENCES `users` (`ci`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `information`
--
ALTER TABLE `information`
  ADD CONSTRAINT `fk_information_period1` FOREIGN KEY (`period`) REFERENCES `period` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_information_section1` FOREIGN KEY (`section`) REFERENCES `section` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_information_users` FOREIGN KEY (`ci`) REFERENCES `users` (`ci`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
