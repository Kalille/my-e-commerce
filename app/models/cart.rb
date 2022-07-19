class Cart < ApplicationRecord
  belongs_to :user
  has_many :line_items, dependent: :destroy
  has_many :products, through: :line_items 
 has_many :check_outs
  
    def total
      line_items.to_a.sum{|line_item| line_item.total}
    end
  

end
