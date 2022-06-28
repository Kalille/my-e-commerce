class Api::CartsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]

    def  index
  
        render json: Cart.all.order(product_id: 'asc'), include: [:my_items, :user]
    end



    # def create
    #     item = Product.find(params[:id])
   
    #     cart = Cart.line_items.create!(user_id: @current_user, product_id: params[:product][:id])
   
      
    #     render json: cart, status: :created
     
    #   end
end
