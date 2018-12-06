class CreateDupes < ActiveRecord::Migration[5.1]
  def change
    create_table :dupes do |t|

      t.timestamps
    end
  end
end
