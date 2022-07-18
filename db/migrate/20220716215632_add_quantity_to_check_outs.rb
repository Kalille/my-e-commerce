class AddQuantityToCheckOuts < ActiveRecord::Migration[7.0]
  def change
    add_column :check_outs, :quantity, :integer
  end
end
