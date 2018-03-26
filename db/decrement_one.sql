DELETE FROM cart 
WHERE
id IN (SELECT id FROM cart WHERE user_id = $1 AND product_id = $2 LIMIT 1);


SELECT products.img, products.id, products.item, products.price as each, sum(products.price) as price, count(products.id) as quantity
FROM products
LEFT JOIN cart on products.id = cart.product_id
WHERE user_id = $1
GROUP BY products.id