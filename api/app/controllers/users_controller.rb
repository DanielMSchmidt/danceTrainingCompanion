class UsersController < ApplicationController

  def getOrCreate
    @user = User.find_by_facebook_id(params[:facebook_id]) || User.createWithParams(params[:facebook_id])

    if @user
      head(:ok)
    else
      head(:bad_request)
    end
  end

  private
    def user_params
      params.require(:facebook_id)
    end
end
