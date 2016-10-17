class Article < ActiveRecord::Base
  include ActiveModel::Validations

  validates_presence_of :content
  validates_presence_of :title

  belongs_to :user

end
