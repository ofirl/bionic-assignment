## Running the application locally

### Install all the dependencies

yarn install
create a .env file with the line: "REACT_APP_GITHUB_API_TOKEN=TOKEN" (with your token) to get better rate limit

### Start the application

npm start

## Remarks

ran out of time when i was getting the heatmap to look good,
so it doesn't look very good :(

but the underlying data is correct :)

also i'm still missing some specific error messages handling (like "Repository not found" instead of "Error loading...").

i'm estimating that with another hour or so i would get the heat map to look ok and i would have all the errors correctly showing

I spent time more on design and UX than on responsiveness, but most stuff should work fine on small phone screens too.
