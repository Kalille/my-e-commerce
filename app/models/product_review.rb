class ProductReview < ApplicationRecord
  belongs_to :user
  belongs_to :product
  validates :review, presence: true,length: {maximum: 500}
end
