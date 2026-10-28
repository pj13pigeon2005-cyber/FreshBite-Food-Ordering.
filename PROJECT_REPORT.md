# FreshBite — Online Food Ordering Website
## Internship Project Report | Task ID: WD-EC-001

### 1. Objective
The objective of FreshBite is to develop a responsive, user-friendly food ordering interface where users can discover food items, filter menus, add products to a shopping cart, review prices and complete a simulated checkout. The design uses a warm orange, cream and dark-brown palette to create a welcoming food-focused experience.

### 2. Technologies Used
- **HTML5:** Semantic page structure, navigation, forms and content sections.
- **CSS3:** Responsive layouts, grid and flexbox, reusable design tokens, hover states, modal/drawer interfaces and mobile breakpoints.
- **JavaScript:** Menu rendering, search and filters, cart state, quantity changes, price calculations, coupon handling, wishlist state, simulated account flow and checkout confirmation.
- **External assets:** Google Fonts and food photography loaded from remote URLs.

### 3. Features Implemented
1. Home page with hero banner, calls to action, benefits, food categories, promotional offer and about section.
2. Restaurant/menu presentation through food cards showing item name, description, price, category, diet type, rating, preparation time and restaurant.
3. Search and category/diet filtering.
4. Shopping cart with quantity controls, subtotal, delivery fee and final total.
5. Free delivery for orders of ₹499 or more.
6. `FRESH10` demo coupon applying a 10% discount to the food subtotal.
7. Wishlist controls and a view of saved dishes.
8. Checkout form with delivery address, contact number, delivery-time choice and simulated payment selection.
9. Simulated account form, order confirmation identifier and progress/tracking display.
10. Responsive navigation and layouts for desktop and mobile screens.

### 4. Implementation Approach
Food data is represented by a JavaScript array of objects, each containing an identifier, name, category, diet label, price, rating, description, restaurant, delivery estimate and image URL. The menu is generated dynamically from this data. Search text and selected filters determine which cards are displayed. Cart entries store the product data and quantity; totals are calculated from the cart state. Checkout validates required fields in the browser and displays a simulated order confirmation.

### 5. Learning Outcomes
- Practised semantic HTML and responsive CSS.
- Used JavaScript objects and arrays to represent product data.
- Implemented DOM rendering and event handling.
- Applied filtering and search logic.
- Built shopping-cart state and arithmetic for totals, fees and discounts.
- Created forms, modal dialogs, notifications and mobile navigation.
- Learned the difference between a frontend prototype and a production application.

### 6. Challenges and Solutions
- **Keeping cart totals accurate:** Totals are derived from the current cart data rather than maintained separately.
- **Combining multiple filters:** Category, diet and search conditions are applied together in a single filtering function.
- **Supporting mobile screens:** CSS media queries adapt the header, cards, grid columns, forms and promotional section.
- **Demonstrating checkout without a backend:** The project clearly labels account, payment and order status as simulations.

### 7. Limitations and Future Scope
This project is frontend-only. It does not persist orders across reloads, authenticate users, connect to a restaurant, or process actual payments. Future improvements could include a secure backend and database, persistent user accounts, live restaurant availability, real payment gateway, order history, delivery APIs, accessibility testing and automated tests.

### 8. Conclusion
FreshBite demonstrates the core interface and interaction patterns of a food-ordering e-commerce website using HTML5, CSS3 and JavaScript. It meets the main frontend requirements of the internship task and can be run locally or hosted as a static website.
