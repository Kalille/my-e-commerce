class Api::OrdersController < ApplicationController

    def index
       render json: Order.all
      end
    
      def show
        @order = Order.find(params[:id])
      end
    
      def new
        @order = Order.new
      end

      def create
        @order = Order.new(order_params)
        @current_cart.line_items.each do |item|
          @order.line_items << item
          item.cart_id = nil
        end
        @order.save
        Cart.destroy(session[:cart_id])
        session[:cart_id] = nil
       head :no_content
      end
      
      private
        def order_params
          params.require(:order).permit(:name, :email, :address)
        end
end
