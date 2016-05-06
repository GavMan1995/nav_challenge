class CreateRails < ActiveRecord::Migration
  def change
    create_table :rails do |t|
      t.string :g

      t.timestamps null: false
    end
  end
end
