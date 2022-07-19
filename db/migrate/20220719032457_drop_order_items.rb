class DropOrderItems < ActiveRecord::Migration[7.0]
  def change
    drop_table :ordered_items
  end
end
