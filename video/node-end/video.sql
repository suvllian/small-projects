CREATE DATABASE video;

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(512) NOT NULL,
  `password` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `videolist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(512) NOT NULL,
  `aTime` varchar(128) NOT NULL,
  `imgSrc` varchar(512) NOT NULL,
  `videoSrc` varchar(512) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO `videolist` (`id`, `title`, `aTime`, `imgSrc`, `videoSrc`, `content`) VALUES
(1, '视频1', '2017-06-13', 'http://suvllian.com/wp-content/themes/behind/images/no-image.jpg', '#', '这是一个视频简介'),
(2, '视频1', '2017-06-13', 'http://suvllian.com/wp-content/themes/behind/images/no-image.jpg', '#', '这是一个视频简介'),
(3, '视频1', '2017-06-13', 'http://suvllian.com/wp-content/themes/behind/images/no-image.jpg', '#', '这是一个视频简介'),
(4, '视频1', '2017-06-13', 'http://suvllian.com/wp-content/themes/behind/images/no-image.jpg', '#', '这是一个视频简介');

CREATE TABLE IF NOT EXISTS `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `authorId` int(11) NOT NULL,
  `aTime` varchar(128) NOT NULL,
  `videoId` int(11) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS lovevideo (
	id int(11) NOT NULL AUTO_INCREMENT,
	authorId int(11) NOT NULL,
	videoId int(11) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS collectvideo (
	id int(11) NOT NULL AUTO_INCREMENT,
	authorId int(11) NOT NULL,
	videoId int(11) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;