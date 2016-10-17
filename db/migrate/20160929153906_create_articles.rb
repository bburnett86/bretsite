class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|

      t.string :title
      t.text :content
      t.boolean :project, default: false
      t.boolean :blog_post, default: false
      t.string :link
      t.string :pic_url

      t.timestamps null: false
    end
  end
end
