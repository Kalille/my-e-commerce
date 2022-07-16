class Api::LineItemsController < ApplicationController
# skip_before_action :authorize

def index
  render json: LineItem.all

end
# def create
#     @line_item = @current_user.cart.add_product(params[:product][:id])

#     render json: @line_item, status: :created
# end
    def create
    
  
      # product = Product.find_by(id: params[:product_id])

      # if @product
        # current_item = LineItem.find_by(product_id: params[:product_id],cart_id: @current_user.cart.id)
        # quantity = params[:quantity].to_i
        # if current_item && quantity > 0
       
  
            # current_item.quantity ||= 1
            # current_item.quantity += 1
          #   current_item.update(quantity: quantity )
          #  current_item.save 
       
    
     
        line_item =LineItem.create!(product_id: params[:product_id][:id],cart_id: @current_user.cart.id)
        render json: line_item, status: :created


      # #      if @line_item && quantity > 0
      # #   @line_item.update(:quantity)
      # # elsif quantity <= 0
      # #   @line_item.delete
      #   else
        #   params[:quantity] = 1
        #  @line_item = @cart.line_items.create!(product_id: @product.id, quantity: params[:quantity] )
        # cart = Cart.line_items.create!(user_id: @current_user, product_id: params[:product][:id])
   
        # end
        # render json: @line_item, status: :created
     
      end

def destroy
    current_item = @current_user.cart.line_items.find_by(product_id: params[:id])
  current_item.delete
  head :no_content
end


private
  def line_item_params
    params.require(:line_item).permit(:quantity,:product_id, :cart_id)
  end

def item_params
params.permit(:cart_id, :product_id)

end

def product_params
params.require(:product).permit(:id)
end

end
