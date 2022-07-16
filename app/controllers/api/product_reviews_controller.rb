class Api::ProductReviewsController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index
    
        render json: ProductReview.all, include: [:user]

      end

      def create
    
        review = @current_user.product_reviews.create!(review: params[:review], product_id: params[:product_id])
  
      
        render json: review, status: :created
     
      end

      def show
        review = @current_user.product_reviews.find_by(id: params[:id])
        render json: review

      end

      def update
        review = @current_user.prouct_reviews.find_by(id: params[:id])
        review.update!(review_params)
        render json: review

      end


      def destroy
        review = @current_user.product_reviews.find_by(id: params[:id])
        review.delete
        head :no_content
      end

      private
      def review_params
        params.permit(:review, :user_id)
      end
end
