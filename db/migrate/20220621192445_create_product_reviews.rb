class CreateProductReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :product_reviews do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :product, null: false, foreign_key: true
      t.string :review

      t.timestamps
    end
  end
end
