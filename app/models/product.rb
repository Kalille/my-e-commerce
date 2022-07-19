class Product < ApplicationRecord
    has_many :product_reviews
    has_many :users, through: :product_reviews
    has_many :liked_product
    has_many :users, through: :liked_products
 
    has_many :line_items, dependent: :destroy
    has_many :carts, through: :line_items

  

    def liked(current_user)
      !!self.Liked_product.find{|like| like.user_id == @current_user.id} 
    end
end
