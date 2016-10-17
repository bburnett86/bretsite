class ArticlesController < ApplicationController

  def _about_me
    render :_about_me, layout: false
  end

  def _skills
    render :_skills, layout: false
  end

  def index
    @blogs = Article.where(blog_post: true).reverse
    @projects = Article.where(project: true).reverse
    render :index
  end

  def show
    @article = Article.find(params[:id])
    @blogs = Article.where(blog_post: true).reverse
    @projects = Article.where(project: true).reverse
    render :show
  end

end
