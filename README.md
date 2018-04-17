# EU Country List - React Native App
This is an app that lists all the countries of the European Union. It was built using React Native and is part of a technical challenge.
It uses the RESTCountries.eu API.

## Getting Started
### Installing
```
git clone git@github.com:ingmaras/eu-country-app.git
yarn
exp start
exp android OR exp ios
```
### Running the Tests
```
yarn test
```
## Scenes
The app consists of two scenes:
* `WelcomeScene` - this is a very simple scene that contains the title of the app and a button that allows the user to progress to the next scene.
* `CountryListScene` - this is a scene that displays the list of countries. It displays a spinner whilst the country data is loaded from the API and then renders the countries inside a `SectionList`. If there is no network connectivity, it displays an error message and allows the user to manually trigger a reload.
## Structure
The app consists of 5 directories inside the `src` directory:
* `/components` - this directory contains all the presentational stateless components.
* `/config` - this directory contains configuration files
* `/containers` - this directory contains all the container components.
* `/scenes` - this directory contains the two screens that are visible in the app.
* `/services` - this directory contains interfaces to the API.

## Technology Stack
* `axios` for HTTP requests to the API
* `react-native-extended-stylesheet` for sharing colours throughout the app
* `react-navigation` for navigation between the two screens
* `jest` for component snapshot tests
* `eslint` and `eslint-config-airbnb` for code linting
## Potential Future Improvements
These are some potential future improvements I would make if I knew that the app is likely to grow in size.
* Abstract loading behavior by writing a HOC class or using a library like `react-native-loading-container` depending on the required behaviour in case of issues like loss of internet connectivity.
* Write E2E tests using something like `detox` to test the whole flow including edge cases such as when internet connectivity is lost
* Use a state container like `redux` or `MobX` if the app grows in complexity. This is very easy to do, however I felt this was overkill for such a simple app.
