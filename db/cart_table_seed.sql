CREATE TABLE IF NOT EXISTS cart(
    id SERIAL PRIMARY KEY,
    product_id NUMBER,
    user_id NUMBER
);