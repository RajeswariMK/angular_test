ProjectManagemant::Application.routes.draw do

  resources :projects, :defaults => {format: :json} do
    resources :tasks, :defulats => {format: :json}
  end

  root to: 'home#index'
  
end
