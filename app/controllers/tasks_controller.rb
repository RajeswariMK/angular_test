class TasksController < InheritedResources::Base
  respond_to :json
  belongs_to :project
end
