class Api::LikedProductsController < ApplicationController
  skip_before_action :authorize, only: :index

  # user = @current_user ||= User.find(session[:user_id]) 
def index
          render json: LikedProduct.all
end

def create

  liked =  @current_user.liked_products.create( product_id: params[:product_id], user_id: params[:user_id])

  render json: liked, status: :created

end

def destroy
  product = LikedProduct.find_by(id: params[:id])
  product.delete
  head :no_content
end
end
