class User < ActiveRecord::Base

  def self.createWithParams facebook_id
    user = User.new({facebook_id: facebook_id})

    if user.save
      user
    else
      nil
    end
  end
end
