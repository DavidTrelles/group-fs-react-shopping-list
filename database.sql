-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE shopping_list (
	id SERIAL PRIMARY KEY,
	name varchar(80),
	quantity decimal (3,2),
	unit varchar(20),
	purchased boolean
);

INSERT INTO shopping_list (name, quantity, unit, purchased)
VALUES ('Bananas', 1, 'bunch', 'N'), 
('Ginger tea', 3, 'boxes', 'N'), 
('Eggs', 6, 'individual', 'N');