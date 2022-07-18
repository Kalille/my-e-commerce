class CartSerializer < ActiveModel::Serializer
  attributes :id , :line_items, :user_id ,:products
end
