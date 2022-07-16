class UserSerializer < ActiveModel::Serializer
  attributes :id , :username,:password_digest, :image_format, :attachment_format,:cart, :products, :reviewed_products , :image_url ,:email
 
  # :my_cart
  def image_format
    return unless object.image.attached?
    object.image.blob.attributes
    .slice('filename', 'byte_size')
    .merge(url: object.image_url)
    .tap{|attrs| attrs['name'] = attrs.delete('filename')}
  end

  def attachment_format
    return unless object.image.attached?
    object.image.blob.attributes
    .slice('filename', 'byte_size')
    .merge(url: object.image_url)
    .tap{|attrs| attrs['name'] = attrs.delete('filename')}

  end
end
