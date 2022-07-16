class Api::CartsController < ApplicationController
    # skip_before_action :authorize, only: [:index, :show]


    def index
   
      render json: @current_user.cart.products
# byebug
    end

    def total
        render json: @current_user.cart.total

    end
    # def show 
    #   cart = @current_user.cart.find_by(id: params[:id])
    #   render json: cart
    # end

    # def find_Cart
    #   @found_cart = Cart.find_by(user_id: params[:user_id])
    #   if @found_cart
    #     render json: @found_cart
    #   else
    #     render json: {error: "The user has no cart"}
    #   end
    # end
 
# def new 
# Cart.new

# end
    # def create 
    #     @cart = @current_user.cart.new

    #     render json: @cart

    # end


    # def add
    #   # find product 
     
    #   @product = Product.find_by(id: params[:product_id])
    #   # define quantity
    #   byebug
    #   quantity = params[:quantity].to_i
    
    #   current_item =  @cart.line_items.find_by(product_id: @product.id)
     

    #   if current_item && quantity > 0
    #     current_item.update(:quantity)
    #   elsif quantity <= 0
    #     current_item.destroy
    #   else
    #   added_item = @current_user.cart.line_items.create!(product: @product, quantity: quantity)

    #    render json:  added_item, status: :created
    #   end

    # end
    # def show

    #   render json: @current_cart
    # end
  
    # def destroy
    #   cart = Cart.find_by(id: params[:id])
    #   cart.delete
    #   head :no_content
    # end

    # def add_item
    #   # user ||= User.find(session[:user_id]) 
    #   # item = Product.find(id: params[:product_id])
    #   cart = @current_user.cart.line_items.create(product_id: params[:product_id])
    #     byebug
    #     # cart = Cart.line_items.create!(user_id: @current_user, product_id: params[:product][:id])
   
      
    #     render json: cart, status: :created
     
    #   end
end
