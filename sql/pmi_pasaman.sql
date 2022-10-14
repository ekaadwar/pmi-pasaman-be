-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 13 Okt 2022 pada 15.01
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
-- Database: `pmi_pasaman`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_user`
--

CREATE TABLE `detail_user` (
  `id` int(3) NOT NULL,
  `id_user` int(10) NOT NULL,
  `role` varchar(100) NOT NULL DEFAULT 'user',
  `foto` varchar(255) DEFAULT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'active',
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tanggal_lahir` varchar(100) DEFAULT NULL,
  `jadwal_donor` varchar(100) DEFAULT NULL,
  `created_at` bigint(20) NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `detail_user`
--

INSERT INTO `detail_user` (`id`, `id_user`, `role`, `foto`, `status`, `email`, `password`, `tanggal_lahir`, `jadwal_donor`, `created_at`, `updated_at`) VALUES
(1, 1, 'admin', NULL, 'active', 'user1@mail.com', '$2b$10$eJHi7obdWZ1I9GIvfDhECeEkM5MnKlHkf9BAaBwAho3NYJvZh19hC', '1996-09-27', NULL, 20220911154525, '2022-10-11 11:02:07'),
(2, 2, 'admin', NULL, 'active', 'user2@mail.com', '$2b$10$VL732Td1l2aVmrp4nXNnKOskt1x/lwCxTE4sRv7jTXPUacPYk7DGq', '1973-01-01', '2023-1-5', 20220911230857, '2022-10-11 13:05:07'),
(3, 3, 'user', NULL, 'inactive', 'user3@mail.com', '$2b$10$NUzop4pkLU/NeXGq3I3qGO5YtE1NKK2eqSfJJUjDQu1NGKT/7Jxlq', '1979-06-12', '2023-01-01 00:00:00', 20220911230910, '2022-10-11 14:51:42'),
(5, 5, 'user', NULL, 'inactive', 'user5@mail.com', '$2b$10$CYGNhv3kMb5ik2aIT8UTxuFtQKB1fWGwVOBvn/BTPHIJY9Lc.3QYm', NULL, NULL, 20220911230933, '2022-10-10 10:45:54'),
(6, 6, 'user', NULL, 'inactive', 'user6@mail.com', '$2b$10$gi3YweyUDT9AlwKkLyFgmefxXetmHScjb6MOtByfk1SmE0CFkFbhW', NULL, '2023-1-5', 20220911230944, '2022-10-10 10:45:56'),
(7, 7, 'user', NULL, 'active', 'user7@mail.com', '$2b$10$g0JAmMPM5gfl1qVwCYlDCutSwWSk1WgXgRF1JdMefG6Og/mmtGG3i', '1977-01-01', NULL, 20220911230955, '2022-10-11 10:40:42'),
(8, 8, 'user', NULL, 'inactive', 'user8@mail.com', '$2b$10$qasbAvNzSqj5V3Q7m8exguvIsponRXkKpkvH0TbkYrpZO.hOdlhuK', '1975-01-01', '2023-01-01 00:00:00', 20220911231005, '2022-10-11 10:22:24'),
(9, 9, 'user', NULL, 'active', 'user9@mail.com', '$2b$10$nidT33neV3Blmnltuo4d6.2yg2av3YfNRSsIji3iYoE.bE0uWvq8m', NULL, NULL, 20220911231016, '2022-09-30 11:52:30'),
(10, 10, 'user', NULL, 'active', 'user10@mail.com', '$2b$10$KMBZT5DDWmOU7/BENeuc8uMt3VaotoR4CvMOp7WOFDt0Gv4e2fbHu', NULL, NULL, 20220911231036, '2022-09-30 11:52:30'),
(11, 11, 'user', NULL, 'active', 'user11@mail.com', '$2b$10$cLF3xxh0a9u1wKZHkkhbLu3.8xJZ588Ca4ERm3jsTGkI0USTruGlS', '1988-12-19', NULL, 20220911231048, '2022-10-11 10:44:02'),
(12, 12, 'user', NULL, 'active', 'user12@mail.com', '$2b$10$zmLVKJgVn/2fqmMroWda6O1aFPkrxNrglgfh8ZBBFfgR4Bkc19him', NULL, '2023-01-01 00:00:00', 20220911231059, '2022-10-01 05:42:03'),
(13, 13, 'user', NULL, 'inactive', 'user13@mail.com', '$2b$10$tWd/IN3RcVhUeDpL5de0CuxRM8xm4zZrukwGriPBiiIt0FhorerP6', NULL, NULL, 20220911231108, '2022-10-08 06:45:48'),
(14, 14, 'user', NULL, 'inactive', 'user14@mail.com', '$2b$10$mXVZa2KR9VkuNZLHe3paOeZu4PcJrCA6PsdrbwVQR0XqtBQA.DqOS', NULL, NULL, 20220911231116, '2022-10-08 06:49:28'),
(15, 15, 'user', NULL, 'inactive', 'user15@mail.com', '$2b$10$IYJDDIS8Smsqf3LtiEBx/ONSeHsJkv/i.wgo8RqBH1txLFCcJmkT2', NULL, NULL, 20220911231126, '2022-10-08 06:49:40'),
(17, 17, 'user', NULL, 'active', 'user17@mail.com', '$2b$10$KTzKQWDbu0tcq6Ch6S1tRurgCfMIXgJWgVnOKEVpDK3FYW8BLrg.C', '1997-08-02', NULL, 20220912041540, '2022-10-11 11:12:18'),
(18, 18, 'user', NULL, 'active', 'user18@mail.com', '$2b$10$uuF7fxnOLQwnoRLE/xlUA.AO.XOQdo1ChEiDoV/HbgQCIk445muG.', '2009-07-21', NULL, 20220912175457, '2022-10-11 11:03:31'),
(19, 19, 'user', NULL, 'active', 'user19@mail.com', '$2b$10$PGQ6cJDuxTSA7nv7AeJnYOxFcUTszW0oqTK05c2rvN0bQDXxrm/Qy', NULL, '2023-01-01 00:00:00', 20220912175546, '2022-10-01 06:11:26'),
(20, 20, 'user', NULL, 'active', 'user20@mail.com', '$2b$10$VFWkpO8gZHKLzcv7K/TvwOaCi8Al8CFgPJBXNDejYIEZQ7FCxz2kW', NULL, NULL, 20220912175642, '2022-09-30 11:52:30'),
(29, 29, 'user', NULL, 'inactive', 'zilong@mail.com', 'wakwaw', NULL, NULL, 20220912221357, '2022-10-08 06:49:52'),
(30, 30, 'user', NULL, 'inactive', 'user30@mail.com', '$2b$10$b/UokHV.vH/QnWyvtlPRJOxL60dwFNyzv1NL7CTNQTB6ICTkIBXBe', NULL, NULL, 20220912222222, '2022-10-08 06:51:08'),
(31, 31, 'user', NULL, 'inactive', 'user31@mail.com', '$2b$10$yFyiUtmGeAqtSSM./nK80.wzl/L8gLdhKAngpVtKjo53xVucUUEie', NULL, NULL, 20220912222515, '2022-09-30 11:52:30'),
(32, 32, 'user', NULL, 'inactive', 'user32@mail.com', '$2b$10$geomiDVRiOhuEsxNhGuGDuEj9Ak9gSK6WkBta.ZVTR2e1Z.keOxxq', NULL, NULL, 20220914063417, '2022-10-08 06:51:17'),
(33, 33, 'user', NULL, 'inactive', 'user33@mail.com', '$2b$10$FVc6bMZrIM9.EA1Z/ehQVeOa1kvCNiGc.PYEqZc/a0OhXg411hMRy', NULL, NULL, 20220915170406, '2022-10-09 02:50:01'),
(34, 38, 'user', NULL, 'active', 'user37@mail.com', '$2b$10$r.IyjDJKLn/ZUk54Z7Iw5uy96fuNUXaORWuWW7qNsaWVeHDro864e', '1981-11-27', '2023-1-5', 20220915193004, '2022-10-11 15:26:18'),
(35, 39, 'user', NULL, 'inactive', 'user38@mail.com', '$2b$10$nJM5O3eoWKdjaA..yiqCreQb06F2sFNczRI4IOlrBUGcRKBzQyBX6', NULL, NULL, 20220919230726, '2022-10-09 15:38:49'),
(36, 40, 'user', NULL, 'inactive', 'user39@mail.com', '$2b$10$2Qtb9BWlMf1LyOcyW7VFOeqQxyiecv1LUvmpdrMpVtwh8L1/Wv4pu', NULL, NULL, 20220919230913, '2022-10-09 15:39:03'),
(37, 41, 'user', NULL, 'inactive', 'user40@mail.com', '$2b$10$g8bD1ZFYAWFF0kmoqTMgweKEQpD6Y6I2AV.fK50wsNZV5OC6Bt1CS', NULL, NULL, 20220919231134, '2022-10-09 15:52:35'),
(38, 42, 'user', NULL, 'inactive', 'user41@mail.com', '$2b$10$1tRJ4N5gzac9zdxB8Nx.k.F428wgLp0/Ck77E/zSB4CEEw9hWmnG6', NULL, NULL, 20220920065121, '2022-10-09 15:40:55'),
(39, 43, 'user', NULL, 'inactive', 'user42@mail.com', '$2b$10$4TwUMIuYnrllZxkTSuUOOusJhwYqvPtcVezX8b.mFNUNUniFI5KPi', NULL, NULL, 20220928070047, '2022-10-09 15:39:09'),
(40, 45, 'user', NULL, 'inactive', 'aldo@mail.com', 'aldoaldo', NULL, NULL, 20221005212647, '2022-10-10 10:45:48'),
(41, 46, 'user', NULL, 'active', 'user44@mail.com', '$2b$10$QmxmXJMoM2ddCnZW.H8Fe.ZAM4Y8fzy.0EHYMvfRHwXcAusp3S6E.', '1974-05-21', NULL, 20221006060409, '2022-10-11 14:56:59'),
(42, 48, 'user', NULL, 'inactive', 'user45@mail.com', '$2b$10$PK8zgIwq1XK1Z9RbxRCVo.ElIZBhuUVD7cRygx/jW3upJ1QSgaNXq', NULL, NULL, 20221006061056, '2022-10-10 10:45:46'),
(43, 49, 'user', NULL, 'inactive', 'ekaadwar@mail.com', '$2b$10$xr61/zmG5ajpRyt5ITWyReIANT9dDI4j8ubGiv0ubxf4Rr1a22hw2', NULL, NULL, 20221006074055, '2022-10-10 10:45:43'),
(44, 50, 'user', NULL, 'active', 'robipurba@mail.com', '$2b$10$6Ia9dIH7KLLcZl.MQtBiL.e9lEuwrvqeIU37qiuLljdO0fOlk4Dk6', '1986-07-25', NULL, 20221010180713, '2022-10-11 11:14:32'),
(45, 51, 'user', NULL, 'active', 'robijuliardi@mail.com', '$2b$10$g5DFQyZicXjXTEeA7gaNeelW3qGj0njtBFOLhouCPn/d8SXcdL5x2', NULL, NULL, 20221010181003, NULL),
(46, 52, 'user', NULL, 'active', 'yoandaprima@mail.com', '$2b$10$0nhdc/LnTIHKd3fG5eVn3uvwwXHUribB/b3dY8EuYiTDKgmE7nVme', '1999-06-01', NULL, 20221011194917, '2022-10-11 12:50:34');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengeluaran`
--

CREATE TABLE `pengeluaran` (
  `id` int(10) NOT NULL,
  `gol_darah` varchar(100) NOT NULL,
  `jumlah` int(10) NOT NULL,
  `penerima` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pengeluaran`
