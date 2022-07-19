class LineItem < ApplicationRecord
  belongs_to :cart
  belongs_to :product


  def total
    self.quantity * self.product.price
  end
end
