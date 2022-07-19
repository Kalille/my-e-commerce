Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  default_url_options :host => "http://localhost:3000"
  namespace :api do
    resources :products
    resources :product_reviews
    resources :line_items
    resources :liked_products
    resources :check_outs
    resources :carts
    

  get "/my_reviews", to: "users#my_reviews"
  get "/total", to: "carts#total"
  get "/liked", to: "liked_products#index"
  post "/add", to: "line_items#add"
  get "/users", to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
end
