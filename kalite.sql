/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100411
 Source Host           : localhost:3306
 Source Schema         : kalite

 Target Server Type    : MySQL
 Target Server Version : 100411
 File Encoding         : 65001

 Date: 11/04/2020 17:43:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for bayi
-- ----------------------------
DROP TABLE IF EXISTS `bayi`;
CREATE TABLE `bayi`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `updated_at` date NOT NULL,
  `deleted_at` date NULL DEFAULT NULL,
  `created_at` date NOT NULL,
  `bayi_adi` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `bayi_kodu` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `bayi_il` int(3) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 126 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bayi
-- ----------------------------
INSERT INTO `bayi` VALUES (25, '2020-03-29', NULL, '0000-00-00', 'ADESAN', 'ADESA', 35);
INSERT INTO `bayi` VALUES (26, '0000-00-00', NULL, '0000-00-00', 'AFRİKA YAPI', 'AFRYP', 34);
INSERT INTO `bayi` VALUES (27, '0000-00-00', NULL, '0000-00-00', 'AHL YAPI', 'AHLYP', 34);
INSERT INTO `bayi` VALUES (28, '0000-00-00', NULL, '0000-00-00', 'AKAS YAPI', 'AKAYP', 34);
INSERT INTO `bayi` VALUES (29, '0000-00-00', NULL, '0000-00-00', 'AKCAN YAPI MARKET', 'AKCYA', 34);
INSERT INTO `bayi` VALUES (30, '0000-00-00', NULL, '0000-00-00', 'AKS İNŞAAT', 'AKSİN', 34);
INSERT INTO `bayi` VALUES (31, '0000-00-00', NULL, '0000-00-00', 'ARTANLAR', 'ARTAN', 34);
INSERT INTO `bayi` VALUES (32, '0000-00-00', NULL, '0000-00-00', 'AŞOĞLU', 'ASOGL', 34);
INSERT INTO `bayi` VALUES (33, '0000-00-00', NULL, '0000-00-00', 'AYCAN BOYA', 'AYCBY', 34);
INSERT INTO `bayi` VALUES (34, '0000-00-00', NULL, '0000-00-00', 'AYDINAY', 'AYDNY', 34);
INSERT INTO `bayi` VALUES (35, '0000-00-00', NULL, '0000-00-00', 'AYDINLAR', 'AYDNL', 34);
INSERT INTO `bayi` VALUES (36, '0000-00-00', NULL, '0000-00-00', 'BANDIRMA', 'BNDRM', 34);
INSERT INTO `bayi` VALUES (37, '0000-00-00', NULL, '0000-00-00', 'BAROK', 'BAROK', 34);
INSERT INTO `bayi` VALUES (38, '0000-00-00', NULL, '0000-00-00', 'BELEK YAPI', 'BELEK', 34);
INSERT INTO `bayi` VALUES (39, '0000-00-00', NULL, '0000-00-00', 'BİR-G PANEL', 'BIRGP', 34);
INSERT INTO `bayi` VALUES (40, '0000-00-00', NULL, '0000-00-00', 'BİRİKİM YALITIM', 'BRKYL', 34);
INSERT INTO `bayi` VALUES (41, '0000-00-00', NULL, '0000-00-00', 'BURMAR', 'BURMR', 34);
INSERT INTO `bayi` VALUES (42, '0000-00-00', NULL, '0000-00-00', 'BÜYÜK İZOLASYON', 'BYKIZ', 34);
INSERT INTO `bayi` VALUES (43, '0000-00-00', NULL, '0000-00-00', 'BYKS', 'BYKS1', 34);
INSERT INTO `bayi` VALUES (44, '0000-00-00', NULL, '0000-00-00', 'ÇAYDAVUL', 'ÇAYDV', 34);
INSERT INTO `bayi` VALUES (45, '0000-00-00', NULL, '0000-00-00', 'ÇELİKELLER', 'CELEL', 34);
INSERT INTO `bayi` VALUES (46, '0000-00-00', NULL, '0000-00-00', 'DEKON', 'DEKON', 34);
INSERT INTO `bayi` VALUES (47, '0000-00-00', NULL, '0000-00-00', 'DEKOPAN', 'DEKPN', 34);
INSERT INTO `bayi` VALUES (48, '0000-00-00', NULL, '0000-00-00', 'DEMİRYÜREK', 'DEMYR', 34);
INSERT INTO `bayi` VALUES (49, '0000-00-00', NULL, '0000-00-00', 'DERYA İNŞAAT', 'DRYIN', 34);
INSERT INTO `bayi` VALUES (50, '0000-00-00', NULL, '0000-00-00', 'DETAY', 'DETAY', 34);
INSERT INTO `bayi` VALUES (51, '0000-00-00', NULL, '0000-00-00', 'DETAY AKUSTİK', 'DTYAK', 34);
INSERT INTO `bayi` VALUES (52, '0000-00-00', NULL, '0000-00-00', 'DETAY YAPI', 'DTYYP', 34);
INSERT INTO `bayi` VALUES (53, '0000-00-00', NULL, '0000-00-00', 'DK İNŞAAT', 'DKINS', 34);
INSERT INTO `bayi` VALUES (54, '0000-00-00', NULL, '0000-00-00', 'EBART', 'EBART', 34);
INSERT INTO `bayi` VALUES (55, '0000-00-00', NULL, '0000-00-00', 'EKSEN İNŞAAT', 'EKSIN', 34);
INSERT INTO `bayi` VALUES (56, '0000-00-00', NULL, '0000-00-00', 'EPAŞ', 'EPAŞ1', 34);
INSERT INTO `bayi` VALUES (57, '0000-00-00', NULL, '0000-00-00', 'ERCİ İNŞAAT', 'ERCII', 34);
INSERT INTO `bayi` VALUES (58, '0000-00-00', NULL, '0000-00-00', 'ER-SA', 'ERSA1', 34);
INSERT INTO `bayi` VALUES (59, '0000-00-00', NULL, '0000-00-00', 'EVRENSEL', 'EVRSL', 34);
INSERT INTO `bayi` VALUES (60, '0000-00-00', NULL, '0000-00-00', 'FAS - CMPE', 'FSCMP', 34);
INSERT INTO `bayi` VALUES (61, '0000-00-00', NULL, '0000-00-00', 'FORM AKUSTİK', 'FRMAK', 34);
INSERT INTO `bayi` VALUES (62, '0000-00-00', NULL, '0000-00-00', 'GÖKNUR', 'GOKNR', 34);
INSERT INTO `bayi` VALUES (63, '0000-00-00', NULL, '0000-00-00', 'GÖKSEL YAPI', 'GKSYP', 34);
INSERT INTO `bayi` VALUES (64, '0000-00-00', NULL, '0000-00-00', 'GÖLGE YAPI', 'GLGYP', 34);
INSERT INTO `bayi` VALUES (65, '0000-00-00', NULL, '0000-00-00', 'GÜLYAPAN', 'GLYPN', 34);
INSERT INTO `bayi` VALUES (66, '0000-00-00', NULL, '0000-00-00', 'GÜR-İŞ TİCARET', 'GRITC', 34);
INSERT INTO `bayi` VALUES (67, '0000-00-00', NULL, '0000-00-00', 'HAN YAPI', 'HNYAP', 34);
INSERT INTO `bayi` VALUES (68, '0000-00-00', NULL, '0000-00-00', 'HAYDAR BOZ', 'HYDBZ', 34);
INSERT INTO `bayi` VALUES (69, '0000-00-00', NULL, '0000-00-00', 'HEDEF KÖMÜR', 'HDFKM', 34);
INSERT INTO `bayi` VALUES (70, '0000-00-00', NULL, '0000-00-00', 'İLKE MAKİNE', 'ILKMK', 34);
INSERT INTO `bayi` VALUES (71, '0000-00-00', NULL, '0000-00-00', 'İMTAŞ', 'IMTAS', 34);
INSERT INTO `bayi` VALUES (72, '0000-00-00', NULL, '0000-00-00', 'İRDAŞ', 'IRDAS', 34);
INSERT INTO `bayi` VALUES (73, '0000-00-00', NULL, '0000-00-00', 'İZOGÜN', 'İZOGN', 34);
INSERT INTO `bayi` VALUES (74, '0000-00-00', NULL, '0000-00-00', 'İZOSTİL', 'İZSTL', 34);
INSERT INTO `bayi` VALUES (75, '0000-00-00', NULL, '0000-00-00', 'KAÇKAR', 'KACKR', 34);
INSERT INTO `bayi` VALUES (76, '0000-00-00', NULL, '0000-00-00', 'KARACAN YAPI', 'KRCYP', 34);
INSERT INTO `bayi` VALUES (77, '0000-00-00', NULL, '0000-00-00', 'KARAHAN İZOLASYON', 'KRHNİ', 34);
INSERT INTO `bayi` VALUES (78, '0000-00-00', NULL, '0000-00-00', 'KARAHANLAR', 'KRHNL', 34);
INSERT INTO `bayi` VALUES (79, '0000-00-00', NULL, '0000-00-00', 'KARYA İNŞAAT', 'KARYA', 34);
INSERT INTO `bayi` VALUES (80, '0000-00-00', NULL, '0000-00-00', 'KOÇTAŞ', 'KCTAS', 34);
INSERT INTO `bayi` VALUES (81, '0000-00-00', NULL, '0000-00-00', 'KONYIL', 'KONYL', 34);
INSERT INTO `bayi` VALUES (82, '0000-00-00', NULL, '0000-00-00', 'KÖKSAL KARDEŞLER', 'KOKSL', 34);
INSERT INTO `bayi` VALUES (83, '0000-00-00', NULL, '0000-00-00', 'LADİN YAPI', 'LDNYP', 34);
INSERT INTO `bayi` VALUES (84, '0000-00-00', NULL, '0000-00-00', 'LAMDA İNŞAAT', 'LAMDA', 34);
INSERT INTO `bayi` VALUES (85, '0000-00-00', NULL, '0000-00-00', 'LEONARDO', 'LNRDO', 34);
INSERT INTO `bayi` VALUES (86, '0000-00-00', NULL, '0000-00-00', 'LİV MARMARA', 'LİVMA', 34);
INSERT INTO `bayi` VALUES (87, '0000-00-00', NULL, '0000-00-00', 'MARTI YAPI', 'MARTI', 34);
INSERT INTO `bayi` VALUES (88, '0000-00-00', NULL, '0000-00-00', 'MATA YAPI', 'MATAY', 34);
INSERT INTO `bayi` VALUES (89, '0000-00-00', NULL, '0000-00-00', 'MDE İNŞAAT', 'MDEİN', 34);
INSERT INTO `bayi` VALUES (90, '0000-00-00', NULL, '0000-00-00', 'METEPAN', 'METEP', 34);
INSERT INTO `bayi` VALUES (91, '0000-00-00', NULL, '0000-00-00', 'NALBANTOĞLU', 'NLBNT', 34);
INSERT INTO `bayi` VALUES (92, '0000-00-00', NULL, '0000-00-00', 'NAZ YAPI', 'NAZYP', 34);
INSERT INTO `bayi` VALUES (93, '0000-00-00', NULL, '0000-00-00', 'NAZAR DEKORASYON', 'NAZAR', 34);
INSERT INTO `bayi` VALUES (94, '0000-00-00', NULL, '0000-00-00', 'NEYZEN', 'NEYZN', 34);
INSERT INTO `bayi` VALUES (95, '0000-00-00', NULL, '0000-00-00', 'NUR YAPI', 'NURYP', 34);
INSERT INTO `bayi` VALUES (96, '0000-00-00', NULL, '0000-00-00', 'ÖZGÜR İZOLASYON', 'OZGRI', 34);
INSERT INTO `bayi` VALUES (97, '0000-00-00', NULL, '0000-00-00', 'ÖZKARAOĞLU', 'ÖZKRO', 34);
INSERT INTO `bayi` VALUES (98, '0000-00-00', NULL, '0000-00-00', 'ÖZTOPÇU', 'OZTPC', 34);
INSERT INTO `bayi` VALUES (99, '0000-00-00', NULL, '0000-00-00', 'ÖZTÜRKLER', 'ÖZTKL', 34);
INSERT INTO `bayi` VALUES (100, '0000-00-00', NULL, '0000-00-00', 'PAYLAN', 'PAYLN', 34);
INSERT INTO `bayi` VALUES (101, '0000-00-00', NULL, '0000-00-00', 'PELENKOĞLU', 'PLNKO', 34);
INSERT INTO `bayi` VALUES (102, '0000-00-00', NULL, '0000-00-00', 'PENTA YALITIM', 'PENTA', 34);
INSERT INTO `bayi` VALUES (103, '0000-00-00', NULL, '0000-00-00', 'POTANSİYEL İNŞAAT', 'POINS', 34);
INSERT INTO `bayi` VALUES (104, '0000-00-00', NULL, '0000-00-00', 'PROMAK', 'PROMK', 34);
INSERT INTO `bayi` VALUES (105, '0000-00-00', NULL, '0000-00-00', 'RÖNESANS', 'RÖNSN', 34);
INSERT INTO `bayi` VALUES (106, '0000-00-00', NULL, '0000-00-00', 'SABAR', 'SABAR', 34);
INSERT INTO `bayi` VALUES (107, '0000-00-00', NULL, '0000-00-00', 'SAHİL DEKORASYON', 'SADEK', 34);
INSERT INTO `bayi` VALUES (108, '0000-00-00', NULL, '0000-00-00', 'SONGÜR YAPI', 'SNGRY', 34);
INSERT INTO `bayi` VALUES (109, '0000-00-00', NULL, '0000-00-00', 'ŞAHİN ALÇI', 'ŞHNAL', 34);
INSERT INTO `bayi` VALUES (110, '0000-00-00', NULL, '0000-00-00', 'ŞEMS METAL', 'SEMSM', 34);
INSERT INTO `bayi` VALUES (111, '0000-00-00', NULL, '0000-00-00', 'TACER', 'TACER', 34);
INSERT INTO `bayi` VALUES (112, '0000-00-00', NULL, '0000-00-00', 'TARHAN YAPI', 'TARHN', 34);
INSERT INTO `bayi` VALUES (113, '0000-00-00', NULL, '0000-00-00', 'TERZİOĞLU', 'TRZOG', 34);
INSERT INTO `bayi` VALUES (114, '0000-00-00', NULL, '0000-00-00', 'TOPAÇ METAL', 'TOPAÇ', 34);
INSERT INTO `bayi` VALUES (115, '0000-00-00', NULL, '0000-00-00', 'TOPRAK İNŞAAT', 'TPRKİ', 34);
INSERT INTO `bayi` VALUES (116, '0000-00-00', NULL, '0000-00-00', 'ÜSTÜNDAĞ', 'ÜSTND', 34);
INSERT INTO `bayi` VALUES (117, '0000-00-00', NULL, '0000-00-00', 'VEKTÖR TASARIM', 'VEKTR', 34);
INSERT INTO `bayi` VALUES (118, '0000-00-00', NULL, '0000-00-00', 'YAPIDEK', 'YPDEK', 34);
INSERT INTO `bayi` VALUES (119, '0000-00-00', NULL, '0000-00-00', 'YAPISAN', 'YPSAN', 34);
INSERT INTO `bayi` VALUES (120, '0000-00-00', NULL, '0000-00-00', 'YEKSAN', 'YKSAN', 34);
INSERT INTO `bayi` VALUES (121, '0000-00-00', NULL, '0000-00-00', 'YILDIZLAR İNŞAAT', 'YLDZİ', 34);
INSERT INTO `bayi` VALUES (122, '0000-00-00', NULL, '0000-00-00', 'YURT DIŞI - CEZAYİR', 'YDCZY', 34);
INSERT INTO `bayi` VALUES (123, '0000-00-00', NULL, '0000-00-00', 'ZERENOĞLU', 'ZEREN', 34);
INSERT INTO `bayi` VALUES (124, '0000-00-00', NULL, '0000-00-00', 'ELİZ YAPIŞKANLI BASNT', 'KKELİ', 34);

