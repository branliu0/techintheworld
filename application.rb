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

get '/proposal' do
  redirect "https://docs.google.com/document/d/11-5EMSkbsVMd6X6QUlOgnrqSKC4-I284Ig9VzZhrtlU/edit"
end

get '/summary' do
  redirect "https://docs.google.com/document/d/1GC1TlAeCeFyNOQzm5JDmQ7scqZY0-lv2q7SoquXc3KU/edit"
end

["proposal", "team", "contact"].each do |url|
  get "/#{url}" do
    slim url.to_sym
  end
end
