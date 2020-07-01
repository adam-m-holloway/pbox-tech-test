# Photobox Full Stack JS test

🚨 Time spent: 1hr. With more time I would:
  * use react-loadable to load pages
  * add TypeScript
  * replace Sass with Styled Components
  * improve loading states
  * make height of product card inner items equal to others
  * if app was to grow I would replace route splitting with component splitting
🚨


This test is designed for potential full stack developers to demonstrate their coding skills. It's intended to be done in less than 90 minutes, but don't hold back in showing your skills. We're mainly interested in seeing how you approach this problem and how far you'll get.

When you are commiting changes, please do this in a way you would do it in a normal development process.

The test does not have any intentional bugs. So if you do find any, you can relay them back to us. Start by cloning the repository, add your changes and send us a link back to your work.

## Deliverable

Your task is to create part of a listing page for the products that you receive from an API. The data for the listing page can be accessed via `/api/products` (see. /api folder). Tip: Where are the decimal indicators for the prices! :)

Please return at minimum a component and a test using `jest`. Feel free to import any modules that you feel you require or make any changes you deem necesary.

This is what a single product card should look like:

![listing page product card example](/public/images/design.png)

Behaviour of product cards at different breakpoints:

- Mobile (320px > screen < 480px): one product card per row
- Tablet (480px > screen < 768px): two product cards per row
- Desktop (768 px > screen < inf): three product cards per row

The product cards should be contained within 1024px and be aligned in the centre.

If the user types in any other URL, it should return a basic 404 page. Keep it stateless, if possible.

## Main commands

```bash
# Install the dependencies
yarn install

# Run website in dev (hot reload) mode ( http://localhost:3000 )
yarn start

# Run the unit tests
yarn test
```

## Other useful commands

```bash
# Create a production build
yarn build

# Serve content from build folder
yarn global add serve
serve -s build
```
