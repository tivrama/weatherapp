## Usage
- Run npm i and then npm start
- Open browser to localhost:8080  


Google Maps API takes a longitude and latitude, and I initially wanted to make a call to get the coordinates based from the Zip.  (This API is called in src/actions/index.js) But then I found the weather API at openweathermap returns those coordinates in the JSON.  So I used thos corrodinates for the map.  
  
I was getting errors in the console by directly sending an API to Google Maps from the browser, but found a react plugin that (I believe) circumvents it by requesting from webpack.  I will double check this though.  

I belive the app works as you requested.  But please let me know if I should fix anything up.  I can also improve the CSS - just didn't want to get this back to you too late by spending time on that.  

FYI - This was build on a react-redux boilerplate - not from scratch.  