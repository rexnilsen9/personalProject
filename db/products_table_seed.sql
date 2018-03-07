CREATE TABLE IF NOT EXISTS  products (
    id SERIAL PRIMARY KEY,
    item TEXT,
    brand TEXT,
    img TEXT,
    price DECIMAL,
    description TEXT,
    color TEXT,
    size TEXT
);