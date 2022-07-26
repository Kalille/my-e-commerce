class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id , :username,:password_digest, :image_url,:cart, :products, :reviewed_products  ,:email , :check_outs 
 
  # :my_cart
  # def image_format
  #   return unless object.image.attached?
  #   object.image.blob.attributes
  #   .slice('filename', 'byte_size')
  #   .merge(url: object.image_url)
  #   .tap{|attrs| attrs['name'] = attrs.delete('filename')}
  # end

  def image_url
    return nil unless object.image.attached?
    object.image.blob.attributes
    .slice('filename', 'byte_size')
    .merge(url: rails_blob_path(object.image, only_path: true))
    .tap{|attrs| attrs['name'] = attrs.delete('filename')}

  end

  # def attachment_format
  #   return unless object.image.attached?
  #   object.image.blob.attributes
  #   .slice('filename', 'byte_size')
  #   .merge(url: object.image_url)
  #   .tap{|attrs| attrs['name'] = attrs.delete('filename')}

  # end
end