-- ----------------------------
-- Table structure for bolum
-- ----------------------------
DROP TABLE IF EXISTS `bolum`;
CREATE TABLE `bolum`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bolum_adi` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `bolum_yonetici` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `bolum_sikayet_alabilirlik` varchar(3) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bolum_urun_kaydedilebilirlik` varchar(3) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bolum_rengi` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `deleted_at` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bolum
-- ----------------------------
INSERT INTO `bolum` VALUES (3, 'ALÇIPAN', 'EREN KARACA', 'on', 'on', 'red', '2020-03-26', '2020-03-31', NULL);
INSERT INTO `bolum` VALUES (4, 'PROFİL', 'BÜLENT KARLI', 'on', 'on', 'blue', '2020-03-26', '2020-03-31', NULL);
INSERT INTO `bolum` VALUES (5, 'TÜREV', 'HİKMET YAVUZ', 'on', 'on', 'green', '2020-03-26', '2020-03-31', NULL);
INSERT INTO `bolum` VALUES (6, 'MARMORİT', 'TANER ÇİLİNGİR', 'on', 'on', 'purple', '2020-03-26', '2020-03-31', NULL);
INSERT INTO `bolum` VALUES (7, 'YÜKLEME', 'SİNAN TAŞ', 'on', NULL, 'orange', '2020-03-29', '2020-03-29', NULL);
INSERT INTO `bolum` VALUES (8, 'SEVKİYAT', 'ALİ CEYLAN', 'on', NULL, 'green-sea', '2020-03-26', '2020-03-26', NULL);
INSERT INTO `bolum` VALUES (9, 'KALİTE', 'SİNAN AYDOĞAN', NULL, NULL, 'gray', '2020-03-26', '2020-03-29', NULL);

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for media
-- ----------------------------
DROP TABLE IF EXISTS `media`;
CREATE TABLE `media`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL,
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `collection_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `mime_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `disk` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `conversions_disk` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `size` bigint(20) UNSIGNED NOT NULL,
  `manipulations` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `custom_properties` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `responsive_images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `order_column` int(10) UNSIGNED NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `media_model_type_model_id_index`(`model_type`, `model_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of media
-- ----------------------------
INSERT INTO `media` VALUES (7, 'App\\UrunModel', 41, '21af7fbb-b14c-421e-9612-75348e122108', 'urun', '2020-03-31 19_04_16-Microsoft Edge', '2020-03-31-19_04_16-Microsoft-Edge.png', 'image/png', 'media', 'media', 95771, '[]', '[]', '[]', 1, '2020-04-01 11:42:27', '2020-04-01 11:42:27');

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (1, '2014_10_12_000000_create_users_table', 1);
INSERT INTO `migrations` VALUES (2, '2014_10_12_100000_create_password_resets_table', 1);
INSERT INTO `migrations` VALUES (3, '2019_08_19_000000_create_failed_jobs_table', 1);
INSERT INTO `migrations` VALUES (4, '2020_04_01_092004_create_media_table', 2);

-- ----------------------------
-- Table structure for musterisikayeti
-- ----------------------------
DROP TABLE IF EXISTS `musterisikayeti`;
CREATE TABLE `musterisikayeti`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `updated_at` date NOT NULL,
  `deleted_at` date NOT NULL,
  `created_at` date NOT NULL,
  `musterisikayeti_kodu` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of musterisikayeti
-- ----------------------------

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets`  (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  INDEX `password_resets_email_index`(`email`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sayfa1
-- ----------------------------
DROP TABLE IF EXISTS `sayfa1`;
CREATE TABLE `sayfa1`  (
  `bayi_adi` varchar(21) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bayi_kodu` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bayi_il` int(2) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sayfa1
-- ----------------------------
INSERT INTO `sayfa1` VALUES ('ADESAN', 'ADESA', 34);
INSERT INTO `sayfa1` VALUES ('AFRİKA YAPI', 'AFRYP', 34);
INSERT INTO `sayfa1` VALUES ('AHL YAPI', 'AHLYP', 34);
INSERT INTO `sayfa1` VALUES ('AKAS YAPI', 'AKAYP', 34);
INSERT INTO `sayfa1` VALUES ('AKCAN YAPI MARKET', 'AKCYA', 34);
INSERT INTO `sayfa1` VALUES ('AKS İNŞAAT', 'AKSİN', 34);
INSERT INTO `sayfa1` VALUES ('ARTANLAR', 'ARTAN', 34);
INSERT INTO `sayfa1` VALUES ('AŞOĞLU', 'ASOGL', 34);
INSERT INTO `sayfa1` VALUES ('AYCAN BOYA', 'AYCBY', 34);
INSERT INTO `sayfa1` VALUES ('AYDINAY', 'AYDNY', 34);
INSERT INTO `sayfa1` VALUES ('AYDINLAR', 'AYDNL', 34);
INSERT INTO `sayfa1` VALUES ('BANDIRMA', 'BNDRM', 34);
INSERT INTO `sayfa1` VALUES ('BAROK', 'BAROK', 34);
INSERT INTO `sayfa1` VALUES ('BELEK YAPI', 'BELEK', 34);
INSERT INTO `sayfa1` VALUES ('BİR-G PANEL', 'BIRGP', 34);
INSERT INTO `sayfa1` VALUES ('BİRİKİM YALITIM', 'BRKYL', 34);
INSERT INTO `sayfa1` VALUES ('BURMAR', 'BURMR', 34);
INSERT INTO `sayfa1` VALUES ('BÜYÜK İZOLASYON', 'BYKIZ', 34);
INSERT INTO `sayfa1` VALUES ('BYKS', 'BYKS1', 34);
INSERT INTO `sayfa1` VALUES ('ÇAYDAVUL', 'ÇAYDV', 34);
INSERT INTO `sayfa1` VALUES ('ÇELİKELLER', 'CELEL', 34);
INSERT INTO `sayfa1` VALUES ('DEKON', 'DEKON', 34);
INSERT INTO `sayfa1` VALUES ('DEKOPAN', 'DEKPN', 34);
INSERT INTO `sayfa1` VALUES ('DEMİRYÜREK', 'DEMYR', 34);
INSERT INTO `sayfa1` VALUES ('DERYA İNŞAAT', 'DRYIN', 34);
INSERT INTO `sayfa1` VALUES ('DETAY', 'DETAY', 34);
INSERT INTO `sayfa1` VALUES ('DETAY AKUSTİK', 'DTYAK', 34);
INSERT INTO `sayfa1` VALUES ('DETAY YAPI', 'DTYYP', 34);
INSERT INTO `sayfa1` VALUES ('DK İNŞAAT', 'DKINS', 34);
INSERT INTO `sayfa1` VALUES ('EBART', 'EBART', 34);
INSERT INTO `sayfa1` VALUES ('EKSEN İNŞAAT', 'EKSIN', 34);
INSERT INTO `sayfa1` VALUES ('EPAŞ', 'EPAŞ1', 34);
INSERT INTO `sayfa1` VALUES ('ERCİ İNŞAAT', 'ERCII', 34);
INSERT INTO `sayfa1` VALUES ('ER-SA', 'ERSA1', 34);
INSERT INTO `sayfa1` VALUES ('EVRENSEL', 'EVRSL', 34);
INSERT INTO `sayfa1` VALUES ('FAS - CMPE', 'FSCMP', 34);
INSERT INTO `sayfa1` VALUES ('FORM AKUSTİK', 'FRMAK', 34);
INSERT INTO `sayfa1` VALUES ('GÖKNUR', 'GOKNR', 34);
INSERT INTO `sayfa1` VALUES ('GÖKSEL YAPI', 'GKSYP', 34);
INSERT INTO `sayfa1` VALUES ('GÖLGE YAPI', 'GLGYP', 34);
INSERT INTO `sayfa1` VALUES ('GÜLYAPAN', 'GLYPN', 34);
INSERT INTO `sayfa1` VALUES ('GÜR-İŞ TİCARET', 'GRITC', 34);
INSERT INTO `sayfa1` VALUES ('HAN YAPI', 'HNYAP', 34);
INSERT INTO `sayfa1` VALUES ('HAYDAR BOZ', 'HYDBZ', 34);
INSERT INTO `sayfa1` VALUES ('HEDEF KÖMÜR', 'HDFKM', 34);
INSERT INTO `sayfa1` VALUES ('İLKE MAKİNE', 'ILKMK', 34);
INSERT INTO `sayfa1` VALUES ('İMTAŞ', 'IMTAS', 34);
INSERT INTO `sayfa1` VALUES ('İRDAŞ', 'IRDAS', 34);
INSERT INTO `sayfa1` VALUES ('İZOGÜN', 'İZOGN', 34);
INSERT INTO `sayfa1` VALUES ('İZOSTİL', 'İZSTL', 34);
INSERT INTO `sayfa1` VALUES ('KAÇKAR', 'KACKR', 34);
INSERT INTO `sayfa1` VALUES ('KARACAN YAPI', 'KRCYP', 34);
INSERT INTO `sayfa1` VALUES ('KARAHAN İZOLASYON', 'KRHNİ', 34);
INSERT INTO `sayfa1` VALUES ('KARAHANLAR', 'KRHNL', 34);
INSERT INTO `sayfa1` VALUES ('KARYA İNŞAAT', 'KARYA', 34);
INSERT INTO `sayfa1` VALUES ('KOÇTAŞ', 'KCTAS', 34);
INSERT INTO `sayfa1` VALUES ('KONYIL', 'KONYL', 34);
INSERT INTO `sayfa1` VALUES ('KÖKSAL KARDEŞLER', 'KOKSL', 34);
INSERT INTO `sayfa1` VALUES ('LADİN YAPI', 'LDNYP', 34);
INSERT INTO `sayfa1` VALUES ('LAMDA İNŞAAT', 'LAMDA', 34);
INSERT INTO `sayfa1` VALUES ('LEONARDO', 'LNRDO', 34);
INSERT INTO `sayfa1` VALUES ('LİV MARMARA', 'LİVMA', 34);
INSERT INTO `sayfa1` VALUES ('MARTI YAPI', 'MARTI', 34);
INSERT INTO `sayfa1` VALUES ('MATA YAPI', 'MATAY', 34);
INSERT INTO `sayfa1` VALUES ('MDE İNŞAAT', 'MDEİN', 34);
INSERT INTO `sayfa1` VALUES ('METEPAN', 'METEP', 34);
INSERT INTO `sayfa1` VALUES ('NALBANTOĞLU', 'NLBNT', 34);
INSERT INTO `sayfa1` VALUES ('NAZ YAPI', 'NAZYP', 34);
INSERT INTO `sayfa1` VALUES ('NAZAR DEKORASYON', 'NAZAR', 34);
INSERT INTO `sayfa1` VALUES ('NEYZEN', 'NEYZN', 34);
INSERT INTO `sayfa1` VALUES ('NUR YAPI', 'NURYP', 34);
INSERT INTO `sayfa1` VALUES ('ÖZGÜR İZOLASYON', 'OZGRI', 34);
INSERT INTO `sayfa1` VALUES ('ÖZKARAOĞLU', 'ÖZKRO', 34);
INSERT INTO `sayfa1` VALUES ('ÖZTOPÇU', 'OZTPC', 34);
INSERT INTO `sayfa1` VALUES ('ÖZTÜRKLER', 'ÖZTKL', 34);
INSERT INTO `sayfa1` VALUES ('PAYLAN', 'PAYLN', 34);
INSERT INTO `sayfa1` VALUES ('PELENKOĞLU', 'PLNKO', 34);
INSERT INTO `sayfa1` VALUES ('PENTA YALITIM', 'PENTA', 34);
INSERT INTO `sayfa1` VALUES ('POTANSİYEL İNŞAAT', 'POINS', 34);
INSERT INTO `sayfa1` VALUES ('PROMAK', 'PROMK', 34);
INSERT INTO `sayfa1` VALUES ('RÖNESANS', 'RÖNSN', 34);
INSERT INTO `sayfa1` VALUES ('SABAR', 'SABAR', 34);
INSERT INTO `sayfa1` VALUES ('SAHİL DEKORASYON', 'SADEK', 34);
INSERT INTO `sayfa1` VALUES ('SONGÜR YAPI', 'SNGRY', 34);
INSERT INTO `sayfa1` VALUES ('ŞAHİN ALÇI', 'ŞHNAL', 34);
INSERT INTO `sayfa1` VALUES ('ŞEMS METAL', 'SEMSM', 34);
INSERT INTO `sayfa1` VALUES ('TACER', 'TACER', 34);
INSERT INTO `sayfa1` VALUES ('TARHAN YAPI', 'TARHN', 34);
INSERT INTO `sayfa1` VALUES ('TERZİOĞLU', 'TRZOG', 34);
INSERT INTO `sayfa1` VALUES ('TOPAÇ METAL', 'TOPAÇ', 34);
INSERT INTO `sayfa1` VALUES ('TOPRAK İNŞAAT', 'TPRKİ', 34);
INSERT INTO `sayfa1` VALUES ('ÜSTÜNDAĞ', 'ÜSTND', 34);
INSERT INTO `sayfa1` VALUES ('VEKTÖR TASARIM', 'VEKTR', 34);
INSERT INTO `sayfa1` VALUES ('YAPIDEK', 'YPDEK', 34);
INSERT INTO `sayfa1` VALUES ('YAPISAN', 'YPSAN', 34);
INSERT INTO `sayfa1` VALUES ('YEKSAN', 'YKSAN', 34);
INSERT INTO `sayfa1` VALUES ('YILDIZLAR İNŞAAT', 'YLDZİ', 34);
INSERT INTO `sayfa1` VALUES ('YURT DIŞI - CEZAYİR', 'YDCZY', 34);
INSERT INTO `sayfa1` VALUES ('ZERENOĞLU', 'ZEREN', 34);
INSERT INTO `sayfa1` VALUES ('ELİZ YAPIŞKANLI BASNT', 'KKELİ', 34);
INSERT INTO `sayfa1` VALUES ('ADESAN', 'ADESA', 34);
INSERT INTO `sayfa1` VALUES ('AFRİKA YAPI', 'AFRYP', 34);
INSERT INTO `sayfa1` VALUES ('AHL YAPI', 'AHLYP', 34);
INSERT INTO `sayfa1` VALUES ('AKAS YAPI', 'AKAYP', 34);
INSERT INTO `sayfa1` VALUES ('AKCAN YAPI MARKET', 'AKCYA', 34);
INSERT INTO `sayfa1` VALUES ('AKS İNŞAAT', 'AKSİN', 34);
INSERT INTO `sayfa1` VALUES ('ARTANLAR', 'ARTAN', 34);
INSERT INTO `sayfa1` VALUES ('AŞOĞLU', 'ASOGL', 34);
INSERT INTO `sayfa1` VALUES ('AYCAN BOYA', 'AYCBY', 34);
INSERT INTO `sayfa1` VALUES ('AYDINAY', 'AYDNY', 34);
INSERT INTO `sayfa1` VALUES ('AYDINLAR', 'AYDNL', 34);
INSERT INTO `sayfa1` VALUES ('BANDIRMA', 'BNDRM', 34);
INSERT INTO `sayfa1` VALUES ('BAROK', 'BAROK', 34);
INSERT INTO `sayfa1` VALUES ('BELEK YAPI', 'BELEK', 34);
INSERT INTO `sayfa1` VALUES ('BİR-G PANEL', 'BIRGP', 34);
INSERT INTO `sayfa1` VALUES ('BİRİKİM YALITIM', 'BRKYL', 34);
INSERT INTO `sayfa1` VALUES ('BURMAR', 'BURMR', 34);
INSERT INTO `sayfa1` VALUES ('BÜYÜK İZOLASYON', 'BYKIZ', 34);
INSERT INTO `sayfa1` VALUES ('BYKS', 'BYKS1', 34);
INSERT INTO `sayfa1` VALUES ('ÇAYDAVUL', 'ÇAYDV', 34);
INSERT INTO `sayfa1` VALUES ('ÇELİKELLER', 'CELEL', 34);
INSERT INTO `sayfa1` VALUES ('DEKON', 'DEKON', 34);
INSERT INTO `sayfa1` VALUES ('DEKOPAN', 'DEKPN', 34);
INSERT INTO `sayfa1` VALUES ('DEMİRYÜREK', 'DEMYR', 34);
INSERT INTO `sayfa1` VALUES ('DERYA İNŞAAT', 'DRYIN', 34);
INSERT INTO `sayfa1` VALUES ('DETAY', 'DETAY', 34);
INSERT INTO `sayfa1` VALUES ('DETAY AKUSTİK', 'DTYAK', 34);
INSERT INTO `sayfa1` VALUES ('DETAY YAPI', 'DTYYP', 34);
INSERT INTO `sayfa1` VALUES ('DK İNŞAAT', 'DKINS', 34);
INSERT INTO `sayfa1` VALUES ('EBART', 'EBART', 34);
INSERT INTO `sayfa1` VALUES ('EKSEN İNŞAAT', 'EKSIN', 34);
INSERT INTO `sayfa1` VALUES ('EPAŞ', 'EPAŞ1', 34);
INSERT INTO `sayfa1` VALUES ('ERCİ İNŞAAT', 'ERCII', 34);
INSERT INTO `sayfa1` VALUES ('ER-SA', 'ERSA1', 34);
INSERT INTO `sayfa1` VALUES ('EVRENSEL', 'EVRSL', 34);
INSERT INTO `sayfa1` VALUES ('FAS - CMPE', 'FSCMP', 34);
INSERT INTO `sayfa1` VALUES ('FORM AKUSTİK', 'FRMAK', 34);
INSERT INTO `sayfa1` VALUES ('GÖKNUR', 'GOKNR', 34);
INSERT INTO `sayfa1` VALUES ('GÖKSEL YAPI', 'GKSYP', 34);
INSERT INTO `sayfa1` VALUES ('GÖLGE YAPI', 'GLGYP', 34);
INSERT INTO `sayfa1` VALUES ('GÜLYAPAN', 'GLYPN', 34);
INSERT INTO `sayfa1` VALUES ('GÜR-İŞ TİCARET', 'GRITC', 34);
INSERT INTO `sayfa1` VALUES ('HAN YAPI', 'HNYAP', 34);
INSERT INTO `sayfa1` VALUES ('HAYDAR BOZ', 'HYDBZ', 34);
INSERT INTO `sayfa1` VALUES ('HEDEF KÖMÜR', 'HDFKM', 34);
INSERT INTO `sayfa1` VALUES ('İLKE MAKİNE', 'ILKMK', 34);
INSERT INTO `sayfa1` VALUES ('İMTAŞ', 'IMTAS', 34);
INSERT INTO `sayfa1` VALUES ('İRDAŞ', 'IRDAS', 34);
INSERT INTO `sayfa1` VALUES ('İZOGÜN', 'İZOGN', 34);
INSERT INTO `sayfa1` VALUES ('İZOSTİL', 'İZSTL', 34);
INSERT INTO `sayfa1` VALUES ('KAÇKAR', 'KACKR', 34);
INSERT INTO `sayfa1` VALUES ('KARACAN YAPI', 'KRCYP', 34);
INSERT INTO `sayfa1` VALUES ('KARAHAN İZOLASYON', 'KRHNİ', 34);
INSERT INTO `sayfa1` VALUES ('KARAHANLAR', 'KRHNL', 34);
INSERT INTO `sayfa1` VALUES ('KARYA İNŞAAT', 'KARYA', 34);
INSERT INTO `sayfa1` VALUES ('KOÇTAŞ', 'KCTAS', 34);
INSERT INTO `sayfa1` VALUES ('KONYIL', 'KONYL', 34);
INSERT INTO `sayfa1` VALUES ('KÖKSAL KARDEŞLER', 'KOKSL', 34);
INSERT INTO `sayfa1` VALUES ('LADİN YAPI', 'LDNYP', 34);
INSERT INTO `sayfa1` VALUES ('LAMDA İNŞAAT', 'LAMDA', 34);
INSERT INTO `sayfa1` VALUES ('LEONARDO', 'LNRDO', 34);
INSERT INTO `sayfa1` VALUES ('LİV MARMARA', 'LİVMA', 34);
INSERT INTO `sayfa1` VALUES ('MARTI YAPI', 'MARTI', 34);
INSERT INTO `sayfa1` VALUES ('MATA YAPI', 'MATAY', 34);
INSERT INTO `sayfa1` VALUES ('MDE İNŞAAT', 'MDEİN', 34);
INSERT INTO `sayfa1` VALUES ('METEPAN', 'METEP', 34);
INSERT INTO `sayfa1` VALUES ('NALBANTOĞLU', 'NLBNT', 34);
INSERT INTO `sayfa1` VALUES ('NAZ YAPI', 'NAZYP', 34);
INSERT INTO `sayfa1` VALUES ('NAZAR DEKORASYON', 'NAZAR', 34);
INSERT INTO `sayfa1` VALUES ('NEYZEN', 'NEYZN', 34);
INSERT INTO `sayfa1` VALUES ('NUR YAPI', 'NURYP', 34);
INSERT INTO `sayfa1` VALUES ('ÖZGÜR İZOLASYON', 'OZGRI', 34);
INSERT INTO `sayfa1` VALUES ('ÖZKARAOĞLU', 'ÖZKRO', 34);
INSERT INTO `sayfa1` VALUES ('ÖZTOPÇU', 'OZTPC', 34);
INSERT INTO `sayfa1` VALUES ('ÖZTÜRKLER', 'ÖZTKL', 34);
INSERT INTO `sayfa1` VALUES ('PAYLAN', 'PAYLN', 34);
INSERT INTO `sayfa1` VALUES ('PELENKOĞLU', 'PLNKO', 34);
INSERT INTO `sayfa1` VALUES ('PENTA YALITIM', 'PENTA', 34);
INSERT INTO `sayfa1` VALUES ('POTANSİYEL İNŞAAT', 'POINS', 34);
INSERT INTO `sayfa1` VALUES ('PROMAK', 'PROMK', 34);
INSERT INTO `sayfa1` VALUES ('RÖNESANS', 'RÖNSN', 34);
INSERT INTO `sayfa1` VALUES ('SABAR', 'SABAR', 34);
INSERT INTO `sayfa1` VALUES ('SAHİL DEKORASYON', 'SADEK', 34);
INSERT INTO `sayfa1` VALUES ('SONGÜR YAPI', 'SNGRY', 34);
INSERT INTO `sayfa1` VALUES ('ŞAHİN ALÇI', 'ŞHNAL', 34);
INSERT INTO `sayfa1` VALUES ('ŞEMS METAL', 'SEMSM', 34);
INSERT INTO `sayfa1` VALUES ('TACER', 'TACER', 34);
INSERT INTO `sayfa1` VALUES ('TARHAN YAPI', 'TARHN', 34);
INSERT INTO `sayfa1` VALUES ('TERZİOĞLU', 'TRZOG', 34);
INSERT INTO `sayfa1` VALUES ('TOPAÇ METAL', 'TOPAÇ', 34);
INSERT INTO `sayfa1` VALUES ('TOPRAK İNŞAAT', 'TPRKİ', 34);
INSERT INTO `sayfa1` VALUES ('ÜSTÜNDAĞ', 'ÜSTND', 34);
INSERT INTO `sayfa1` VALUES ('VEKTÖR TASARIM', 'VEKTR', 34);
INSERT INTO `sayfa1` VALUES ('YAPIDEK', 'YPDEK', 34);
INSERT INTO `sayfa1` VALUES ('YAPISAN', 'YPSAN', 34);
INSERT INTO `sayfa1` VALUES ('YEKSAN', 'YKSAN', 34);
INSERT INTO `sayfa1` VALUES ('YILDIZLAR İNŞAAT', 'YLDZİ', 34);
INSERT INTO `sayfa1` VALUES ('YURT DIŞI - CEZAYİR', 'YDCZY', 34);
INSERT INTO `sayfa1` VALUES ('ZERENOĞLU', 'ZEREN', 34);
INSERT INTO `sayfa1` VALUES ('ELİZ YAPIŞKANLI BASNT', 'KKELİ', 34);
INSERT INTO `sayfa1` VALUES ('ADESAN', 'ADESA', 34);
INSERT INTO `sayfa1` VALUES ('AFRİKA YAPI', 'AFRYP', 34);
INSERT INTO `sayfa1` VALUES ('AHL YAPI', 'AHLYP', 34);
INSERT INTO `sayfa1` VALUES ('AKAS YAPI', 'AKAYP', 34);
INSERT INTO `sayfa1` VALUES ('AKCAN YAPI MARKET', 'AKCYA', 34);
INSERT INTO `sayfa1` VALUES ('AKS İNŞAAT', 'AKSİN', 34);
INSERT INTO `sayfa1` VALUES ('ARTANLAR', 'ARTAN', 34);
INSERT INTO `sayfa1` VALUES ('AŞOĞLU', 'ASOGL', 34);
INSERT INTO `sayfa1` VALUES ('AYCAN BOYA', 'AYCBY', 34);
INSERT INTO `sayfa1` VALUES ('AYDINAY', 'AYDNY', 34);
INSERT INTO `sayfa1` VALUES ('AYDINLAR', 'AYDNL', 34);
INSERT INTO `sayfa1` VALUES ('BANDIRMA', 'BNDRM', 34);
INSERT INTO `sayfa1` VALUES ('BAROK', 'BAROK', 34);
INSERT INTO `sayfa1` VALUES ('BELEK YAPI', 'BELEK', 34);
INSERT INTO `sayfa1` VALUES ('BİR-G PANEL', 'BIRGP', 34);
INSERT INTO `sayfa1` VALUES ('BİRİKİM YALITIM', 'BRKYL', 34);
INSERT INTO `sayfa1` VALUES ('BURMAR', 'BURMR', 34);
INSERT INTO `sayfa1` VALUES ('BÜYÜK İZOLASYON', 'BYKIZ', 34);
INSERT INTO `sayfa1` VALUES ('BYKS', 'BYKS1', 34);
INSERT INTO `sayfa1` VALUES ('ÇAYDAVUL', 'ÇAYDV', 34);
INSERT INTO `sayfa1` VALUES ('ÇELİKELLER', 'CELEL', 34);
INSERT INTO `sayfa1` VALUES ('DEKON', 'DEKON', 34);
INSERT INTO `sayfa1` VALUES ('DEKOPAN', 'DEKPN', 34);
INSERT INTO `sayfa1` VALUES ('DEMİRYÜREK', 'DEMYR', 34);
INSERT INTO `sayfa1` VALUES ('DERYA İNŞAAT', 'DRYIN', 34);
INSERT INTO `sayfa1` VALUES ('DETAY', 'DETAY', 34);
INSERT INTO `sayfa1` VALUES ('DETAY AKUSTİK', 'DTYAK', 34);
INSERT INTO `sayfa1` VALUES ('DETAY YAPI', 'DTYYP', 34);
INSERT INTO `sayfa1` VALUES ('DK İNŞAAT', 'DKINS', 34);
INSERT INTO `sayfa1` VALUES ('EBART', 'EBART', 34);
INSERT INTO `sayfa1` VALUES ('EKSEN İNŞAAT', 'EKSIN', 34);
INSERT INTO `sayfa1` VALUES ('EPAŞ', 'EPAŞ1', 34);
INSERT INTO `sayfa1` VALUES ('ERCİ İNŞAAT', 'ERCII', 34);
INSERT INTO `sayfa1` VALUES ('ER-SA', 'ERSA1', 34);
INSERT INTO `sayfa1` VALUES ('EVRENSEL', 'EVRSL', 34);
INSERT INTO `sayfa1` VALUES ('FAS - CMPE', 'FSCMP', 34);
INSERT INTO `sayfa1` VALUES ('FORM AKUSTİK', 'FRMAK', 34);
INSERT INTO `sayfa1` VALUES ('GÖKNUR', 'GOKNR', 34);
INSERT INTO `sayfa1` VALUES ('GÖKSEL YAPI', 'GKSYP', 34);
INSERT INTO `sayfa1` VALUES ('GÖLGE YAPI', 'GLGYP', 34);
INSERT INTO `sayfa1` VALUES ('GÜLYAPAN', 'GLYPN', 34);
INSERT INTO `sayfa1` VALUES ('GÜR-İŞ TİCARET', 'GRITC', 34);
INSERT INTO `sayfa1` VALUES ('HAN YAPI', 'HNYAP', 34);
INSERT INTO `sayfa1` VALUES ('HAYDAR BOZ', 'HYDBZ', 34);
INSERT INTO `sayfa1` VALUES ('HEDEF KÖMÜR', 'HDFKM', 34);
INSERT INTO `sayfa1` VALUES ('İLKE MAKİNE', 'ILKMK', 34);
INSERT INTO `sayfa1` VALUES ('İMTAŞ', 'IMTAS', 34);
INSERT INTO `sayfa1` VALUES ('İRDAŞ', 'IRDAS', 34);
INSERT INTO `sayfa1` VALUES ('İZOGÜN', 'İZOGN', 34);
INSERT INTO `sayfa1` VALUES ('İZOSTİL', 'İZSTL', 34);
INSERT INTO `sayfa1` VALUES ('KAÇKAR', 'KACKR', 34);
INSERT INTO `sayfa1` VALUES ('KARACAN YAPI', 'KRCYP', 34);
INSERT INTO `sayfa1` VALUES ('KARAHAN İZOLASYON', 'KRHNİ', 34);
INSERT INTO `sayfa1` VALUES ('KARAHANLAR', 'KRHNL', 34);
INSERT INTO `sayfa1` VALUES ('KARYA İNŞAAT', 'KARYA', 34);
INSERT INTO `sayfa1` VALUES ('KOÇTAŞ', 'KCTAS', 34);
INSERT INTO `sayfa1` VALUES ('KONYIL', 'KONYL', 34);
INSERT INTO `sayfa1` VALUES ('KÖKSAL KARDEŞLER', 'KOKSL', 34);
INSERT INTO `sayfa1` VALUES ('LADİN YAPI', 'LDNYP', 34);
INSERT INTO `sayfa1` VALUES ('LAMDA İNŞAAT', 'LAMDA', 34);
INSERT INTO `sayfa1` VALUES ('LEONARDO', 'LNRDO', 34);
INSERT INTO `sayfa1` VALUES ('LİV MARMARA', 'LİVMA', 34);
INSERT INTO `sayfa1` VALUES ('MARTI YAPI', 'MARTI', 34);
INSERT INTO `sayfa1` VALUES ('MATA YAPI', 'MATAY', 34);
INSERT INTO `sayfa1` VALUES ('MDE İNŞAAT', 'MDEİN', 34);
INSERT INTO `sayfa1` VALUES ('METEPAN', 'METEP', 34);
INSERT INTO `sayfa1` VALUES ('NALBANTOĞLU', 'NLBNT', 34);
INSERT INTO `sayfa1` VALUES ('NAZ YAPI', 'NAZYP', 34);
INSERT INTO `sayfa1` VALUES ('NAZAR DEKORASYON', 'NAZAR', 34);
INSERT INTO `sayfa1` VALUES ('NEYZEN', 'NEYZN', 34);
INSERT INTO `sayfa1` VALUES ('NUR YAPI', 'NURYP', 34);
INSERT INTO `sayfa1` VALUES ('ÖZGÜR İZOLASYON', 'OZGRI', 34);
INSERT INTO `sayfa1` VALUES ('ÖZKARAOĞLU', 'ÖZKRO', 34);
INSERT INTO `sayfa1` VALUES ('ÖZTOPÇU', 'OZTPC', 34);
INSERT INTO `sayfa1` VALUES ('ÖZTÜRKLER', 'ÖZTKL', 34);
INSERT INTO `sayfa1` VALUES ('PAYLAN', 'PAYLN', 34);
INSERT INTO `sayfa1` VALUES ('PELENKOĞLU', 'PLNKO', 34);
INSERT INTO `sayfa1` VALUES ('PENTA YALITIM', 'PENTA', 34);
INSERT INTO `sayfa1` VALUES ('POTANSİYEL İNŞAAT', 'POINS', 34);
INSERT INTO `sayfa1` VALUES ('PROMAK', 'PROMK', 34);
INSERT INTO `sayfa1` VALUES ('RÖNESANS', 'RÖNSN', 34);
INSERT INTO `sayfa1` VALUES ('SABAR', 'SABAR', 34);
INSERT INTO `sayfa1` VALUES ('SAHİL DEKORASYON', 'SADEK', 34);
INSERT INTO `sayfa1` VALUES ('SONGÜR YAPI', 'SNGRY', 34);
INSERT INTO `sayfa1` VALUES ('ŞAHİN ALÇI', 'ŞHNAL', 34);
INSERT INTO `sayfa1` VALUES ('ŞEMS METAL', 'SEMSM', 34);
INSERT INTO `sayfa1` VALUES ('TACER', 'TACER', 34);
INSERT INTO `sayfa1` VALUES ('TARHAN YAPI', 'TARHN', 34);
INSERT INTO `sayfa1` VALUES ('TERZİOĞLU', 'TRZOG', 34);
INSERT INTO `sayfa1` VALUES ('TOPAÇ METAL', 'TOPAÇ', 34);
INSERT INTO `sayfa1` VALUES ('TOPRAK İNŞAAT', 'TPRKİ', 34);
INSERT INTO `sayfa1` VALUES ('ÜSTÜNDAĞ', 'ÜSTND', 34);
INSERT INTO `sayfa1` VALUES ('VEKTÖR TASARIM', 'VEKTR', 34);
INSERT INTO `sayfa1` VALUES ('YAPIDEK', 'YPDEK', 34);
INSERT INTO `sayfa1` VALUES ('YAPISAN', 'YPSAN', 34);
INSERT INTO `sayfa1` VALUES ('YEKSAN', 'YKSAN', 34);
INSERT INTO `sayfa1` VALUES ('YILDIZLAR İNŞAAT', 'YLDZİ', 34);
INSERT INTO `sayfa1` VALUES ('YURT DIŞI - CEZAYİR', 'YDCZY', 34);
INSERT INTO `sayfa1` VALUES ('ZERENOĞLU', 'ZEREN', 34);
INSERT INTO `sayfa1` VALUES ('ELİZ YAPIŞKANLI BASNT', 'KKELİ', 34);

-- ----------------------------
-- Table structure for sikayetturu
-- ----------------------------
DROP TABLE IF EXISTS `sikayetturu`;
CREATE TABLE `sikayetturu`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `sikayet_turu_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sikayet_turu_adi` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sikayet_turu_bolum` int(5) NULL DEFAULT NULL,
  `sikayet_turu_urunler` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `deleted_at` date NULL DEFAULT NULL,
  `sikayet_turu_kaynak` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sikayet_turu_oneri` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 250 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sikayetturu
-- ----------------------------
INSERT INTO `sikayetturu` VALUES (155, 'MRT-01', 'HELEZON AŞINMASI', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Yanlış helezon tipi şeçimi, üründe kalın taş olması.', NULL);
INSERT INTO `sikayetturu` VALUES (156, 'MRT-02', 'ÇATLAMA', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Hızlı su çeken etmenlerin varlığı (yanmış tuğla, hava sirkülasyonu, ürünün su tutma özelliğinin az olması)', NULL);
INSERT INTO `sikayetturu` VALUES (157, 'MRT-03', 'DÖKÜLME', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Kirli, aşırı nemli veya hızlı su emen yüzeye ürünü uygulama sonucunda ürünün yanması veya ürünün yapışma özelliğinin az olması. Aşırı sulu uygulama.', NULL);
INSERT INTO `sikayetturu` VALUES (158, 'MRT-04', 'ERKEN DONMA', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Alt zeminin hızlı su emmesi veya yoğun hava sirkülasyonu veya ürünün donma değerinin düşük olması.', NULL);
INSERT INTO `sikayetturu` VALUES (159, 'MRT-05', 'GEÇ DONMA', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Aşırı sulu ürün uygulaması veya zeminin gereğinden fazla ıslatılması veya ürünün donma değerinin yüksek olması.', NULL);
INSERT INTO `sikayetturu` VALUES (160, 'MRT-06', 'HORTUM TIKANMASI', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Makina su girişleri, filtresinin arızalı olması, önceki uygulamadan hortumda pislik kalması veya çok kalın ürün.', NULL);
INSERT INTO `sikayetturu` VALUES (161, 'MRT-07', 'YÜZEYDEN AKMA', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Alt zeminin gereğinden fazla nemlendirilmesi, yüzeyinde yabancı madde (yağ,kir,pürüzsüzlük) bulunması veya su oranının ayarlanmaması.', NULL);
INSERT INTO `sikayetturu` VALUES (162, 'MRT-08', 'KIVAM PROBLEMİ', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Su oranının ayarlanamaması.', NULL);
INSERT INTO `sikayetturu` VALUES (163, 'MRT-09', 'HORTUMDA DONMA', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Makinayı erken çalıştırma ama uygulamayı geç yapma. Malzemeyi hortumda bırakma, temizlememe.', NULL);
INSERT INTO `sikayetturu` VALUES (164, 'MRT-10', 'MASTARDA YIĞILMA', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Ürünün 2.mastara gelmemesi, donma süresinin yüksek olması veya 2.mastar için acele edilmesi.', NULL);
INSERT INTO `sikayetturu` VALUES (165, 'MRT-11', 'KEPERME', 6, NULL, '0000-00-00', '0000-00-00', NULL, '2.mastarın geç çekilmesi veya ürünün donma süresinin düşük olması.', NULL);
INSERT INTO `sikayetturu` VALUES (166, 'MRT-12', 'ÇİZME', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Ürünü karıştırma sırasında yabancı madde karışması, kirli el aleti kullanımı veya üründe kaba taş bulunması.', NULL);
INSERT INTO `sikayetturu` VALUES (167, 'MRT-13', 'RENK FARKI', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Bölgesel farklılıklar, her fabrikanın ürünü farklı renktedir.', NULL);
INSERT INTO `sikayetturu` VALUES (168, 'MRT-14', 'TAŞLAŞMA', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Ürünün stoklanırken veya taşınırkan ıslanması.', NULL);
INSERT INTO `sikayetturu` VALUES (169, 'MRT-15', 'YABANCI CİSİM', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Hiç açılmadık paketten yabancı cisim çıkıyorsa fabrika problemidir.', NULL);
INSERT INTO `sikayetturu` VALUES (170, 'MRT-16', 'YAPIŞTIRMAMA (YAPIŞTIRICILAR)', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Uygulama yüzeyinin uygunsuz, kirli olması veya harcın geç uygulanması veya ürünün yapııştırma özelliğinin düşük olması.', NULL);
INSERT INTO `sikayetturu` VALUES (171, 'MRT-17', 'KALİTESİZ SON YÜZEY', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Geç kalınmış sonlandırma veya üründe kaba taş olması.', NULL);
INSERT INTO `sikayetturu` VALUES (172, 'MRT-18', 'MAKİNANIN KURU SULU ATMASI', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Makina helezon veya elektrik sistemi arızası.', NULL);
INSERT INTO `sikayetturu` VALUES (173, 'MRT-19', 'SU ORANI TUTMAMASI', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Makina su girişleri, filtreleri ve elektrik akımı problemi veya uygulama hatası.', NULL);
INSERT INTO `sikayetturu` VALUES (174, 'MRT-20', 'YÜKSEK SARFİYAT', 6, NULL, '0000-00-00', '0000-00-00', NULL, 'Uygulama hatası.', NULL);
INSERT INTO `sikayetturu` VALUES (175, 'ALÇ-1', 'ALÇILI YÜZEYLER', 3, '1,2,3,4,5,6,7,8,9,10', '0000-00-00', '2020-04-02', NULL, 'Üretim hattı hatası.', NULL);
INSERT INTO `sikayetturu` VALUES (176, 'ALÇ-2', 'BOMBE', 3, NULL, '0000-00-00', '0000-00-00', NULL, 'Üretim hattı hatası.', NULL);
INSERT INTO `sikayetturu` VALUES (177, 'ALÇ-3', 'BOYUT PROBLEMİ', 3, NULL, '0000-00-00', '0000-00-00', NULL, 'Traşlama veya makas problemi hatası.', NULL);
INSERT INTO `sikayetturu` VALUES (178, 'ALÇ-4', 'İZ - ARKA YÜZEY', 3, NULL, '0000-00-00', '0000-00-00', NULL, 'Rulolarda yabancı cisimin arka yüzeye zarar vermesi.', NULL);
INSERT INTO `sikayetturu` VALUES (179, 'ALÇ-5', 'İZ - ÖN YÜZEY', 3, NULL, '0000-00-00', '0000-00-00', NULL, 'Donma bandına veya transfer masa rulolarına yapılan yabancı cismin yüzeye zarar vermesi.', NULL);
INSERT INTO `sikayetturu` VALUES (180, 'ALÇ-6', 'KABARMA ', 3, NULL, '0000-00-00', '0000-00-00', NULL, 'Üretim hattı hatası.', NULL);
INSERT INTO `sikayetturu` VALUES (181, 'ALÇ-7', 'KAĞIT/ŞİLTE KALKMASI', 3, NULL, '0000-00-00', '0000-00-00', NULL, 'Üretim hattı hatası.', NULL);
INSERT INTO `sikayetturu` VALUES (182, 'ALÇ-8', 'KENAR KIRIĞI', 3, NULL, '0000-00-00', '0000-00-00', NULL, 'Traşlama ve taşıma hatası.', NULL);
INSERT INTO `sikayetturu` VALUES (183, 'ALÇ-9', 'KIRILMA', 3, NULL, '0000-00-00', '0000-00-00', NULL, 'Kurutucu fırında ürünün yanması, taşıma sırasında hasar görme veya eksik katkı girişi.', NULL);
INSERT INTO `sikayetturu` VALUES (184, 'ALÇ-10', 'KOKU', 3, NULL, '0000-00-00', '0000-00-00', NULL, 'Ürün katkısı problemi.', NULL);
INSERT INTO `sikayetturu` VALUES (185, 'ALÇ-11', 'STANDART DIŞI ÜRÜN', 3, NULL, '0000-00-00', '0000-00-00', NULL, 'Depolama ve etketleme hatası.', NULL);
INSERT INTO `sikayetturu` VALUES (186, 'ALÇ-12', 'VİİDALARKEN PARÇALANMA', 3, NULL, '0000-00-00', '0000-00-00', NULL, 'Uygulama hatası, kurutucu fırında yanma veya reçete problemi.', NULL);
INSERT INTO `sikayetturu` VALUES (187, 'TÜR-1', 'BOMBE', 5, NULL, '0000-00-00', '0000-00-00', NULL, 'Hammadde kaynaklı, bombeli alçıpandan üretim yapma.', NULL);
INSERT INTO `sikayetturu` VALUES (188, 'TÜR-2', 'BOYUT PROBLEMİ', 5, NULL, '0000-00-00', '0000-00-00', NULL, 'Kesim hatası.', NULL);
INSERT INTO `sikayetturu` VALUES (189, 'TÜR-3', 'DELİK/DESEN HİZA PROBLEMİ', 5, NULL, '0000-00-00', '0000-00-00', NULL, 'Delme makinası hatası.', NULL);
INSERT INTO `sikayetturu` VALUES (190, 'TÜR-4', 'HATALI ÜRÜN PAKETLEME', 5, NULL, '0000-00-00', '0000-00-00', NULL, 'Personel hatası.', NULL);
INSERT INTO `sikayetturu` VALUES (191, 'TÜR-5', 'KABARMA (KARTONDAN)', 5, NULL, '0000-00-00', '0000-00-00', NULL, 'Tutkalın alçıpana zarar vermesi veya nemli ortamda stoklama', NULL);
INSERT INTO `sikayetturu` VALUES (192, 'TÜR-6', 'KÖTÜ KOKU', 5, NULL, '0000-00-00', '0000-00-00', NULL, 'Aşırı tutkallı ürün veya kokulu alçıpan kullanımı', NULL);
INSERT INTO `sikayetturu` VALUES (193, 'TÜR-7', 'LEKELİ ÜRÜN', 5, NULL, '0000-00-00', '0000-00-00', NULL, 'Stok sahasında kirlenme fakat farkedilmeme veya lekeli malzeme kullanımı.', NULL);
INSERT INTO `sikayetturu` VALUES (194, 'TÜR-8', 'RENK PROBLEMİ', 5, NULL, '0000-00-00', '0000-00-00', NULL, 'Ton farkı bulunması.', NULL);
INSERT INTO `sikayetturu` VALUES (195, 'TÜR-9', 'TUTKAL ARTIĞI', 5, NULL, '0000-00-00', '0000-00-00', NULL, 'Üretim hattı hatası.', NULL);
INSERT INTO `sikayetturu` VALUES (196, 'TÜR-10', 'YAPIŞMA PROBLEMİ - ARKA YÜZ', 5, NULL, '0000-00-00', '0000-00-00', NULL, 'Yapıştırma presi hatası veya tutakalın kurumaması..', NULL);
INSERT INTO `sikayetturu` VALUES (197, 'TÜR-11', 'YAPIŞMA PROBLEMİ - ÖN YÜZ', 5, NULL, '0000-00-00', '0000-00-00', NULL, 'Yapıştırma presi hatası veya tutakalın kurumaması..', NULL);
INSERT INTO `sikayetturu` VALUES (198, 'PRO-1', 'BAĞLANTI YERİ PROBLEMİ', 4, NULL, '0000-00-00', '0000-00-00', NULL, 'Bağlantı tırnaklarının kapalı olması, deliklerin geniş olması veya uygulamacının kullanılmış parçaları kullanması.', NULL);
INSERT INTO `sikayetturu` VALUES (199, 'PRO-2', 'BOYUT PROBLEMİ', 4, NULL, '0000-00-00', '0000-00-00', NULL, 'Üretim hattı hatası.', NULL);
INSERT INTO `sikayetturu` VALUES (200, 'PRO-3', 'EKSİK GRAMAJ', 4, NULL, '0000-00-00', '0000-00-00', NULL, 'Hatalı hammadde kullanımı.', NULL);
INSERT INTO `sikayetturu` VALUES (201, 'PRO-4', 'LEKELİ ÜRÜN', 4, NULL, '0000-00-00', '0000-00-00', NULL, 'Stok sahasında kirlenme fakat farkedilmeme veya lekeli malzeme kullanımı.', NULL);
INSERT INTO `sikayetturu` VALUES (202, 'PRO-5', 'MUKAVEMET PROBLEMİ', 4, NULL, '0000-00-00', '0000-00-00', NULL, 'İnce malzeme kullanımı veya uygulama hatası.', NULL);
INSERT INTO `sikayetturu` VALUES (203, 'PRO-6', 'PASLANMA', 4, NULL, '0000-00-00', '0000-00-00', NULL, 'Nemli alanda stoklama veya kaplama kalınlığının düşük olması.', NULL);
INSERT INTO `sikayetturu` VALUES (204, 'PRO-7', 'RENK PROBLEMİ', 4, NULL, '0000-00-00', '0000-00-00', NULL, 'Hammade farkı.', NULL);
INSERT INTO `sikayetturu` VALUES (205, 'YÜK-1', 'EKSİK ÜRÜN', 7, NULL, '0000-00-00', '0000-00-00', NULL, 'Personel hatası', NULL);
INSERT INTO `sikayetturu` VALUES (206, 'YÜK-2', 'HASARLI ÜRÜN', 7, NULL, '0000-00-00', '0000-00-00', NULL, 'Hatalı stoklama, taşınırken zarar verme veya personel hatası sebebi ile hasarlı yüklenmesi.', NULL);
INSERT INTO `sikayetturu` VALUES (207, 'YÜK-3', 'HATALI DEPOLAMA', 7, NULL, '0000-00-00', '0000-00-00', NULL, 'Malzemenin stoklama koşulları sebebi ile hasar görmesi.', NULL);
INSERT INTO `sikayetturu` VALUES (208, 'YÜK-4', 'HATALI ÜRÜN', 7, NULL, '0000-00-00', '0000-00-00', NULL, 'Personel hatası, hatalı sevk kağıdı veya müşterinin hatalı sipariş açması.', NULL);
INSERT INTO `sikayetturu` VALUES (209, 'YÜK-5', 'RAF ÖMRÜ DOLMUŞ ÜRÜN', 7, NULL, '0000-00-00', '0000-00-00', NULL, 'Personel hatası veya müşterinin takip yapmaması.', NULL);
INSERT INTO `sikayetturu` VALUES (210, 'SEV-1', 'UYGUNSUZ ARAÇLA SEVK', 8, NULL, '0000-00-00', '0000-00-00', NULL, NULL, NULL);
INSERT INTO `sikayetturu` VALUES (211, 'SEV-2', 'HATALI SİPARİŞ', 8, NULL, '0000-00-00', '0000-00-00', NULL, NULL, NULL);
INSERT INTO `sikayetturu` VALUES (248, NULL, 'wwqwwqwqwq', 3, '', '2020-04-02', '2020-04-02', NULL, NULL, '');

-- ----------------------------
-- Table structure for standart
-- ----------------------------
DROP TABLE IF EXISTS `standart`;
CREATE TABLE `standart`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `standart_kodu` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `standart_adi_tr` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `standart_adi_en` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `standart_tr_versiyon` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `standart_en_versiyon` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `standart_tr_kapsam` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `standart_en_kapsam` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `standart_dosya` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of standart
-- ----------------------------
INSERT INTO `standart` VALUES (1, 'EN 520+A1', 'Alçı levhalar - Tarifler, gerekler ve deney yöntemleri', 'Gypsum plasterboards - Definitions, requirements and test methods', 'TS EN 520+A1:2010', 'EN 520:2004+A1:2009', 'Bu standard yapılarda ve daha sonra işlemlere tabi tutularak bir başka mamulün imalatında kullanılan alçı levhaların özelliklerini ve performanslarını belirler. Bu standard, dekoratif amaçlı veya üzerine alçı sıva yapılan levhaları kapsar.', 'This document specifies the characteristics and performance of gypsum plasterboards intended to be used in building construction works including those intended for secondary manufacturing operations. It includes boards designed to receive either direct surface decoration or gypsum plaster', '', '2020-02-23', '2020-02-23');
INSERT INTO `standart` VALUES (2, 'EN 15283-1+A1', 'Liflerle güçlendirilmiş alçı levhalar - Tarifler, gerekler ve deney yöntemleri - Bölüm 1: Keçe tipi liflerle güçlendirilmiş alçı levhalar', 'Gypsum boards with fibrous reinforcement - Definitions, requirements and test methods - Part 1: Gypsum boards with mat reinforcement', 'TS EN 15283-1+A1:2012', 'EN 15283-1:2008+A1:2009', 'Bu standard, yapılarda ve daha sonra işlemlere tabi tutularak bir başka mamulün imalatında kullanılan keçe tipi liflerle güçlendirilmiş alçı levhaların özelliklerini ve performanslarını belirler. Bu standard, üzerine doğrudan yüzey dekorasyonu veya alçı sıva yapılmak üzere tasarlanan levhaları kapsar.', NULL, '', '2020-02-23', '2020-02-23');
INSERT INTO `standart` VALUES (3, 'EN 14190', 'Alçı levhalar – Tekrar işleme tabi tutularak elde edilen – Tarifler, gerekler ve deney yöntemleri', 'Gypsum board products from reprocessing - Definitions, requirements and test methods', 'TS EN 14190:2014', 'EN 14190:2014', 'Alçı levha mamuller - Geri dönüşümlü malzemeden - Tarifler, gerekler ve deney yöntemleri', 'Gypsum board products from reprocessing - Definitions, requirements and test methods', '', '2020-02-23', '2020-02-23');
INSERT INTO `standart` VALUES (4, 'EN 14195', 'TS EN 14195:2015', 'EN 14195:2014', 'Alçı levha sistemlerinde kullanılan metal çerçeve bileşenleri - Tarifler, gerekler ve deney yöntemle', 'Metal framing components for gypsum board systems - Definitions, requirements and test methods', 'Bu standard, EN 520, EN 15283-1 ve EN 15283-2 ’ye uygun olarak imal edilmiş alçı levhalarla ve EN 14190’a uygun olarak imal edilmiş yeniden işleme tabi tutma suretiyle imal edilen alçı levhalar birlikte kullanılacak, monte edildikten sonra yük taşımayacak sistemlerde kullanılan metal çerçeve bileşenlerinin (profiller, askılar ve birleştirme elemanları gibi) karakteristiklerini kapsar. Bu sistemler, bölmeler, duvar ve tavan kaplamaları, mekanik olarak sabitlenmiş asma tavanlar, kirişler, kolonlar', 'This European Standard specifies the characteristics of metal framing components (e. g. profiles, hangers and connectors) intended to be used in building construction works in conjunction with gypsum boards manufactured according to EN 520, EN 15283-1 and EN 15283-2 and gypsum board products from reprocessing conforming to EN 14190 where the assembly is non-loadbearing. Such assemblies include, for example, partitions, wall and ceiling linings, ceilings with mechanically fixed boards and the cla', '', '2020-03-30', '2020-03-30');
INSERT INTO `standart` VALUES (5, 'EN 13964', 'Asma tavanlar - Gerekler ve deney yöntemleri', 'Suspended ceilings - Requirements and test methods', 'TS EN 13964:2014', 'EN 13964:2014', 'Bu standard, piyasaya sürülmeye hazır asma tavan kaplama bileşenlerini, asma tavan taşıyıcı sistem münferit bileşenlerini, asma tavan taşıyıcı sistem bileşen takımlarını ve asma tavan bileşen takımlarını kapsar. Bu standard, komple bileşen takımı hâlinde satılan asma tavanları, piyasaya bileşen takımı hâlinde sürülen asma tavan taşıyıcı sistemlerini, bu taşıyıcı sistemlere ait münferit bileşenleri (mamulleri) ve asma tavan kaplama bileşenlerini de kapsar. Bu standard, deney ve değerlendirme yönt', 'This European Standard covers membranes, individual substructure components, substructure kits and suspended ceiling kits intended to be placed on the market. It covers suspended ceilings sold as a complete kit, substructures placed on the market as kits, individual components (products) of such substructures, and membrane components. It includes test methods and methods of assessment, as well as provisions for the evaluation of conformity and for the marking of the products to the requirements ', '', '2020-02-23', '2020-02-23');

-- ----------------------------
-- Table structure for urun
-- ----------------------------
DROP TABLE IF EXISTS `urun`;
CREATE TABLE `urun`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `urun_adi` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `urun_bolum` int(5) NULL DEFAULT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `deleted_at` date NULL DEFAULT NULL,
  `urun_resim` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `urun_aciklama` varchar(750) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `urun_raf_omru` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `urun_turu` int(5) NULL DEFAULT NULL,
  `urun_standart` int(5) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 45 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of urun
-- ----------------------------
INSERT INTO `urun` VALUES (1, 'GKB - FLEX', 3, '2020-02-23', '2020-02-23', '0000-00-00', NULL, 'test', '24 ay', 1, 1);
INSERT INTO `urun` VALUES (2, 'GKBI - SUYA DAYANIKLI H1', 3, '2020-02-23', '2020-02-23', '0000-00-00', NULL, 'SUYA DAYANIKLI TİP-H1 SINIFI', 'SON KULLANIM TARİHİ YOK', 1, 1);
INSERT INTO `urun` VALUES (3, 'GKBI - SUYA DAYANIKLI H2', 3, '2020-02-23', '2020-02-23', '0000-00-00', NULL, 'SUYA DAYANIKLI TİP-H1 SINIFI', 'SON KULLANIM TARİHİ YOK', 1, 1);
INSERT INTO `urun` VALUES (4, 'GKBI - SUYA DAYANIKLI H3', 3, '2020-02-23', '2020-02-23', '0000-00-00', NULL, 'SUYA DAYANIKLI TİP-H1 SINIFI', 'SON KULLANIM TARİHİ YOK', 1, 1);
INSERT INTO `urun` VALUES (5, 'GKF - YANGINA DAYANIKLI', 3, '2020-02-23', '2020-02-23', '0000-00-00', NULL, 'SUYA DAYANIKLI TİP-H1 SINIFI', 'SON KULLANIM TARİHİ YOK', 1, 1);
INSERT INTO `urun` VALUES (6, 'MWR - KÜFE SUYA DAYANIKLI', 3, '2020-02-23', '2020-02-23', '0000-00-00', NULL, 'SUYA DAYANIKLI TİP-H1 SINIFI', 'SON KULLANIM TARİHİ YOK', 1, 1);
INSERT INTO `urun` VALUES (7, 'MFWR - KÜFE SUYA YANGINA DAYANIKLI', 3, '2020-02-23', '2020-02-23', '0000-00-00', NULL, 'KÜFE SUYA VE YANGINA DAYANIKLI TİP-H1-F', 'SON KULLANIM TARİHİ YOK', 1, 1);
INSERT INTO `urun` VALUES (8, 'WRFR - YANGINA SUYA DAYANIKLI', 3, '2020-02-23', '2020-02-23', '0000-00-00', NULL, 'YANGINA VE SUYA DAYANIKLI TİP-H2-F', 'SON KULLANIM TARİHİ YOK', 1, 1);
INSERT INTO `urun` VALUES (9, 'DİAMANT - DFH2IR', 3, '2020-02-23', '2020-02-23', '0000-00-00', NULL, 'YANGINA SUYA DAYANIKLI YÜZEY SERTLİĞİ VE YOĞUNLUĞU ARTTIRILMIŞ KIRILMAYA DAYANIKLI ALÇI LEVHA', 'SON KULLANIM TARİHİ YOK', 1, 1);
INSERT INTO `urun` VALUES (10, '[GUARD]EX - GM-FH1R', 3, '2020-02-23', '2020-02-23', '0000-00-00', NULL, 'KEÇE TİPİ LİFLERLE KAPLANMIŞ SUYA DAYANIKLI YANMAZ KIRILMAYA DAYANIKLI', 'SON KULLANIM TARİHİ YOK', 2, 2);
INSERT INTO `urun` VALUES (11, 'T24 PRO30 TALİ TAŞIYICI 1200', 4, '2020-04-01', '2020-04-01', NULL, NULL, 'KENDİNDEN GEÇMELİ TAVAN KAPLAMA ÇERÇEVE SİSTEMİ TAŞIYICI PARÇA', NULL, 6, 5);
INSERT INTO `urun` VALUES (12, 'T24 PRO30 TALİ TAŞIYICI 600', 6, '2020-04-01', '2020-04-01', NULL, NULL, 'KENDİNDEN GEÇMELİ TAVAN KAPLAMA ÇERÇEVE SİSTEMİ TAŞIYICI PARÇA', 'Raf Ömrü Yok', 6, 5);
INSERT INTO `urun` VALUES (13, 'T24 PRO30 ANA TAŞIYICI 3000', 4, '2020-04-01', '2020-04-01', NULL, NULL, 'KENDİNDEN GEÇMELİ TAVAN KAPLAMA ÇERÇEVE SİSTEMİ TAŞIYICI PARÇA', 'Raf Ömrü Yok', 6, 5);
INSERT INTO `urun` VALUES (15, 'FLAMEBOARD', 3, '2020-04-01', '2020-04-01', NULL, NULL, NULL, 'Raf Ömrü Yok', 2, 2);
INSERT INTO `urun` VALUES (32, 'T24 PRO30 TALİ TAŞIYICI', 4, '2020-04-01', '2020-04-01', NULL, NULL, NULL, 'Raf Ömrü Yok', 9, 5);

-- ----------------------------
-- Table structure for urunturu
-- ----------------------------
DROP TABLE IF EXISTS `urunturu`;
CREATE TABLE `urunturu`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `urun_turu_adi` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of urunturu
-- ----------------------------
INSERT INTO `urunturu` VALUES (1, 'KARTON KAPLI ALÇI LEVHA', '2020-02-23', '2020-02-23');
INSERT INTO `urunturu` VALUES (2, 'ŞİLTE KAPLI ALÇI LEVHA', '0000-00-00', '0000-00-00');
INSERT INTO `urunturu` VALUES (3, 'ÇİMENTOLU SIVA', '0000-00-00', '0000-00-00');
INSERT INTO `urunturu` VALUES (4, 'ALÇILI SIVA', '0000-00-00', '0000-00-00');
INSERT INTO `urunturu` VALUES (5, 'ALÇI PROFİLİ', '0000-00-00', '0000-00-00');
INSERT INTO `urunturu` VALUES (6, 'TAVAN T PROFİL SİSTEMİ', '0000-00-00', '0000-00-00');
INSERT INTO `urunturu` VALUES (7, 'AKUSTİK TAVAN KAPLAMASI', '0000-00-00', '0000-00-00');
INSERT INTO `urunturu` VALUES (8, 'AKUSTİK OLMAYAN TAVAN KAPLAMASI', '0000-00-00', '0000-00-00');
INSERT INTO `urunturu` VALUES (9, 'PROFİL AKSESUARI', '0000-00-00', '0000-00-00');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp(0) NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `users_email_unique`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'Sinan AYDOĞAN', 'sinanaydogan41@gmail.com', NULL, '$2y$10$FVtry/B/4eyqVT0fyW7c/uPhmcLCK9IoSEJzXeSr7WPHSw0WDTRrW', NULL, '2020-03-20 08:16:17', '2020-03-20 08:16:17');
INSERT INTO `users` VALUES (2, 'Hamdi KAYA', 'hamdi@hamdi.com', NULL, '$2y$10$et33ndfaAlf4o5NZyJYKy.CDsJf6a/WPXDVkD8DepGRtiYrdBeRqW', NULL, '2020-03-20 19:49:11', '2020-03-20 19:49:11');

SET FOREIGN_KEY_CHECKS = 1;
