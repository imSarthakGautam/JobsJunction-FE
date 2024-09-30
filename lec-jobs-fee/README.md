# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


```
root/
├── node_modules/             # External libraries and dependencies
├── public/                   # Public assets
│   ├── css/                  # Global CSS styles
│   ├── fonts/                # Custom fonts
│   ├── images/               # Images used in the app
│   ├── js/                   # External JavaScript libraries
│   ├── webfonts/             # Icon fonts (e.g., Font Awesome)
│   ├── index.html            # Main HTML file (entry point for React)
│   ├── manifest.json         # PWA configuration
│   ├── robots.txt            # SEO configuration
|
├── src/                      # Application logic and React
│   ├── components/
│   │   ├── common/ 
│   │   │   └── Header/
│   │   │       ├── index.js           # Combines header components
│   │   │       ├── logo.js            # Logo display component
│   │   │       ├── menu.js            # Header menu navigation
│   │   │       ├── nav.js             # Navigation bar within header
│   │   │       ├── searchbar.js       # Search functionality in header
│   │   │       ├── useraccount.js     # User account/profile section in header
│   │   │ 
│   │   ├── Pages/
│   │   │   ├── home/
│   │   │   │   ├── main/              
│   │   │   │   │   ├── leftside/                 
│   │   │   │   │   │   ├── suggestions/
│   │   │   │   │   │   │   └── index.js           # Suggested connections or groups for the user
│   │   │   │   │   │   ├── userdata/
│   │   │   │   │   │   │   └── index.js           # Displays basic user profile information
│   │   │   │   │   ├── middle/                   
│   │   │   │   │   │   ├── newpost.js             # Component for creating new posts
│   │   │   │   │   │   ├── postlist/
│   │   │   │   │   │   │   ├── post/
│   │   │   │   │   │   │   │   ├── commentssec.js # Manages comments for a post
│   │   │   │   │   │   │   │   └── index.js       # Displays a single post
│   │   │   │   │   │   │   └── index.js           # Combines posts and renders the post list
│   │   │   │   │   ├── rightside/                
│   │   │   │   │   │   ├── about.js               # Displays information about the app or user
│   │   │   │   │   │   ├── links.js               # Renders useful links for the user
│   │   │   │   │   │   └── index.js               # Combines right side components (about, links)
│   │   │   │   ├── chatbox.js                     # Embedded chat feature on home page
│   │   │   │   └── index.js                       # Combines home page components
│   │   │   ├── login/
│   │   │   │   ├── companyinfo.js                 # Shows company/app information on the login page
│   │   │   │   ├── index.js                       # Combines login-related components (signin, signup)
│   │   │   │   ├── signin.js                      # Handles the user sign-in form
│   │   │   │   ├── signup.js                      # Handles the user sign-up form
│   │   │   |
│   ├── config/                                    # App configurations (e.g., API URLs)
│   ├── App.css                                    # Styles for App component
│   ├── App.js                                     # Main component of the React app
│   ├── App.test.js                                # Test file for App.js
│   ├── index.css                                  # Global styles for the app
│   ├── index.js                                   # Entry point for React (ReactDOM renders App here)
│   ├── setupTests.js                              # Test environment setup

```