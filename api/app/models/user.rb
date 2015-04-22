class User < ActiveRecord::Base

  validates :facebook_id, presence: true, numericality: { only_integer: true }

  def self.createWithFacebookId facebook_id
    user = User.new(facebook_id: facebook_id)

    if user.valid? && user.save
      user
    else
      nil
    end
  end
end
