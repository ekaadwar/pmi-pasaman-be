-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 01 Okt 2022 pada 22.11
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
(1, 1, 'admin', NULL, 'active', 'user1@mail.com', '$2b$10$eJHi7obdWZ1I9GIvfDhECeEkM5MnKlHkf9BAaBwAho3NYJvZh19hC', NULL, NULL, 20220911154525, '2022-09-30 11:52:30'),
(2, 2, 'user', NULL, 'active', 'user2@mail.com', '$2b$10$VL732Td1l2aVmrp4nXNnKOskt1x/lwCxTE4sRv7jTXPUacPYk7DGq', NULL, '2023-01-01 00:00:00', 20220911230857, '2022-10-01 06:10:31'),
(3, 3, 'user', NULL, 'active', 'user3@mail.com', '$2b$10$NUzop4pkLU/NeXGq3I3qGO5YtE1NKK2eqSfJJUjDQu1NGKT/7Jxlq', NULL, '2023-01-01 00:00:00', 20220911230910, '2022-10-01 06:10:02'),
(4, 4, 'user', NULL, 'active', 'user4@mail.com', '$2b$10$W2L57gR.Fgj.dzimej/2FutOUp4/j3Rev6HgFeFFg6UMlpqvLNklG', NULL, NULL, 20220911230922, '2022-09-30 11:52:30'),
(5, 5, 'user', NULL, 'active', 'user5@mail.com', '$2b$10$CYGNhv3kMb5ik2aIT8UTxuFtQKB1fWGwVOBvn/BTPHIJY9Lc.3QYm', NULL, NULL, 20220911230933, '2022-09-30 11:52:30'),
(6, 6, 'user', NULL, 'active', 'user6@mail.com', '$2b$10$gi3YweyUDT9AlwKkLyFgmefxXetmHScjb6MOtByfk1SmE0CFkFbhW', NULL, NULL, 20220911230944, '2022-09-30 11:52:30'),
(7, 7, 'user', NULL, 'active', 'user7@mail.com', '$2b$10$g0JAmMPM5gfl1qVwCYlDCutSwWSk1WgXgRF1JdMefG6Og/mmtGG3i', NULL, NULL, 20220911230955, '2022-09-30 11:52:30'),
(8, 8, 'user', NULL, 'active', 'user8@mail.com', '$2b$10$qasbAvNzSqj5V3Q7m8exguvIsponRXkKpkvH0TbkYrpZO.hOdlhuK', NULL, '2023-01-01 00:00:00', 20220911231005, '2022-10-01 06:10:44'),
(9, 9, 'user', NULL, 'active', 'user9@mail.com', '$2b$10$nidT33neV3Blmnltuo4d6.2yg2av3YfNRSsIji3iYoE.bE0uWvq8m', NULL, NULL, 20220911231016, '2022-09-30 11:52:30'),
(10, 10, 'user', NULL, 'active', 'user10@mail.com', '$2b$10$KMBZT5DDWmOU7/BENeuc8uMt3VaotoR4CvMOp7WOFDt0Gv4e2fbHu', NULL, NULL, 20220911231036, '2022-09-30 11:52:30'),
(11, 11, 'user', NULL, 'active', 'user11@mail.com', '$2b$10$cLF3xxh0a9u1wKZHkkhbLu3.8xJZ588Ca4ERm3jsTGkI0USTruGlS', NULL, NULL, 20220911231048, '2022-09-30 11:52:30'),
(12, 12, 'user', NULL, 'active', 'user12@mail.com', '$2b$10$zmLVKJgVn/2fqmMroWda6O1aFPkrxNrglgfh8ZBBFfgR4Bkc19him', NULL, '2023-01-01 00:00:00', 20220911231059, '2022-10-01 05:42:03'),
(13, 13, 'user', NULL, 'active', 'user13@mail.com', '$2b$10$tWd/IN3RcVhUeDpL5de0CuxRM8xm4zZrukwGriPBiiIt0FhorerP6', NULL, NULL, 20220911231108, '2022-09-30 11:52:30'),
(14, 14, 'user', NULL, 'active', 'user14@mail.com', '$2b$10$mXVZa2KR9VkuNZLHe3paOeZu4PcJrCA6PsdrbwVQR0XqtBQA.DqOS', NULL, NULL, 20220911231116, '2022-09-30 11:52:30'),
(15, 15, 'user', NULL, 'active', 'user15@mail.com', '$2b$10$IYJDDIS8Smsqf3LtiEBx/ONSeHsJkv/i.wgo8RqBH1txLFCcJmkT2', NULL, NULL, 20220911231126, '2022-09-30 11:52:30'),
(17, 17, 'user', NULL, 'active', 'user17@mail.com', '$2b$10$KTzKQWDbu0tcq6Ch6S1tRurgCfMIXgJWgVnOKEVpDK3FYW8BLrg.C', NULL, NULL, 20220912041540, '2022-09-30 11:52:30'),
(18, 18, 'user', NULL, 'active', 'user18@mail.com', '$2b$10$uuF7fxnOLQwnoRLE/xlUA.AO.XOQdo1ChEiDoV/HbgQCIk445muG.', NULL, NULL, 20220912175457, '2022-09-30 11:52:30'),
(19, 19, 'user', NULL, 'active', 'user19@mail.com', '$2b$10$PGQ6cJDuxTSA7nv7AeJnYOxFcUTszW0oqTK05c2rvN0bQDXxrm/Qy', NULL, '2023-01-01 00:00:00', 20220912175546, '2022-10-01 06:11:26'),
(20, 20, 'user', NULL, 'active', 'user20@mail.com', '$2b$10$VFWkpO8gZHKLzcv7K/TvwOaCi8Al8CFgPJBXNDejYIEZQ7FCxz2kW', NULL, NULL, 20220912175642, '2022-09-30 11:52:30'),
(29, 29, 'user', NULL, 'active', 'zilong@mail.com', 'wakwaw', NULL, NULL, 20220912221357, '2022-09-30 11:52:30'),
(30, 30, 'user', NULL, 'active', 'user30@mail.com', '$2b$10$b/UokHV.vH/QnWyvtlPRJOxL60dwFNyzv1NL7CTNQTB6ICTkIBXBe', NULL, NULL, 20220912222222, '2022-09-30 11:52:30'),
(31, 31, 'user', NULL, 'inactive', 'user31@mail.com', '$2b$10$yFyiUtmGeAqtSSM./nK80.wzl/L8gLdhKAngpVtKjo53xVucUUEie', NULL, NULL, 20220912222515, '2022-09-30 11:52:30'),
(32, 32, 'user', NULL, 'active', 'user32@mail.com', '$2b$10$geomiDVRiOhuEsxNhGuGDuEj9Ak9gSK6WkBta.ZVTR2e1Z.keOxxq', NULL, NULL, 20220914063417, '2022-09-30 11:52:30'),
(33, 33, 'user', NULL, 'active', 'user33@mail.com', '$2b$10$FVc6bMZrIM9.EA1Z/ehQVeOa1kvCNiGc.PYEqZc/a0OhXg411hMRy', NULL, NULL, 20220915170406, '2022-09-30 11:52:30'),
(34, 38, 'user', NULL, 'active', 'user37@mail.com', '$2b$10$r.IyjDJKLn/ZUk54Z7Iw5uy96fuNUXaORWuWW7qNsaWVeHDro864e', NULL, '2023-1-2', 20220915193004, '2022-10-01 18:41:00'),
(35, 39, 'user', NULL, 'active', 'user38@mail.com', '$2b$10$nJM5O3eoWKdjaA..yiqCreQb06F2sFNczRI4IOlrBUGcRKBzQyBX6', NULL, NULL, 20220919230726, '2022-09-30 11:52:30'),
(36, 40, 'user', NULL, 'active', 'user39@mail.com', '$2b$10$2Qtb9BWlMf1LyOcyW7VFOeqQxyiecv1LUvmpdrMpVtwh8L1/Wv4pu', NULL, NULL, 20220919230913, '2022-09-30 11:52:30'),
(37, 41, 'user', NULL, 'active', 'user40@mail.com', '$2b$10$g8bD1ZFYAWFF0kmoqTMgweKEQpD6Y6I2AV.fK50wsNZV5OC6Bt1CS', NULL, NULL, 20220919231134, '2022-09-30 11:52:30'),
(38, 42, 'user', NULL, 'active', 'user41@mail.com', '$2b$10$1tRJ4N5gzac9zdxB8Nx.k.F428wgLp0/Ck77E/zSB4CEEw9hWmnG6', NULL, NULL, 20220920065121, '2022-09-30 11:52:30'),
(39, 43, 'user', NULL, 'active', 'user42@mail.com', '$2b$10$4TwUMIuYnrllZxkTSuUOOusJhwYqvPtcVezX8b.mFNUNUniFI5KPi', NULL, NULL, 20220928070047, '2022-09-30 11:52:30');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengeluaran`
--

CREATE TABLE `pengeluaran` (
  `id` int(10) NOT NULL,
  `gol_darah` varchar(100) NOT NULL,
  `jumlah` int(10) NOT NULL,
  `penerima` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pengeluaran`
