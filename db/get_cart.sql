SELECT products.img, products.id, products.item, products.price as each, sum(products.price) as price, count(products.id) as quantity
FROM products
LEFT JOIN cart on products.id = cart.product_id
WHERE user_id = $1
GROUP BY products.id