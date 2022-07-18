class Cart < ApplicationRecord
  belongs_to :user
  # has_many :products
  has_many :line_items, dependent: :destroy
  has_many :products, through: :line_items 
 has_many :check_outs
  # def sub_total
  #   sum = 0
  #   self.line_items.each do |line_item|
  #     sum+= line_item.total_price
  #   end
  #   return sum
  # end
    def total
      line_items.to_a.sum{|line_item| line_item.total}
    end
  #   def add_product(params)
  #     @cart = @current_user.cart
  #     current_item = @cart.line_items.find_by(product_id: params[:product][:id])

  #     if current_item
  #       current_item.quantity += params[:product][:quantity].to_i
  #       current_item.save
  #     else
  #       new_item = @cart.line_items.create!(product_id: params[:product][:id])
     
  #   end
  #   new_item
  # end

end
