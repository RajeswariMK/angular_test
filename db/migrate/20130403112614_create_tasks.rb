class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.boolean :complete
      t.references :project

      t.timestamps
    end
    add_index :tasks, :project_id
  end
end
