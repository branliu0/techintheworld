#!/usr/bin/env ruby

require 'sinatra'
require 'slim'
require 'sass'

get '/' do
  slim :home
end

get '/build/:name.css' do |name|
  require './views/scss/bourbon/lib/bourbon.rb'
  content_type :css
  scss :"scss/#{name}", :layout => false
end
