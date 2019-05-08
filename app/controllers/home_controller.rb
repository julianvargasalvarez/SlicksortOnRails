class HomeController < ApplicationController
  def index
    @trees = Slide.roots.map(&:subtree)
    gon.trees = @trees
  end
end
