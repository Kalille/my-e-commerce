class RemoveProductIdFromCart < ActiveRecord::Migration[7.0]
  def change
    remove_column :carts, :product_id, :string
  end
end
