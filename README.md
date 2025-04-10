# Investment Calculator

This is a React-based web application that calculates investment growth over time based on user inputs such as initial investment, annual contributions, expected return rate, and duration.

## Features

- **Dynamic Input Handling**: Users can input their investment details, and the app dynamically calculates the results.
- **Results Table**: Displays a detailed breakdown of yearly investment growth, including interest earned and total value.
- **Responsive Design**: Styled with CSS for a clean and responsive user interface.

## Project Structure

```bash
InvestmentCalculator/
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Displays the app header and logo
│   │   ├── UserInputs.jsx     # Handles user input for investment details
│   │   ├── Results.jsx        # Displays the calculated investment results
│   ├── util/
│   │   ├── investment.js      # Contains logic for investment calculations
│   ├── App.jsx                # Main app component
│   ├── index.jsx              # Entry point for the React app
│   ├── index.css              # Global styles
├── vite.config.js             # Vite configuration
├── package.json               # Project dependencies and scripts
├── index.html                 # HTML template
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/investment-calculator.git
   cd investment-calculator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

## Usage

1. Enter the following details in the input fields:
   - **Initial Investment**: The starting amount of your investment.
   - **Annual Investment**: The amount you plan to invest each year.
   - **Expected Return**: The annual percentage return you expect.
   - **Duration**: The number of years you plan to invest.

2. View the results table, which shows:
   - Yearly investment value
   - Interest earned per year
   - Total interest earned
   - Total invested capital

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **CSS**: For styling the application.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
