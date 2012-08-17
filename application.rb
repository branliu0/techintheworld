#!/usr/bin/env ruby

require 'sinatra'
require 'slim'

get '/' do
  slim :home
end
