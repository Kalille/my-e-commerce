class Api::CartsController < ApplicationController
    # skip_before_action :authorize, only: [:index, :show]


    def index
   
      render json: @current_user.cart.products

    end

    def total
        render json: @current_user.cart.total

    end

end