--

INSERT INTO `pengeluaran` (`id`, `gol_darah`, `jumlah`, `penerima`, `status`, `created_at`, `updated_at`) VALUES
(1, 'a', 1, 'Haji Ahlan', 'inactive', '2022-09-17 03:25:02', '2022-10-08 04:16:15'),
(2, 'b', 3, 'Rudi', 'inactive', '2022-09-17 03:29:41', '2022-10-08 04:17:50'),
(3, 'O', 1, 'Anja', 'inactive', '2022-09-17 03:30:38', '2022-10-08 04:17:54'),
(4, 'AB', 1, 'Budi', 'inactive', '2022-09-17 03:32:48', '2022-10-08 04:17:59'),
(5, 'O', 3, 'undefined', 'inactive', '2022-10-06 15:48:47', '2022-10-08 04:18:02'),
(6, 'AB', 1, 'Budi', 'inactive', '2022-10-06 15:58:05', '2022-10-08 04:18:06'),
(7, 'A', 1, 'Ananda', 'inactive', '2022-10-06 16:00:07', '2022-10-08 04:18:09'),
(8, 'B', 2, 'Ananda', 'inactive', '2022-10-06 16:00:33', '2022-10-08 04:18:12'),
(9, 'O', 1, 'Budi', 'inactive', '2022-10-06 16:03:02', '2022-10-08 04:18:16'),
(10, 'A', 1, 'Amanda', 'inactive', '2022-10-06 16:04:18', '2022-10-08 04:18:20'),
(11, 'B', 1, 'Amando', 'inactive', '2022-10-06 16:06:05', '2022-10-09 12:24:46'),
(12, 'AB', 1, 'Amandani', 'inactive', '2022-10-06 16:16:28', '2022-10-09 12:24:53'),
(13, 'AB', 1, 'Amandoni', 'inactive', '2022-10-06 16:20:53', '2022-10-09 12:26:05'),
(14, 'O', 1, 'Aman', 'inactive', '2022-10-06 16:24:03', '2022-10-09 12:26:20'),
(15, 'B', 1, 'Pongeran', 'inactive', '2022-10-06 22:17:46', '2022-10-09 12:26:31'),
(16, 'A', 3, 'Randa', 'inactive', '2022-10-06 22:18:51', '2022-10-09 12:28:58'),
(17, 'A', 4, 'Nurul', 'inactive', '2022-10-06 22:41:50', '2022-10-09 12:29:01'),
(18, 'B', 2, 'Nuril', 'inactive', '2022-10-06 22:43:50', '2022-10-09 12:29:04'),
(19, 'B', 2, 'Anisa', 'inactive', '2022-10-06 22:44:17', '2022-10-09 12:29:12'),
(20, 'O', 5, 'Aminah', 'inactive', '2022-10-06 22:45:35', '2022-10-09 12:30:31'),
(21, 'O', 4, 'Robi', 'inactive', '2022-10-06 22:46:19', '2022-10-09 12:29:28'),
(22, 'AB', 1, 'Rino', 'inactive', '2022-10-06 22:46:54', '2022-10-09 12:30:34'),
(23, 'AB', 1, 'Rino', 'inactive', '2022-10-06 22:47:11', '2022-10-09 12:30:37'),
(24, 'AB', 1, 'Rino', 'inactive', '2022-10-06 22:52:51', '2022-10-09 12:30:41'),
(25, 'AB', 1, 'Rino', 'inactive', '2022-10-06 22:53:03', '2022-10-09 12:29:52'),
(26, 'O', 3, 'Rino', 'inactive', '2022-10-06 22:53:30', '2022-10-09 12:30:44'),
(27, 'O', 3, 'Rino', 'inactive', '2022-10-06 22:53:39', '2022-10-09 12:30:48'),
(28, 'B', 1, 'Rino', 'inactive', '2022-10-06 22:54:10', '2022-10-09 12:30:51'),
(29, 'B', 5, 'Rino', 'inactive', '2022-10-06 22:54:33', '2022-10-09 12:30:54'),
(30, 'A', 2, 'Rino', 'inactive', '2022-10-06 22:55:13', '2022-10-09 12:30:57'),
(31, 'A', 2, 'Rino', 'inactive', '2022-10-06 22:55:22', '2022-10-09 12:31:00'),
(32, 'O', 2, 'Rino', 'inactive', '2022-10-06 22:57:59', '2022-10-11 05:41:22'),
(33, 'O', 2, 'Rino', 'inactive', '2022-10-06 22:58:36', '2022-10-11 05:41:28'),
(34, 'O', 2, 'Rino', 'inactive', '2022-10-06 23:00:34', '2022-10-11 05:41:25'),
(35, 'O', 2, 'Rino', 'inactive', '2022-10-06 23:04:45', '2022-10-11 05:41:31'),
(36, 'O', 2, 'Rino', 'inactive', '2022-10-06 23:04:51', '2022-10-11 05:41:34'),
(37, 'O', 2, 'Rino', 'inactive', '2022-10-06 23:04:54', '2022-10-11 05:41:37'),
(38, 'O', 2, 'Rino', 'inactive', '2022-10-06 23:04:58', '2022-10-11 05:41:40'),
(39, 'B', 1, 'Akaza', 'inactive', '2022-10-06 23:11:18', '2022-10-11 05:41:43'),
(40, 'B', 1, 'Kyojuro', 'inactive', '2022-10-06 23:11:51', '2022-10-11 05:41:45'),
(41, 'O', 3, 'Saitama', 'active', '2022-10-06 23:26:14', NULL),
(42, 'O', 3, 'Reikudo', 'active', '2022-10-06 23:27:51', NULL),
(43, 'O', 10, 'Konoha Gakure', 'active', '2022-10-06 23:34:14', NULL),
(44, 'O', 20, 'RSUD Lubuk Sikaping', 'active', '2022-10-06 23:35:17', NULL),
(45, 'A', 1, 'Rosidi', 'active', '2022-10-07 00:02:30', NULL),
(46, 'O', 2, 'Rosidah', 'active', '2022-10-07 00:04:23', NULL),
(47, 'O', 1, 'Romanah', 'active', '2022-10-07 00:08:36', NULL),
(48, 'O', 2, 'Aminah Rosidi', 'inactive', '2022-10-07 00:11:15', '2022-10-10 11:04:02'),
(49, 'A', 3, 'Agus Rozani', 'active', '2022-10-11 05:42:12', NULL),
(50, 'O', 20, 'RSUD Padang Pariaman', 'active', '2022-10-11 13:29:07', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `stok_darah`
--

CREATE TABLE `stok_darah` (
  `id` int(10) NOT NULL,
  `gol_darah` varchar(100) NOT NULL,
  `masuk` int(10) NOT NULL DEFAULT 0,
  `keluar` int(10) NOT NULL DEFAULT 0,
  `total` int(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `stok_darah`
--

INSERT INTO `stok_darah` (`id`, `gol_darah`, `masuk`, `keluar`, `total`, `created_at`, `updated_at`) VALUES
(1, 'A', 10, 2, 8, '2022-09-16 00:18:51', '2022-10-12 17:45:18'),
(2, 'B', 10, 9, 1, '2022-09-16 00:19:54', '2022-10-12 17:42:28'),
(3, 'AB', 10, 5, 5, '2022-09-16 00:37:42', '2022-10-12 17:43:47'),
(4, 'O', 10, 8, 2, '2022-09-16 00:37:48', '2022-10-12 17:29:22');

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
  `created_at` bigint(20) NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `nama`, `no_hp`, `alamat`, `pekerjaan`, `umur`, `jenis_kelamin`, `gol_darah`, `created_at`, `updated_at`) VALUES
(1, 'Eka Fajhari Adwar, S.Si', '082169150233', 'Jalan Pelita Nomor 13 Blok J, Tanjuang Baringin, Lubuk Sikaping, Pasaman, Sumatera Barat', 'Website Developer', 26, 'Pria', 'A', 20220911154525, '2022-10-11 11:02:07'),
(2, 'Chris Redfield', '082111111112', 'Jalan Cupak Tangah', 'Polisi', 49, 'Wanita', 'O', 20220911230857, '2022-10-11 10:38:00'),
(3, 'Sherry Birkin', '082111111113', 'Pauh, Lubuk Sikaping', 'Agen Pemerintah US', 43, 'Wanita', 'A', 20220911230910, '2022-10-11 14:51:42'),
(5, 'Loraine Faussia', '082111111115', 'Jalan Asia-Afrika', 'Pelajar', NULL, 'Pria', 'A', 20220911230933, '2022-10-02 10:35:44'),
(6, 'Sanjida Sanju', '082111111116', 'Jalan Bangladesh', 'Pelajar', NULL, 'Pria', 'AB', 20220911230944, '2022-10-02 10:36:36'),
(7, 'Leon Scott Kennedy', '082111111117', 'Jalan Pelita Nomor 14 Blok J, Tanjuang Baringin, Lubuk Sikaping, Pasaman, Sumatera Barat', 'Staff Khusus Kepresidenan', 45, 'Pria', 'A', 20220911230955, '2022-10-11 10:40:42'),
(8, 'William Birkin', '082111111118', 'Jalan Kebebasan', 'Peneliti di Umbrella Corp', 47, 'Pria', 'A', 20220911231005, '2022-10-11 10:22:24'),
(9, 'Alexia Ashford', '082111111119', 'Jalan Tirta Kencana', 'Mahasiswa', NULL, 'Pria', 'AB', 20220911231016, '2022-09-30 04:45:08'),
(10, 'Khudbatul Anumerta', '0821111111120', 'Jalan Pengangsaan', 'Pegawai Negeri Sipil', NULL, 'Pria', 'B', 20220911231036, '2022-10-02 10:37:28'),
(11, 'Alexis Sancezz', '0821111111121', 'Jalan Imam Bonjol', 'Atlet', 33, 'Pria', 'O', 20220911231048, '2022-10-11 10:44:02'),
(12, 'Alex Wesker', '0821111111122', 'Jalan Merdeka', 'Peneliti', NULL, 'Pria', 'B', 20220911231059, '2022-10-02 10:39:17'),
(13, 'user13', '0821111111123', NULL, NULL, NULL, 'Pria', NULL, 20220911231108, NULL),
(14, 'user14', '0821111111124', NULL, NULL, NULL, 'Pria', NULL, 20220911231116, NULL),
(15, 'user15', '0821111111125', NULL, NULL, NULL, 'Pria', NULL, 20220911231126, NULL),
(17, 'Yusri Adwar', '082111111127', 'Jalan Pelita Nomor 13 Blok J, Tanjuang Baringin, Lubuk Sikaping, Pasaman, Sumatera Barat', 'Karyaman Swasta', 25, 'Wanita', 'A', 20220912041540, '2022-10-11 11:12:19'),
(18, 'Fikri Adwar', '082111111128', 'Jalan Pelita Nomor 13 Blok J, Tanjuang Baringin, Lubuk Sikaping, Pasaman, Sumatera Barat', 'Pelajar', 13, 'Wanita', 'A', 20220912175457, '2022-10-11 11:03:33'),
(19, 'Sherry Birkin', '082111111129', 'Jalan Tuanku Imam Bonjol', 'Staf DSO', 31, 'Wanita', 'O', 20220912175546, '2022-09-17 02:25:38'),
(20, 'James Marcus', '0821111111130', 'Jalan Padang Basi', 'Directur Umbrella Corporation', 58, 'Pria', 'AB', 20220912175642, '2022-09-16 11:57:56'),
(29, 'zilong', '123456789098', NULL, NULL, NULL, 'Pria', NULL, 20220912221357, NULL),
(30, 'user30', '0821111111140', NULL, NULL, NULL, 'Pria', NULL, 20220912222222, NULL),
(31, 'user31', '0821111111141', NULL, NULL, NULL, 'Pria', NULL, 20220912222514, NULL),
(32, 'user32', '0821111111142', NULL, NULL, NULL, 'Pria', NULL, 20220914063417, NULL),
(33, 'user33', '0821111111143', NULL, NULL, NULL, 'Pria', NULL, 20220915170405, NULL),
(38, 'Ridwan Hanif Harmadi', '0821111111147', 'Depok, Jawa Barat', 'Pengusaha', 40, 'Pria', 'O', 20220915193004, '2022-10-11 15:26:18'),
(39, 'user38', '082111111148', NULL, NULL, NULL, 'Pria', NULL, 20220919230726, NULL),
(40, 'user39', '082111111149', NULL, NULL, NULL, 'Pria', NULL, 20220919230913, NULL),
(41, 'user40', '082111111150', NULL, NULL, NULL, 'Pria', NULL, 20220919231134, NULL),
(42, 'user41', '082111111151', NULL, NULL, NULL, 'Pria', NULL, 20220920065121, NULL),
(43, 'user42', '082111111152', NULL, NULL, NULL, 'Pria', NULL, 20220928070047, NULL),
(45, 'aldo', '082111115423', 'jalan perwira', 'Programmer', 30, 'Pria', 'A', 20221005212647, NULL),
(46, 'Jill Valentine', '082111111154', 'Jalan Perwira II', 'Polisi', 48, 'Pria', 'B', 20221006060409, '2022-10-11 14:56:59'),
(48, 'user45', '0821111111155', NULL, NULL, NULL, 'Pria', NULL, 20221006061056, NULL),
(49, 'Eka Fajhari Adwar', 'undefined', 'Jalan Pelita Nomor 13', 'programmer', 26, 'Pria', NULL, 20221006074055, NULL),
(50, 'Robi Purba', '081234215678', 'Lampung', 'Presenter', 36, 'Pria', 'B', 20221010180713, '2022-10-11 11:14:32'),
(51, 'Robi Juliardi', '082134215678', NULL, NULL, NULL, 'Pria', NULL, 20221010181003, NULL),
(52, 'Yoanda Prima', '082134456712', 'Padang', 'PNS', 23, 'Pria', 'A', 20221011194917, '2022-10-11 12:50:34');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_backup`
--

CREATE TABLE `user_backup` (
  `id` int(3) NOT NULL,
  `role` varchar(100) NOT NULL DEFAULT 'user',
  `foto` varchar(255) DEFAULT NULL,
  `nama` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `no_hp` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `alamat` text DEFAULT NULL,
  `pekerjaan` varchar(100) DEFAULT NULL,
  `umur` int(3) DEFAULT NULL,
  `jenis_kelamin` enum('Pria','Wanita') NOT NULL,
  `gol_darah` varchar(10) DEFAULT NULL,
  `created_at` bigint(20) NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user_backup`
--

INSERT INTO `user_backup` (`id`, `role`, `foto`, `nama`, `email`, `no_hp`, `password`, `alamat`, `pekerjaan`, `umur`, `jenis_kelamin`, `gol_darah`, `created_at`, `updated_at`) VALUES
(1, 'admin', '', 'Eka Adwar', 'user1@mail.com', '082111111111', '$2b$10$eJHi7obdWZ1I9GIvfDhECeEkM5MnKlHkf9BAaBwAho3NYJvZh19hC', 'Jalan Pelita', 'Freelancer', 26, 'Pria', 'A', 20220911154525, '2022-09-12 11:04:11'),
(2, 'user', '', 'Sheva Alomar', 'user2@mail.com', '082111111112', '$2b$10$VL732Td1l2aVmrp4nXNnKOskt1x/lwCxTE4sRv7jTXPUacPYk7DGq', 'Jalan Kegelapan', 'Agen BSAA Cabang Afrika', 28, 'Wanita', 'O', 20220911230857, '2022-09-12 10:20:25'),
(3, 'user', '', 'user3', 'user3@mail.com', '082111111113', '$2b$10$NUzop4pkLU/NeXGq3I3qGO5YtE1NKK2eqSfJJUjDQu1NGKT/7Jxlq', NULL, NULL, NULL, 'Pria', NULL, 20220911230910, NULL),
(4, 'user', '', 'user4', 'user4@mail.com', '082111111114', '$2b$10$W2L57gR.Fgj.dzimej/2FutOUp4/j3Rev6HgFeFFg6UMlpqvLNklG', NULL, NULL, NULL, 'Pria', NULL, 20220911230922, NULL),
(5, 'user', '', 'user5', 'user5@mail.com', '082111111115', '$2b$10$CYGNhv3kMb5ik2aIT8UTxuFtQKB1fWGwVOBvn/BTPHIJY9Lc.3QYm', NULL, NULL, NULL, 'Pria', NULL, 20220911230933, NULL),
(6, 'user', '', 'user6', 'user6@mail.com', '082111111116', '$2b$10$gi3YweyUDT9AlwKkLyFgmefxXetmHScjb6MOtByfk1SmE0CFkFbhW', NULL, NULL, NULL, 'Pria', NULL, 20220911230944, NULL),
(7, 'user', '', 'user7', 'user7@mail.com', '082111111117', '$2b$10$g0JAmMPM5gfl1qVwCYlDCutSwWSk1WgXgRF1JdMefG6Og/mmtGG3i', NULL, NULL, NULL, 'Pria', NULL, 20220911230955, NULL),
(8, 'user', '', 'user8', 'user8@mail.com', '082111111118', '$2b$10$qasbAvNzSqj5V3Q7m8exguvIsponRXkKpkvH0TbkYrpZO.hOdlhuK', NULL, NULL, NULL, 'Pria', NULL, 20220911231005, NULL),
(9, 'user', '', 'user9', 'user9@mail.com', '082111111119', '$2b$10$nidT33neV3Blmnltuo4d6.2yg2av3YfNRSsIji3iYoE.bE0uWvq8m', NULL, NULL, NULL, 'Pria', NULL, 20220911231016, NULL),
(10, 'user', '', 'user10', 'user10@mail.com', '0821111111120', '$2b$10$KMBZT5DDWmOU7/BENeuc8uMt3VaotoR4CvMOp7WOFDt0Gv4e2fbHu', NULL, NULL, NULL, 'Pria', NULL, 20220911231036, NULL),
(11, 'user', '', 'user11', 'user11@mail.com', '0821111111121', '$2b$10$cLF3xxh0a9u1wKZHkkhbLu3.8xJZ588Ca4ERm3jsTGkI0USTruGlS', NULL, NULL, NULL, 'Pria', NULL, 20220911231048, NULL),
(12, 'user', '', 'user12', 'user12@mail.com', '0821111111122', '$2b$10$zmLVKJgVn/2fqmMroWda6O1aFPkrxNrglgfh8ZBBFfgR4Bkc19him', NULL, NULL, NULL, 'Pria', NULL, 20220911231059, NULL),
(13, 'user', '', 'user13', 'user13@mail.com', '0821111111123', '$2b$10$tWd/IN3RcVhUeDpL5de0CuxRM8xm4zZrukwGriPBiiIt0FhorerP6', NULL, NULL, NULL, 'Pria', NULL, 20220911231108, NULL),
(14, 'user', '', 'user14', 'user14@mail.com', '0821111111124', '$2b$10$mXVZa2KR9VkuNZLHe3paOeZu4PcJrCA6PsdrbwVQR0XqtBQA.DqOS', NULL, NULL, NULL, 'Pria', NULL, 20220911231116, NULL),
(15, 'user', '', 'user15', 'user15@mail.com', '0821111111125', '$2b$10$IYJDDIS8Smsqf3LtiEBx/ONSeHsJkv/i.wgo8RqBH1txLFCcJmkT2', NULL, NULL, NULL, 'Pria', NULL, 20220911231126, NULL),
(17, 'user', NULL, 'user17', 'user17@mail.com', '082111111127', '$2b$10$KTzKQWDbu0tcq6Ch6S1tRurgCfMIXgJWgVnOKEVpDK3FYW8BLrg.C', 'Jalan mantap', 'Karyaman Swasta', 26, 'Wanita', 'B', 20220912041540, NULL),
(18, 'user', NULL, 'user18', 'user18@mail.com', '082111111128', '$2b$10$uuF7fxnOLQwnoRLE/xlUA.AO.XOQdo1ChEiDoV/HbgQCIk445muG.', NULL, 'Karyaman Swasta', 26, 'Wanita', 'B', 20220912175457, NULL),
(19, 'user', NULL, 'user19', 'user19@mail.com', '082111111129', '$2b$10$PGQ6cJDuxTSA7nv7AeJnYOxFcUTszW0oqTK05c2rvN0bQDXxrm/Qy', 'Jalan mantap', 'Karyaman Swasta', 26, 'Wanita', 'B', 20220912175546, NULL),
(20, 'user', NULL, 'user20', 'user20@mail.com', '0821111111130', '$2b$10$VFWkpO8gZHKLzcv7K/TvwOaCi8Al8CFgPJBXNDejYIEZQ7FCxz2kW', NULL, NULL, NULL, 'Pria', NULL, 20220912175642, NULL),
(29, 'user', NULL, 'zilong', 'zilong@mail.com', '123456789098', 'wakwaw', NULL, NULL, NULL, 'Pria', NULL, 20220912221357, NULL),
(30, 'user', NULL, 'user30', 'user30@mail.com', '0821111111140', '$2b$10$b/UokHV.vH/QnWyvtlPRJOxL60dwFNyzv1NL7CTNQTB6ICTkIBXBe', NULL, NULL, NULL, 'Pria', NULL, 20220912222222, NULL),
(31, 'user', NULL, 'user31', 'user31@mail.com', '0821111111141', '$2b$10$yFyiUtmGeAqtSSM./nK80.wzl/L8gLdhKAngpVtKjo53xVucUUEie', NULL, NULL, NULL, 'Pria', NULL, 20220912222514, NULL),
(32, 'user', NULL, 'user32', 'user32@mail.com', '0821111111142', '$2b$10$geomiDVRiOhuEsxNhGuGDuEj9Ak9gSK6WkBta.ZVTR2e1Z.keOxxq', NULL, NULL, NULL, 'Pria', NULL, 20220914063417, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_donor`
--

CREATE TABLE `user_donor` (
  `id` int(10) NOT NULL,
  `id_user` int(10) NOT NULL,
  `gol_darah` varchar(100) NOT NULL,
  `lokasi` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user_donor`
--

INSERT INTO `user_donor` (`id`, `id_user`, `gol_darah`, `lokasi`, `status`, `created_at`, `updated_at`) VALUES
(8, 2, 'O', 'Gunung Kidul', 'inactive', '2022-09-16 00:53:22', '2022-10-08 03:45:22'),
(11, 17, 'B', 'Gunung Kidul', 'inactive', '2022-09-16 00:58:15', '2022-10-08 11:05:26'),
(12, 1, 'A', 'Gunung Kidul', 'inactive', '2022-09-16 01:05:24', '2022-10-09 08:28:09'),
(13, 3, 'A', 'Gunung Kidul', 'inactive', '2022-09-16 01:05:53', '2022-10-09 08:06:31'),
(14, 18, 'B', 'Gunung Kidul', 'inactive', '2022-09-16 01:06:03', '2022-10-09 08:28:24'),
(15, 19, 'B', 'Gunung Kidul', 'inactive', '2022-09-16 01:06:08', '2022-10-09 08:28:48'),
(23, 20, 'AB', 'RSUD Lubuk Sikaping', 'inactive', '2022-09-16 12:15:47', '2022-10-09 08:30:11'),
(24, 19, 'B', 'RSUD Lubuk Sikaping', 'inactive', '2022-09-16 12:32:29', '2022-10-09 08:33:27'),
(25, 19, 'B', 'RSUD Lubuk Sikaping', 'inactive', '2022-09-16 13:09:45', '2022-10-09 08:33:36'),
(26, 7, 'O', 'SMA N 1 Lubuk SIkaping', 'active', '2022-09-17 02:35:57', NULL),
(27, 9, 'AB', 'SMA N 1 Lubuk SIkaping', 'active', '2022-10-01 05:38:44', NULL),
(28, 12, 'B', 'SMA N 1 Lubuk SIkaping', 'inactive', '2022-10-01 05:42:03', '2022-10-09 11:19:15'),
(29, 3, 'A', 'SMA N 1 Lubuk SIkaping', 'inactive', '2022-10-01 06:10:01', '2022-10-09 08:33:45'),
(30, 2, 'O', 'SMA N 1 Lubuk SIkaping', 'active', '2022-10-01 06:10:31', NULL),
(31, 8, 'A', 'SMA N 1 Lubuk SIkaping', 'active', '2022-10-01 06:10:44', NULL),
(32, 19, 'O', 'SMA N 1 Lubuk SIkaping', 'inactive', '2022-10-01 06:11:26', '2022-10-09 11:19:12'),
(33, 38, 'O', 'SMA N 1 Lubuk SIkaping', 'inactive', '2022-10-01 18:31:31', '2022-10-09 11:19:20'),
(34, 38, 'O', 'SMA N 1 Lubuk SIkaping', 'inactive', '2022-10-01 18:40:59', '2022-10-09 11:19:03'),
(35, 38, 'O', 'SMA N 1 Lubuk SIkaping', 'inactive', '2022-10-01 18:45:21', '2022-10-09 08:33:52'),
(36, 38, 'O', 'SMA N 1 Lubuk SIkaping', 'inactive', '2022-10-04 23:51:22', '2022-10-09 11:19:00'),
(37, 38, 'O', 'SMA N 1 Lubuk SIkaping', 'inactive', '2022-10-04 23:57:42', '2022-10-09 11:19:08'),
(38, 2, 'O', 'SMA N 1 Lubuk Sikaping', 'inactive', '2022-10-05 00:35:34', '2022-10-09 11:18:55'),
(39, 6, 'AB', 'RSUD Lubuk Sikaping', 'inactive', '2022-10-05 00:42:16', '2022-10-09 11:18:51');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `detail_user`
--
ALTER TABLE `detail_user`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `pengeluaran`
--
ALTER TABLE `pengeluaran`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `stok_darah`
--
ALTER TABLE `stok_darah`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user_backup`
--
ALTER TABLE `user_backup`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user_donor`
--
ALTER TABLE `user_donor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `detail_user`
--
ALTER TABLE `detail_user`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT untuk tabel `pengeluaran`
--
ALTER TABLE `pengeluaran`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT untuk tabel `stok_darah`
--
ALTER TABLE `stok_darah`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT untuk tabel `user_backup`
--
ALTER TABLE `user_backup`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT untuk tabel `user_donor`
--
ALTER TABLE `user_donor`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
