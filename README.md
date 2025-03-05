# WebdriverIO Test Automation Framework

## Overview
This project is a WebdriverIO-based test automation framework designed to test the shopping cart functionality on the Magento eCommerce platform. The framework supports behavior-driven development (BDD) using Cucumber and follows a structured Page Object Model (POM) for maintainability and scalability.

## Project Structure
```
RedSoftwareDevelopement_Automation_Task/
├── features/
│   ├── cart.feature  # Test scenarios written in Gherkin
├── step-definitions/
│   ├── cartSteps.js  # Step definitions for test scenarios
├── pages/
│   ├── HomePage.js   # Page Object for home page
│   ├── SidebarPage.js # Page Object for sidebar categories
│   ├── ListPage.js   # Page Object for product listing
│   ├── ProductPage.js # Page Object for product details
│   ├── CartPage.js   # Page Object for cart functionality
├── reports/          # Stores test reports and logs
├── wdio.conf.js      # WebdriverIO configuration file
├── package.json      # Node.js dependencies and scripts
├── README.md         # Project documentation
```

## Setup Instructions

### Prerequisites
Ensure the following are installed:
- Node.js (Latest LTS version)
- Google Chrome
- Firefox (if testing cross-browser functionality)
- Geckodriver (for Firefox support)

### Installation Steps
1. Clone the repository:
   ```sh
   git clone <repository_url>
   cd RedSoftwareDevelopement_Automation_Task
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Verify WebdriverIO installation:
   ```sh
   npx wdio --version
   ```

## Running the Tests

### Execute All Tests
```sh
npx wdio
```

### Execute Tests in Headless Mode (For Faster Execution)
```sh
npx wdio --headless
```

### Run Tests in a Specific Browser (Chrome)
```sh
npx wdio --capabilities.browserName=chrome
```

### Run Tests in Firefox
Ensure geckodriver is installed:
```sh
npm install --save-dev wdio-geckodriver-service
```
Then execute:
```sh
npx wdio --capabilities.browserName=firefox
```

## Test Scenario - Shopping Cart Functionality
The framework automates the following test scenario:
1. Navigate to the home page.
2. Select the "Women" category from the top menu.
3. Choose "Tops" from the sidebar.
4. Select a product from the product listing.
5. Choose a color and size.
6. Add the product to the cart.
7. Navigate to the cart.
8. Click "View and Edit Cart."
9. Remove the product from the cart.
10. Verify that the cart is empty.

## WebdriverIO Configuration
The framework is configured in `wdio.conf.js` with:
- **Test framework:** Cucumber
- **Reporters:** Spec and Allure
- **Timeouts:** Configured for pages with long loading times
- **Browsers Supported:** Chrome (default), Firefox

## Reporting and Logging
- **Allure Reports:**
  ```sh
  npx allure generate reports/allure-results --clean && npx allure open
  ```
- **Screenshot Capture:** Failed test cases automatically capture screenshots in `reports/screenshots/`.
- **Console Logging:** Execution logs are generated for debugging.

## Troubleshooting
### Tests Run Without Opening a Browser
Modify `wdio.conf.js` and remove `--headless` from `chromeOptions`.

### Geckodriver Not Found
Install it manually:
```sh
npm install --save-dev wdio-geckodriver-service
```

### Test Execution is Slow
Increase `waitforTimeout` in `wdio.conf.js`:
```js
waitforTimeout: 30000
```

### Element Click Intercepted Error
Use JavaScript executor for clicking elements:
```js
await browser.execute("arguments[0].click();", element);
```

## Conclusion
This WebdriverIO framework provides a structured and scalable solution for automating the Magento shopping cart workflow. It integrates reporting, logging, and cross-browser support for effective test execution and debugging.

