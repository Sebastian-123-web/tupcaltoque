-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-11-2020 a las 23:32:54
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tupcaltoque`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id_carrito` int(250) NOT NULL,
  `id_producto` int(250) NOT NULL,
  `id_user` varchar(250) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id_carrito`, `id_producto`, `id_user`) VALUES
(24, 8, 'rbanagasta'),
(28, 5, 'fflores'),
(32, 7, 'rbanagasta'),
(37, 5, 'rbanagasta'),
(38, 5, 'rbanagasta'),
(39, 5, 'rbanagasta'),
(40, 8, 'rbanagasta'),
(41, 5, 'rbanagasta'),
(42, 8, 'rbanagasta'),
(44, 8, 'rbanagasta'),
(45, 5, 'rbanagasta'),
(46, 5, 'rbanagasta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(250) NOT NULL,
  `categoria` varchar(1) COLLATE utf8_spanish_ci NOT NULL,
  `cpu` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `ram` int(2) NOT NULL,
  `disco_duro` int(250) NOT NULL,
  `monitor` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `img` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `oferta` text COLLATE utf8_spanish_ci NOT NULL,
  `precio` int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `categoria`, `cpu`, `ram`, `disco_duro`, `monitor`, `img`, `oferta`, `precio`) VALUES
(5, 'G', 'i7 10ma Generacion', 8, 1, 'LG 24\"', 'pc21.jpg', 'si', 2000),
(7, 'N', 'i5 10ma Gen', 8, 1, 'Dell 22\"', '3159a870-3628-4db2-93e6-53c9ab306805_1.e6b3dec3e91a9b23bf92a09d73c3e572.jpeg', 'no', 2000),
(8, 'G', 'i9 10ma Gen', 16, 1, 'Dell 24\"', 'gaming.jpg', 'no', 3500);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_user` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `contraseña` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `tipo_user` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_user`, `contraseña`, `nombre`, `apellido`, `correo`, `tipo_user`) VALUES
('admin', '', 'Gian', 'Lujan', '', 1),
('fflores', '', 'Fernando', 'Flores', 'fflores@hotmail.com', 0),
('rbanagasta', 'RB2020', 'Rodrigo', 'Bañagasta', 'sebastian09_26@hotmail.com', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `id_venta` int(250) NOT NULL,
  `id_carrito` int(250) NOT NULL,
  `fech_hora` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `precio_fin` int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id_carrito`),
  ADD KEY `id_producto` (`id_producto`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_user`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`id_venta`),
  ADD KEY `id_carrito` (`id_carrito`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id_carrito` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `id_venta` int(250) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id_user`) ON UPDATE CASCADE,
  ADD CONSTRAINT `carrito_ibfk_3` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `venta`
--
ALTER TABLE `venta`
  ADD CONSTRAINT `venta_ibfk_1` FOREIGN KEY (`id_carrito`) REFERENCES `carrito` (`id_carrito`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
