Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  default_url_options :host => "http://localhost:3000"
  namespace :api do
    resources :products
    resources :carts
    resources :product_reviews
    resources :line_items
  get "/users", to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/add_to_cart", to: "line_items#add_item"
end
end
