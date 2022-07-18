class ProductReview < ApplicationRecord
  belongs_to :user
  belongs_to :product
  validates :review, presence: true,length: {maximum: 100}

  before_save :format_title

  def format_title
      if self.review[0] != self.review[0].upcase
         self.review = self.review.capitalize
      end
  end
end
