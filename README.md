# Gizmo by Hytech Cypress Automation

This project automates the Gizmo website using Cypress with JavaScript.

**Gizmo by Hytech** is a CRM program for managing solar panels, solar panel design, energy efficiency sales, and other renewable energy-related activities. This system guarantees to be a solution that can speed up the sales pipeline and back-office tasks.

**Requirement to test successfully the Gizmo project** Clone Gizmo repository or make a pull request to get access to the Gizmo web project and install the following dependecies.

## How to run

- Install PHP (prefered version [7.4+](https://windows.php.net/downloads/releases/archives/php-test-pack-7.4.26.zip))
- Install [Composer](https://getcomposer.org/download/)
- Download the [gRPC](https://pecl.php.net/package/gRPC/1.43.0/windows) extension in PHP and configure it
- Clone the repository Github Desktop or SSH:

  `$ git clone git@github.com:hytechbarett/gizmo.git`

- Install dependecies:

  `$ composer install`

- Clone enviroment file
  `$ cp .env.example .env`

- Configure the database on your `.env` file

- Generate app key:

  `$ php artisan key:generate`

- Open the repo on your IDE or a terminal and run:

  `$ php artisan serve`

If you want to serve the project on your own you can use tools like:

- **Laragon**: Easy to use and portable version is lighter.

## Cypress Dependencies

- [Cypress](https://www.cypress.io/) (^13.9.0)
- [cypress-file-upload](https://github.com/abramenal/cypress-file-upload) (^5.0.8)
- [cypress-xpath](https://github.com/cypress-io/cypress-xpath) (^2.0.1)
- [Mocha](https://mochajs.org/) (^10.4.0)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:hytechnexo/Gizmo-Automation.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Gizmo-Automation
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

To run the Cypress tests, use the following command:

```bash
npx cypress open
```

This will open the Cypress Test Runner. Follow these steps to run the tests:

1. Select "e2e Testing" from the list of available test suites on the left sidebar.

2. Choose your preferred browser (e.g., Chrome, Firefox, etc.) from the dropdown menu located at the top right corner of the Cypress Test Runner window.

3. Once you've selected the test suite and browser, click on the spec file you want to run from the list of available spec files displayed in the Cypress Test Runner window.

The selected spec file will open in the browser you've chosen, and you can interactively run and debug your tests.

## Contributing

Contributions are welcome! Please check out the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

## License

This project is licensed under the [ISC License](Gizmo By Hytech).

```

```
