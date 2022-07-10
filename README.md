# Project Kalou

Calculator to simulate and predict Equity and Net Income. 

## 1.1 How to run 


### 1.1.1 Dependencies
-    "dependencies": {
        "@faker-js/faker": "^7.3.0",
        "@testing-library/jest-dom": "^5.16.4",
        "@testing-library/react": "^13.3.0",
        "@testing-library/user-event": "^13.5.0",
        "bootstrap": "^5.1.3",
        "bulma": "^0.9.4",
        "chart.js": "^3.8.0",
        "prop-types": "^15.8.1",
        "react": "^18.2.0",
        "react-bootstrap": "^2.4.0",
        "react-chartjs-2": "^4.2.0",
        "react-dom": "^18.2.0",
        "react-scripts": "5.0.1",
        "styled-components": "^5.3.5",
        "web-vitals": "^2.1.4"
      },
      
## 1.2 Functionality 
1. Choose type of input (Asset, Liability, Income, Expense)
2. Enter name for the input and the amount
3. Submit and observe change in prediction

## 1.3 Planned Improvements
- Support for exponential predictions (inflation)
- Simulation of randomness by introducing noise (Expenses vary slightly between months)
- Specify time period to simulate (Available in code but plan to make accessible to user)
- Create separate tables for each input type, option to view each input plot separately.
- Enable user to enter previous months amounts for an input type to obtain more accurate predictions
- Create templates with most common inputs (e.g income with tax, mortgage, utilities etc) which the user can modify to suit their needs.
- Overlay secondary plot to observe the effect of changing one input on their net income.
