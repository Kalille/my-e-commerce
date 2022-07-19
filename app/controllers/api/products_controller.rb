class Api::ProductsController < ApplicationController
    skip_before_action :authorize
    def index 
    
        render json: Product.all.order(name: 'desc'), include: [:product_reviews, :liked_product]
    end
    def show 
        product = Product.find_by(id: params[:id])
        render json: product,include: [:product_reviews, :liked_product]
      end

    
      
      def create
   
        product = Product.create(product_params)
      
        render json: product, status: :created
       
      end

    
      def search
        product = Product.where(name: params[:name])

        render json: product

      end

      private

      def product_params
        params.permit(:name, :description, :price, :image_url)
      end
end
