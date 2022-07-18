class AddTotalToCheckOuts < ActiveRecord::Migration[7.0]
  def change
    add_column :check_outs, :total, :integer
  end
end
