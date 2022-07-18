Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  default_url_options :host => "http://localhost:3000"
  namespace :api do
    resources :products
    # resources :carts
    resources :product_reviews
    resources :line_items
   
    # get 'find_cart', to: "carts#find_cart"
    resources :liked_products
resources :check_outs
resources :carts
resources :orders
# delete "/add_like", to: "liked_products#create"
# post "/delete_like", to: "liked_products#destroy"

# delete "/remove", to: "line_items#remove"
get "/my_reviews", to: "users#my_reviews"
get "/total", to: "carts#total"
get "/liked", to: "liked_products#index"
  post "/add", to: "line_items#add"
  get "/users", to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # post "/add_to_cart", to: "line_items#add_item"
end
end
