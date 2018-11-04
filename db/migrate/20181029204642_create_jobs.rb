class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.belongs_to :customer
      t.belongs_to :user
      t.string :name, null: false
      t.datetime :job_date, null: false

      t.timestamps null: false
    end
  end
end
