# FreshBite — Online Food Ordering Website

**Internship task:** WD-EC-001  
**Project:** FreshBite — Online Food Ordering  
**Technologies:** HTML5, CSS3, Vanilla JavaScript  
**Type:** Frontend-only demonstration; no database or backend required.

## Features

- Responsive landing page with hero section, food categories, offers and project information.
- Menu cards with search, category selection, Veg / Non-Veg / Vegan filters and ratings.
- Add to cart, quantity controls, subtotal, delivery fee and total calculation.
- Wishlist toggles and saved-dish view.
- Checkout form with delivery time and simulated payment method.
- `FRESH10` coupon for 10% off the food subtotal.
- Simulated account form, order confirmation and order-tracking progress.
- Mobile navigation, toast notifications and accessible labels for key controls.

## Run locally

1. Download or unzip the project folder.
2. Open `index.html` in a modern browser.
3. For a local development server, open the folder in VS Code and use the Live Server extension, or run `python -m http.server 8000` in the folder and visit `http://localhost:8000`.

No package installation or API keys are required. Food photos and web fonts use external URLs, so an internet connection is needed for those assets. The website itself is plain HTML, CSS and JavaScript.

## Deploy to GitHub Pages

1. Create a public GitHub repository, for example `freshbite-food-ordering`.
2. Upload `index.html`, `styles.css`, `script.js`, `README.md` and `PROJECT_REPORT.md`.
3. In repository **Settings → Pages**, choose deployment from the `main` branch and the root folder.
4. Save and wait for the published URL to appear.

You can also deploy the folder using Netlify or Vercel.

## Test checklist

- Search for a dish and confirm results update.
- Select Pizza or another category and confirm the menu filters.
- Try Veg, Non-Veg and Vegan filters.
- Add items, increase/decrease quantities, and check totals.
- Apply `FRESH10` in checkout.
- Submit checkout with test information and confirm the demo order screen.
- Test mobile layout by narrowing the browser window.

## Important notes

This is a learning/demo project, not a production ordering service. Login, payment and order tracking are simulated in the browser. No real payment is taken, and form data is not sent to a server. Before real-world use, add a secure backend, real authentication, validated order storage, payment-provider integration, privacy notices and server-side validation.
