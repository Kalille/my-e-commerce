class LineItem < ApplicationRecord
  belongs_to :cart
  belongs_to :product
  # belongs_to :order, optional: true

  def total
    self.quantity * self.product.price
  end
end
