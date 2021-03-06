# Photobox Full Stack JS test

Test instructions have been moved to [instructions.md](instructions.md).

Test completed by Adam Holloway. All tasks have been completed. Details of work done below.

- Replaced SCSS with [Styled-Components](https://www.npmjs.com/package/styled-components) for finer control and added basic styling
- Replaced JavaScript with TypeScript for type safety
- Used [React Testing Library](https://www.npmjs.com/package/@testing-library/react) for unit tests
- Used [React Router DOM](https://www.npmjs.com/package/react-router-dom) for routing between home, product and error page
- Route based code splitting of app using [React Loadable](https://www.npmjs.com/package/react-loadable) (would use component based splitting if app grows larger)
- Added home page
- Added page for listing products
- Added "Not Found" page for bad routes

## Instructions

```bash
# Install the dependencies
yarn install

# Run website in dev (hot reload) mode ( http://localhost:3000 )
yarn start

# Run the unit tests
yarn test
```

## Screenshot

Screenshot of app product listing page.

![Product Listing Page screenshot](./src/assets/images/product-listing-screenshot.png)
