class CreateComics < ActiveRecord::Migration[5.1]
  def change
    create_table :comics do |t|
      t.string :title
      t.string :superhero
      t.integer :edition

      t.timestamps
    end
  end
end
