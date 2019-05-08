class HomeController < ApplicationController
  def index
    @trees = Slide.all
    gon.slides = @trees
  end
end
