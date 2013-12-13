#!/bin/bash
git add --all
git commit -m "$1"
git pull
git push
git pull heroku master
git push heroku master
