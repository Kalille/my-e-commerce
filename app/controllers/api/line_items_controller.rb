class Api::LineItemsController < ApplicationController
#     skip_before_action :authorize, only: [:add_item, :index]
# def index

# render json: LineItem.all
# end
# def add_item
#     # item = Product.find(params[:id])
#     # if item
#     #   cart =  Cart.line_item.create!(cart_id: @current_user, product_id: item)

#     #     render json: cart, status: :created
#     # else 
#     #     render json: {errors: "Error Adding to Cart"}


#     # end  

#     item = Cart.line_items.create!(item_params)

#     render json: item, status: :created

# end

private

def item_params
params.permit(:cart_id, :product_id)

end



end
