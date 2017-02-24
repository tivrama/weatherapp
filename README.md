## Usage
- Run npm i and then npm start
- Open browser to localhost:8080


Google Maps API takes a longitude and latitude, and I initially wanted to make a call to get the coordinates based from the Zip.  But then I found the weather API at openweathermap returns those coordinates in the JSON.  This API is called in src/actions/index.js

I was also getting errors in the console by directly sending an API to Google Maps from the browser, but found a react plugin that (I believe) circumvents it by requesting from webpack.  I will double check this though.  