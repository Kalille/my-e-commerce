class Api::LineItemsController < ApplicationController
# skip_before_action :authorize

def index
  render json: LineItem.all

end

    def create
    
     
        line_item =LineItem.create!(product_id: params[:product_id][:id],cart_id: @current_user.cart.id)
        render json: line_item, status: :created
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
