class AddAncestryToSlides < ActiveRecord::Migration[5.2]
  def change
    add_column :slides, :ancestry, :string
    add_index :slides, :ancestry
  end
end
