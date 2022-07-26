class User < ApplicationRecord
# include Rails.application.routes.url_helpers
    has_secure_password
    has_one_attached :image
    validates :username, uniqueness: true
    validates :password, length: {minimum: 8}
    validates :email, presence: true, uniqueness: true, format: {with: /\A(?<username>[^@\s]+)@((?<domain_name>[-a-z0-9]+)\.(?<domain>[a-z]{2,}))\z/i}
   
    has_many :check_outs
    has_many :product_reviews
    has_many :created_products, class_name: "Product"

    has_one :cart
 
    has_many :liked_products
    has_many :products, through: :liked_products, source: :product
 
    has_many :reviewed_products, through: :product_reviews, source: :product


    # def image_url
    #     Rails.application.routes.url_helpers.url_for(image) if image.attached? 
    # end
end
