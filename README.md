# My Test Project

Project includes two parts:
- Node.js/Jest demo logic (`people.js`, `people.test.js`)
- Multi-page frontend for MobiFarm

## Frontend tree

```text
pages/
  authentication-sign-in-portal.html
  sales-affiliate-dashboard-overview.html
  product-search-discovery-page.html
  product-detail-information-page.html
  notifications-activity-center.html
  revenue-performance-analytics-dashboard.html
  order-fulfillment-tracking-center.html
  account-profile-management-center.html
assets/
  css/
    shared-global-stylesheet-foundation.css
    authentication-sign-in-page-styles.css
    sales-affiliate-dashboard-styles.css
    product-search-discovery-page-styles.css
    product-detail-information-page-styles.css
    notifications-activity-center-styles.css
    revenue-performance-analytics-styles.css
    order-fulfillment-tracking-styles.css
    account-profile-management-styles.css
  scripts/
    shared-application-utilities.js
    authentication-login-controller.js
    product-catalog-service.js
    homepage-dashboard-controller.js
    product-search-page-controller.js
    product-details-page-controller.js
    user-notifications-center-controller.js
    revenue-analytics-dashboard-controller.js
    order-history-management-controller.js
    account-profile-management-controller.js

## Run

- Open `index.html` to redirect to sign-in page
- Sign in to access dashboard and other modules

## Test logic

```bash
npm test
```
