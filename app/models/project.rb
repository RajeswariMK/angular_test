class Project < ActiveRecord::Base
  has_many :tasks, :dependent => :destroy	
  attr_accessible :name

  validates_uniqueness_of :name
  validates_presence_of :name
  validates_length_of :name, minimum: 1
end
