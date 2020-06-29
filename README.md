# Weather-app

### Instructions

#### To start app:

1. Clone this repo.
3. Run `npm i` to install necessary packages.
4. Run `npm run dev` to run the app. That will launch the express proxy server and the Frontend application parallely.
5. Navigate in your browser to [http://localhost:3000](http://localhost:3000)

#### To run tests:

Run `npm test`

#### To start frontend app:

Run `npm start`

#### To start server:

Run `npm run server`

### Technical and design considerations

The data fetched includes weather information for 5 consecutive days. *The goal is to create a weather application displaying the weather for a single day.* Due to that, I made a decision to split the data per day and then added two small arrows at the top left and top right of the screen to navigate between the different days.

To resolve the CORS dilemma, a simple express proxy is implemented. When the app is run using `npm run dev`, that starts both the server and the app parallely. With this setup, the calls are proxied through the server.

When examining the returned weather data, three main conditions were found (Clouds, Rain, Clear). There was not an asset provided for the rain condition. Also, the sun svg was in a different color than the clouds one. I added a rain asset that looks aesthetically similar and changed the color of the sun svg to match that of the clouds.

Finally, *Ideally, your solution works on small and large screens*. The provided design would not have worked so well on smaller screens. For that I took the liberty to improvise a bit. I slightly adjusted the layout to work for phones, tablets, etc..

To acheive the required functionality and resilience a bunch of different packages, libraries and services where used:

1. Express for the proxy server
2. Styled-components for styling and basic animation
3. React testing library and jest for testing
4. aXe for accessibility auditing
5. Chrome dev tools for responsiveness and debugging