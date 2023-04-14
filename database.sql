create TABLE persone(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    nickname VARCHAR(255),
    phone VARCHAR(255),
    password_ VARCHAR(255),
    name_ VARCHAR(255),
    surname VARCHAR(255)
);

create TABLE order_(
    id SERIAL PRIMARY KEY,
    products VARCHAR(255),
    persone_id INTEGER,
    FOREIGN KEY (persone_id) REFERENCES persone (id),
    product_id INTEGER,
    FOREIGN KEY (product_id) REFERENCES product (id)
);

create TABLE product(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    productsimage VARCHAR(255),
    price INTEGER
);
