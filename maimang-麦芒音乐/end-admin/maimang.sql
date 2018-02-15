-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 02 月 15 日 08:58
-- 服务器版本: 5.5.20
-- PHP 版本: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `maimang`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `pass` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `isShow` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`id`, `title`, `content`, `isShow`) VALUES
(12, '麦芒详情', '<p>详情页?<br/></p>', 1),
(13, '1', '<p>2</p>', 1);

-- --------------------------------------------------------

--
-- 表的结构 `classlink`
--

CREATE TABLE IF NOT EXISTS `classlink` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `src` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `classlink`
--

INSERT INTO `classlink` (`id`, `name`, `src`) VALUES
(1, '声乐专业', 'http://suvllian.com'),
(2, '器乐专业', 'http://suvllian.com'),
(3, '音乐制作专业', 'http://suvllian.com'),
(4, '全能唱作人专业', 'http://suvllian.com'),
(5, '艺术嗓音专业', 'http://suvllian.com');

-- --------------------------------------------------------

--
-- 表的结构 `content`
--

CREATE TABLE IF NOT EXISTS `content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `intro` text NOT NULL,
  `src` varchar(256) NOT NULL,
  `imgsrc` varchar(256) NOT NULL,
  `class` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `content`
--

INSERT INTO `content` (`id`, `intro`, `src`, `imgsrc`, `class`) VALUES
(1, '无畏成长，展露锋芒', '#', 'album-11494258524383.jpg', 1),
(2, '', '#', 'album-21494250583167.jpg', 1),
(3, '', '#', 'album-31494250585829.jpg', 1),
(4, '', 'http://suvllian.com', 'hot-img-41494258344540.jpg', 2),
(5, '', 'http://suvllian.com', 'hot-img-51494250638507.jpg', 2),
(6, 'http://suvllian.com', 'http://suvllian.com', 'hot-img-61494250642353.jpg', 2),
(7, 'http://suvllian.com', 'http://suvllian.com', 'hot-img-71494250646614.jpg', 2),
(8, 'http://suvllian.com', 'http://suvllian.com', 'hot-img-81494250652529.jpg', 2);

-- --------------------------------------------------------

--
-- 表的结构 `email`
--

CREATE TABLE IF NOT EXISTS `email` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `email`
--

INSERT INTO `email` (`id`, `email`) VALUES
(3, '1448478764@qq.com');

-- --------------------------------------------------------

--
-- 表的结构 `joinperson`
--

CREATE TABLE IF NOT EXISTS `joinperson` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `company` varchar(128) NOT NULL,
  `teacher` varchar(128) NOT NULL,
  `connect` varchar(128) NOT NULL,
  `class` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `joinperson`
--

INSERT INTO `joinperson` (`id`, `name`, `company`, `teacher`, `connect`, `class`) VALUES
(1, '王翼龙', '短安大学', '王翼龙', '12536582569', 1);

-- --------------------------------------------------------

--
-- 表的结构 `person`
--

CREATE TABLE IF NOT EXISTS `person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `intro` text NOT NULL,
  `imgsrc` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `person`
--

INSERT INTO `person` (`id`, `name`, `intro`, `imgsrc`) VALUES
(2, '乌拉恩', '1980年10月11日出生于山东省济南市，中国内地流行乐女歌手、音乐制作人，毕业于星海音乐学院作曲技术与理论系。<br/>2014年，参加CCTV-3原创音乐真人秀节目《中国好歌曲第一季》比赛，最终获得刘欢组季军。', 'person-2-1494250989633.jpg');

--
-- 触发器 `person`
--
DROP TRIGGER IF EXISTS `person_pic`;
DELIMITER //
CREATE TRIGGER `person_pic` AFTER INSERT ON `person`
 FOR EACH ROW BEGIN
        INSERT INTO `personpic` SET src= 'http://suvllian.com', personid=NEW.id;
		INSERT INTO `personpic` SET src= 'http://suvllian.com', personid=NEW.id;
		INSERT INTO `personpic` SET src= 'http://suvllian.com', personid=NEW.id;
		INSERT INTO `personpic` SET src= 'http://suvllian.com', personid=NEW.id;
		INSERT INTO `personpic` SET src= 'http://suvllian.com', personid=NEW.id;
		INSERT INTO `personpic` SET src= 'http://suvllian.com', personid=NEW.id;
    END
//
DELIMITER ;
DROP TRIGGER IF EXISTS `person_pic_delete`;
DELIMITER //
CREATE TRIGGER `person_pic_delete` BEFORE DELETE ON `person`
 FOR EACH ROW BEGIN
        DELETE FROM personpic WHERE personid = old.id;
    END
//
DELIMITER ;

-- --------------------------------------------------------

--
-- 表的结构 `personpic`
--

CREATE TABLE IF NOT EXISTS `personpic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(128) NOT NULL,
  `personid` int(11) NOT NULL,
  `imgsrc` varchar(256) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `personid` (`personid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- 转存表中的数据 `personpic`
--

INSERT INTO `personpic` (`id`, `src`, `personid`, `imgsrc`) VALUES
(7, 'http://suvllian.com', 2, 'person-7-1494250992817.jpg'),
(8, 'http://suvllian.com', 2, 'person-8-1494250997382.jpg'),
(9, 'http://suvllian.com', 2, 'person-9-1494250999940.jpg'),
(10, 'http://suvllian.com', 2, 'person-10-1494251003349.jpg'),
(11, 'http://suvllian.com', 2, 'person-11-1494251006639.jpg'),
(12, 'http://suvllian.com', 2, 'person-12-1494251009575.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `teachers`
--

CREATE TABLE IF NOT EXISTS `teachers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `intro` text NOT NULL,
  `imgsrc` varchar(256) NOT NULL,
  `smallsrc` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `teachers`
--

INSERT INTO `teachers` (`id`, `name`, `intro`, `imgsrc`, `smallsrc`) VALUES
(3, '特邀导师：乌拉多恩', '《中国好歌曲》第三期学员', 'teacher-31494250847539.jpg', 'tcontent-31494250850620.jpg'),
(4, '特邀导师：兰雪', '梦想的声音学员', 'teacher-41494250841584.jpg', 'tcontent-41494250844220.jpg'),
(5, '导师：张超洋', '全创音乐人', 'teacher-51494250834783.jpg', 'tcontent-51494250838329.jpg'),
(6, '特邀导师：王建房', '陕西著名音乐人', 'teacher-61494250828293.jpg', 'tcontent-61494250832209.jpg'),
(7, '特邀导师：乌拉多恩', '《中国好歌曲》第三期学员', 'teacher-71494250821924.jpg', 'tcontent-71494250824965.jpg'),
(8, '特邀导师：兰雪', '梦想的声音学员', 'teacher-81494250814015.jpg', 'tcontent-81494250817651.jpg');

--
-- 限制导出的表
--

--
-- 限制表 `personpic`
--
ALTER TABLE `personpic`
  ADD CONSTRAINT `personpic_ibfk_1` FOREIGN KEY (`personid`) REFERENCES `person` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
