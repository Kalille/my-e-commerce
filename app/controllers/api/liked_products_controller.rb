class Api::LikedProductsController < ApplicationController
def create
  liked =  User.first.liked_products.create( product_id: 18, user_id: @current_user)

  render json: liked, status: :created

end
end
