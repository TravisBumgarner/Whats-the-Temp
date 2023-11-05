# Setup

Make temp readings from a Particle Boron available to a React frontend via an Express backend.

## Generate API Key

1. Visit password generator to get an API Key


## Boron

1. Navigate to https://console.particle.io/ and select Devices and then Integrations then `Add New Integration`
2. Select `Webhook`
 - Event Name is `tempF`
 - Enter in URL from step 3 of Backend setup, append `/data`
 - Request type is POST
 - Request format is JSON
 - Set header `x-api-key` with password in `Generate API Key`
 - Select Device (Read elsewhere to setup device)
3. Copy code from `boron/main.c` into text editor and upload to device at https://build.particle.io/

## Frontend

1. `yarn` install dependencies
2. `yarn start`

## Cloud Function

1. Edit env variable `API_KEY` to be exact same as password in `Generate API Key`
2. You can delete the .env file to reprompt when deploying.

## Firebase notes

firebase login

firebase init

When you're ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:

firebase deploy

## Debug Notes

npm install -g particle-cli
particle serial monitor
Use web IDE to upload code. 