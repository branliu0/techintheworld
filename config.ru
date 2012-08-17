require "./application"
run Sinatra::Application

# Disable stdout buffering so that we can get realtime logs from Heroku
$stdout.sync = true
