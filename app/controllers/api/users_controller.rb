class Api::UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    def index
      render json: User.all
    end
    def create
      user = User.create!(user_params)
  
  
      session[:user_id] = user.id
      user.cart = Cart.create()
      
     
      render json: user, status: :created
    end

    def my_reviews
      render json: @current_user.product_reviews.all
    end
  
    def show
   
      render json: @current_user
      
    end
 
    private
  
    def user_params
      params.require(:user).permit(:username, :image,:email, :password, :password_confirmation)
    end
  
end
