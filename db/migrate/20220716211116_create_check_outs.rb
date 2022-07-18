class CreateCheckOuts < ActiveRecord::Migration[7.0]
  def change
    create_table :check_outs do |t|
      t.references :user, null: false, foreign_key: true
      t.references :cart, null: false, foreign_key: true

      t.timestamps
    end
  end
end
