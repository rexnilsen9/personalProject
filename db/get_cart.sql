SELECT products.id, products.item, sum(price) as price, count(*) as quantity
FROM products
LEFT JOIN cart on products.id = cart.product_id
WHERE user_id = $1
GROUP BY products.id