class UsersController < ApplicationController

  def getOrCreate
    @user = User.find_by_facebook_id(facebookId) || User.createWithFacebookId(facebookId)

    if @user
      head(:ok)
    else
      head(:bad_request)
    end
  end

  private
    def facebookId
      Integer(params.require(:facebook_id))
    end
end
