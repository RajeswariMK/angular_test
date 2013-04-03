class Task < ActiveRecord::Base
  belongs_to :project
  attr_accessible :complete, :name

  default_scope order("created_at desc")

  validates_presence_of :name
end
