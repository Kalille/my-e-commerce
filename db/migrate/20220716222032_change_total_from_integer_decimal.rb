class ChangeTotalFromIntegerDecimal < ActiveRecord::Migration[7.0]
  def change
    change_column :check_outs, :total, :decimal
  end
end
