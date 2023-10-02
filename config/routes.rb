Rails.application.routes.draw do
  get '/beach', to: 'beach#beach'
  get '/projects', to: 'projects#project'
  get '/about', to: 'about#about'

  root "home#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
