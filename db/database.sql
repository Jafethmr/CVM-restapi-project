CREATE DATABASE IF NOT EXISTS cvmdb;
use cvmdb;

create table devocionales(
id int(11) not null auto_increment,
title varchar(45) default null,
subtitle varchar(45) default null,
urlmp3 text default null,
urlimg text default null,
primary key(id)
);

desc devocionales;

insert into devocionales values
(1,'REY SALVADOR','SONG PROMESA','https://jafethmr.github.io/CVM-project/assets/ReySalvador.0d7b7f50.mp3',null),
(2,'REY SALVADOR 2','SONG PROMESA','https://jafethmr.github.io/CVM-project/assets/ReySalvador.0d7b7f50.mp3',null);