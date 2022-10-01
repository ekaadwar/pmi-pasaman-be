-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 23 Sep 2022 pada 02.58
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql6521635`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(3) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `no_hp` varchar(100) NOT NULL,
  `alamat` text DEFAULT NULL,
  `pekerjaan` varchar(100) DEFAULT NULL,
  `umur` int(3) DEFAULT NULL,
  `jenis_kelamin` enum('Pria','Wanita') NOT NULL,
  `gol_darah` varchar(10) DEFAULT NULL,
  `created_at` bigint(20) NOT NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `nama`, `no_hp`, `alamat`, `pekerjaan`, `umur`, `jenis_kelamin`, `gol_darah`, `created_at`, `updated_at`) VALUES
(1, 'user1', '082111111111', 'Jalan Pelita', 'Karyawan Swasta', 26, 'Pria', 'A', 20220911154525, '2022-09-15 12:58:27'),
(2, 'user2', '082111111112', 'Jalan Kegelapan', 'Agen BSAA Cabang Afrika', 28, 'Wanita', 'O', 20220911230857, '2022-09-15 12:58:27'),
(3, 'user3', '082111111113', 'Jalan Kegelapan', 'Agen BSAA Pusat', 31, 'Wanita', 'A', 20220911230910, '2022-09-15 12:58:27'),
(4, 'user4', '082111111114', NULL, NULL, NULL, 'Pria', NULL, 20220911230922, NULL),
(5, 'user5', '082111111115', NULL, NULL, NULL, 'Pria', NULL, 20220911230933, NULL),
(6, 'user6', '082111111116', NULL, NULL, NULL, 'Pria', NULL, 20220911230944, NULL),
(7, 'Leon Scott Kennedy', '082111111117', 'Jalan Palita', 'Polisi', 41, 'Pria', 'O', 20220911230955, '2022-09-17 02:34:45'),
(8, 'user8', '082111111118', NULL, NULL, NULL, 'Pria', NULL, 20220911231005, NULL),
(9, 'user9', '082111111119', NULL, NULL, NULL, 'Pria', NULL, 20220911231016, NULL),
(10, 'user10', '0821111111120', NULL, NULL, NULL, 'Pria', NULL, 20220911231036, NULL),
(11, 'user11', '0821111111121', NULL, NULL, NULL, 'Pria', NULL, 20220911231048, NULL),
(12, 'user12', '0821111111122', NULL, NULL, NULL, 'Pria', NULL, 20220911231059, NULL),
(13, 'user13', '0821111111123', NULL, NULL, NULL, 'Pria', NULL, 20220911231108, NULL),
(14, 'user14', '0821111111124', NULL, NULL, NULL, 'Pria', NULL, 20220911231116, NULL),
(15, 'user15', '0821111111125', NULL, NULL, NULL, 'Pria', NULL, 20220911231126, NULL),
(17, 'user17', '082111111127', 'Jalan mantap', 'Karyaman Swasta', 26, 'Wanita', 'B', 20220912041540, NULL),
(18, 'user18', '082111111128', NULL, 'Karyaman Swasta', 26, 'Wanita', 'B', 20220912175457, NULL),
(19, 'Sherry Birkin', '082111111129', 'Jalan Tuanku Imam Bonjol', 'Staf DSO', 31, 'Wanita', 'O', 20220912175546, '2022-09-17 02:25:38'),
(20, 'James Marcus', '0821111111130', 'Jalan Padang Basi', 'Directur Umbrella Corporation', 58, 'Pria', 'AB', 20220912175642, '2022-09-16 11:57:56'),
(29, 'zilong', '123456789098', NULL, NULL, NULL, 'Pria', NULL, 20220912221357, NULL),
(30, 'user30', '0821111111140', NULL, NULL, NULL, 'Pria', NULL, 20220912222222, NULL),
(31, 'user31', '0821111111141', NULL, NULL, NULL, 'Pria', NULL, 20220912222514, NULL),
(32, 'user32', '0821111111142', NULL, NULL, NULL, 'Pria', NULL, 20220914063417, NULL),
(33, 'user33', '0821111111143', NULL, NULL, NULL, 'Pria', NULL, 20220915170405, NULL),
(34, 'user34', '0821111111144', NULL, NULL, NULL, 'Pria', NULL, 20220915191720, NULL),
(35, 'user34', '0821111111144', NULL, NULL, NULL, 'Pria', NULL, 20220915192537, NULL),
(36, 'user35', '0821111111145', NULL, NULL, NULL, 'Pria', NULL, 20220915192759, NULL),
(37, 'user36', '0821111111146', NULL, NULL, NULL, 'Pria', NULL, 20220915192851, NULL),
(38, 'user37', '0821111111147', NULL, NULL, NULL, 'Pria', NULL, 20220915193004, NULL),
(39, 'user38', '082111111148', NULL, NULL, NULL, 'Pria', NULL, 20220919230726, NULL),
(40, 'user39', '082111111149', NULL, NULL, NULL, 'Pria', NULL, 20220919230913, NULL),
(41, 'user40', '082111111150', NULL, NULL, NULL, 'Pria', NULL, 20220919231134, NULL),
(42, 'user41', '082111111151', NULL, NULL, NULL, 'Pria', NULL, 20220920065121, NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
