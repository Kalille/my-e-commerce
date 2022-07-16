class ApplicationController < ActionController::API
    include ActionController::Cookies
  
    rescue_from ActiveRecord::RecordInvalid, with: :not_processed

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
  #  before_action :current_cart
      before_action :authorize
      # before_action :current_cart
   

      # def current_cart
      #   @current_cart ||= find_Cart

      # end
      private
    
  # def authorize

  #   @current_user ||= User.find(session[:user_id]) 

  # end

  # def render_unprocessable_entity_response(invalid)
  #   render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  # end

  # def not_found(exception)
  #   render json: { errors: ["#{exception.model}"] }, status: :not_found unless @current_user

  # end
  
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])  
    # byebug
  end
   
      def authorize
        render json: { errors: ["not authorize"]}, status: :unauthorized unless current_user
      end
  
      def not_found(exception)
        render json: { errors: ["#{exception.model} not found"]}, status: :not_found
      end
    
      def not_processed(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
      end

      # def find_Cart
      #   cart = Cart.find_by(id: session[:cart_id])
      #   if cart.blank?
      #    cart = Cart.create
      #   else
      #    session[:cart_id] = cart.id 
      #    return cart
      #   end
      # end

 
     
end
