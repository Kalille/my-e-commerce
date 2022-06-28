class LineItem < ApplicationRecord
  belongs_to :cart
  belongs_to :product
  belongs_to :user
end
