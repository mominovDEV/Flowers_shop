CREATE database flower_shop;
USE flower_shop;

CREATE table flowers(
    id int primary key AUTO_INCREMENT,
    name varchar(255) not null,
    price float(10,2),
    color varchar(100)
);

CREATE table customers(
    id int primary key AUTO_INCREMENT,
    name varchar(255) not null, 
    email varchar(100)
);

CREATE table orders(
    id int primary key AUTO_INCREMENT,
    customers_id INT,
    flower_id int,
    quantity int
);