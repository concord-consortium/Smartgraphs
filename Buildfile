# ===========================================================================
# Project:   Smartgraphs
# Copyright: ©2010 Concord Consortium
# Author:    Richard Klancer <rpk@pobox.com>
# ===========================================================================

require File.expand_path('../frameworks/jasmine-sproutcore/builders/jasmine_builder', __FILE__)

config :all, :required => [:sproutcore]

config :smartgraphs,
  :required => ['sproutcore/statechart', 'raphael_views/raphael_views', 'raphael_views/g_raphael'],
  :load_fixtures => true,
  :layout => 'lib/index.rhtml',
  :title => 'SmartGraphs',
  # temporary solution, not sure if this will work because the dimensions are wrong
  :startup_image_portrait => 'icon-144.png',
  :startup_image_landscape => 'icon-144.png'
config 'raphael_views/raphael_views',
  :required => 'raphael_views/raphael'
config 'raphael_views/g_raphael',
  :required => 'raphael_views/g_raphael_base'
config 'raphael_views/g_raphael_base',
  :required => 'raphael_views/raphael'

proxy '/db', :to => 'localhost:5984', :url => ''
proxy "/jnlp", :to => "localhost:4321"

namespace :build do
  desc "builds a jasmine unit test"
  build_task :test do
    Jasmine::Builder::Test.build ENTRY, DST_PATH
  end
end
