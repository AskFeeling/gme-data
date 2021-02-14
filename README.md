# New Name Admin UI

The admin dashboard for New Name team leads to trigger jobs to auto-scrape the latest ads for their advocate teams to reach out to. It is a single page React App which was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

We've deployed this site using [Cloudflare Workers](https://workers.cloudflare.com/)

![Tests](https://github.com/NewNameTech/admin-ui/workflows/Pre-merge%20Test/badge.svg)
![Deploy to Production](https://github.com/NewNameTech/admin-ui/workflows/Deploy%20to%20Production/badge.svg?branch=master)

## Local Dev

If you've cloned this project for the first time, be sure to run `npm install` before attempting any of the following commands to make sure your environment is properly set up.

You will also need to install [wrangler](https://developers.cloudflare.com/workers/cli-wrangler), the Cloudflare Workers CLI, and configure your account with an API key from the [newnametech Cloudflare account](https://dash.cloudflare.com/0e293947a1316ee94c2ed56222c135aa/newnametech.com):
```
$ npm i @cloudflare/wrangler -g
```
After installing wrangler, you will want to create an [API token](https://developers.cloudflare.com/workers/cli-wrangler/authentication) with the `Edit Cloudflare Workers` template. This API token can be added to your wrangler config like:
```
$ wrangler config
Enter API token:
superlongapitoken
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run preview`

Builds the app and deploys to a cloud sandbox environment using the [Cloudflare Workers Preview Service](https://cloudflareworkers.com/#12a9195720fe4ed660949efdbd9c0219:https://tutorial.cloudflareworkers.com) for you to view your app as it would look running in production before deploying. This will also watch your changes if you want to console.log anything in the project for debugging purposes.

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
