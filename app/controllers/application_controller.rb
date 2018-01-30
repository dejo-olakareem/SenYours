class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include ReviewsHelper
  include UsersHelper
  include AvailableDaysHelper
end
