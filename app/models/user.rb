class User < ApplicationRecord
include Rails.application.routes.url_helpers
    has_secure_password
    has_one_attached :image
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
   
    # has_many :line_items
    has_many :product_reviews
    has_many :products
    # has_one :created_cart, class_name: 'Cart', foreign_key: :user_id
    has_one :cart
    has_many :my_cart, through: :cart, source: :line_items
    # has_many :carts, through: :line_items, source: :product
    has_many :liked_products
    has_many :likes, through: :liked_products, source: :product
 
    has_many :products, through: :product_reviews


    def image_url
        url_for(self.image)
    end
end
