class Cart < ApplicationRecord
  belongs_to :user
 
  has_many :line_items
  has_many :my_items, through: :line_items, source: :product
end