--

INSERT INTO `pengeluaran` (`id`, `gol_darah`, `jumlah`, `penerima`, `created_at`, `updated_at`) VALUES
(1, 'a', 1, 'Haji Ahlan', '2022-09-17 03:25:02', NULL),
(2, 'b', 3, 'Rudi', '2022-09-17 03:29:41', NULL),
(3, 'O', 1, 'Anja', '2022-09-17 03:30:38', NULL),
(4, 'AB', 1, 'Budi', '2022-09-17 03:32:48', NULL);

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
(1, 'A', 4, 1, 3, '2022-09-16 00:18:51', '2022-10-01 06:10:44'),
(2, 'B', 6, 1, 5, '2022-09-16 00:19:54', '2022-10-01 05:42:03'),
(3, 'AB', 2, 1, 1, '2022-09-16 00:37:42', '2022-10-01 05:38:44'),
(4, 'O', 7, 1, 6, '2022-09-16 00:37:48', '2022-10-01 18:45:21');

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
(1, 'user1', '082111111111', 'Jalan Pelita', 'Karyawan Swasta', 26, 'Pria', 'A', 20220911154525, '2022-09-15 12:58:27'),
(2, 'user2', '082111111112', 'Jalan Kegelapan', 'Agen BSAA Cabang Afrika', 28, 'Wanita', 'O', 20220911230857, '2022-09-15 12:58:27'),
(3, 'user3', '082111111113', 'Jalan Kegelapan', 'Agen BSAA Pusat', 31, 'Wanita', 'A', 20220911230910, '2022-09-15 12:58:27'),
(5, 'user5', '082111111115', NULL, NULL, NULL, 'Pria', NULL, 20220911230933, NULL),
(6, 'user6', '082111111116', NULL, NULL, NULL, 'Pria', NULL, 20220911230944, NULL),
(7, 'Leon Scott Kennedy', '082111111117', 'Jalan Palita', 'Polisi', 41, 'Pria', 'O', 20220911230955, '2022-09-17 02:34:45'),
(8, 'William Birkin', '082111111118', 'Jalan Kebebasan', 'Peneliti di Umbrella Corp', NULL, 'Pria', 'A', 20220911231005, '2022-09-30 04:41:42'),
(9, 'Alexia Ashford', '082111111119', 'Jalan Tirta Kencana', 'Mahasiswa', NULL, 'Pria', 'AB', 20220911231016, '2022-09-30 04:45:08'),
(10, 'user10', '0821111111120', NULL, NULL, NULL, 'Pria', NULL, 20220911231036, NULL),
(11, 'user11', '0821111111121', NULL, NULL, NULL, 'Pria', NULL, 20220911231048, NULL),
(12, 'Alex Wesker', '0821111111122', 'Jalan Merdeka', NULL, NULL, 'Pria', 'B', 20220911231059, '2022-09-30 04:29:54'),
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
(37, 'Fitra Eri', '0821111111146', 'Jalan Hayamuruk', 'Reviewer Otomotif', NULL, 'Pria', 'A', 20220915192851, '2022-09-30 11:17:22'),
(38, 'Ridwan Hanif Harmadi', '0821111111147', 'Jalan Merdeka', 'Pengusaha', NULL, 'Pria', 'O', 20220915193004, '2022-09-30 09:56:34'),
(39, 'user38', '082111111148', NULL, NULL, NULL, 'Pria', NULL, 20220919230726, NULL),
(40, 'user39', '082111111149', NULL, NULL, NULL, 'Pria', NULL, 20220919230913, NULL),
(41, 'user40', '082111111150', NULL, NULL, NULL, 'Pria', NULL, 20220919231134, NULL),
(42, 'user41', '082111111151', NULL, NULL, NULL, 'Pria', NULL, 20220920065121, NULL),
(43, 'user42', '082111111152', NULL, NULL, NULL, 'Pria', NULL, 20220928070047, NULL);

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
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user_donor`
--

INSERT INTO `user_donor` (`id`, `id_user`, `gol_darah`, `lokasi`, `created_at`, `updated_at`) VALUES
(8, 2, 'O', 'Gunung Kidul', '2022-09-16 00:53:22', NULL),
(11, 17, 'B', 'Gunung Kidul', '2022-09-16 00:58:15', NULL),
(12, 1, 'A', 'Gunung Kidul', '2022-09-16 01:05:24', NULL),
(13, 3, 'A', 'Gunung Kidul', '2022-09-16 01:05:53', NULL),
(14, 18, 'B', 'Gunung Kidul', '2022-09-16 01:06:03', NULL),
(15, 19, 'B', 'Gunung Kidul', '2022-09-16 01:06:08', NULL),
(23, 20, 'AB', 'RSUD Lubuk Sikaping', '2022-09-16 12:15:47', NULL),
(24, 19, 'B', 'RSUD Lubuk Sikaping', '2022-09-16 12:32:29', NULL),
(25, 19, 'B', 'RSUD Lubuk Sikaping', '2022-09-16 13:09:45', NULL),
(26, 7, 'O', 'SMA N 1 Lubuk SIkaping', '2022-09-17 02:35:57', NULL),
(27, 9, 'AB', 'SMA N 1 Lubuk SIkaping', '2022-10-01 05:38:44', NULL),
(28, 12, 'B', 'SMA N 1 Lubuk SIkaping', '2022-10-01 05:42:03', NULL),
(29, 3, 'A', 'SMA N 1 Lubuk SIkaping', '2022-10-01 06:10:01', NULL),
(30, 2, 'O', 'SMA N 1 Lubuk SIkaping', '2022-10-01 06:10:31', NULL),
(31, 8, 'A', 'SMA N 1 Lubuk SIkaping', '2022-10-01 06:10:44', NULL),
(32, 19, 'O', 'SMA N 1 Lubuk SIkaping', '2022-10-01 06:11:26', NULL),
(33, 38, 'O', 'SMA N 1 Lubuk SIkaping', '2022-10-01 18:31:31', NULL),
(34, 38, 'O', 'SMA N 1 Lubuk SIkaping', '2022-10-01 18:40:59', NULL),
(35, 38, 'O', 'SMA N 1 Lubuk SIkaping', '2022-10-01 18:45:21', NULL);

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
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT untuk tabel `pengeluaran`
--
ALTER TABLE `pengeluaran`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `stok_darah`
--
ALTER TABLE `stok_darah`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT untuk tabel `user_backup`
--
ALTER TABLE `user_backup`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT untuk tabel `user_donor`
--
ALTER TABLE `user_donor`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
