class Api::CheckOutsController < ApplicationController

    def index

        render json: @current_user.check_outs.all
    end

    def create
        @cart = @current_user.cart
        item_quantity = @cart.products.length
        cart_amount = @cart.total
       order = @current_user.check_outs.create!(cart_id: @cart.id,total: cart_amount, quantity: item_quantity)   
      if order.save
            @cart.line_items.each do |item|
             item.delete
    
    end
    end

    end
end
