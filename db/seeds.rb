# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'rest-client'

def product_data

product_info = RestClient.get('https://api.bestbuy.com/v1/products(type=game)?format=json&show=name,regularPrice,longDescription,image&pageSize=100&page=5&apiKey=iddteALZUPlrZgHUl0B0VZW1')

if product_info.code == 200
    parsed_products = JSON.parse(product_info)['products']
 
parsed_products.each {|data|
Product.create(
    name: data['name'],
    description: data['longDescription'],
    image_url: data['image'],
    price: data['regularPrice']
 
   
   
)
}
end
end
product_data()




Cart.destroy_all
User.create(username: "Jamal",password: "Password", email: "example@yahoo.com")