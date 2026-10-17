# Workflow repo for the CA

the purpose of this assignemnt was to set up development tools, automated code formatting, linting and testing.

# installation

clone and install
npm install

start server
npm run dev
the website will be availale at http://localhost:5173/

to run tailwind css watcher
npm run dev:css

# code formatting and linting

project uses prettier for formatting and eslint for js linting

check js files
npx eslint .

check formatting
npx prettier --check .

format files
npx prettier --write .

# git commit hooks

husky and lint-staged used

html files formatted with prettier
js files formatted with prettier and checked with eslint

check run automatically when git commit

# unit testing

vitest tests the isActivePath and getUsername functions

run tests
npm test

# e2e tesing

playwright tests theese functions

successfull login and valid credentials
ettor message when invalid login credentials
navigation from homepage to venue details

install chromium browser
npx playwright install chromium

run test
npx palywright test

# requirements

TEST_USER_EMAIL - email adress of a test account
TEST_USER_PASSWORD - password of a test account

the .env file is excluded from git

# project scripts

nom install - installs project dependencies
npm run devv - starts vite dev server
npm run dev:css - starts the tailwind css watcher
npm test - run vite tests
npx playwright test - runs playwright tests
npx eslint . - checks javascript using eslint
npx prettier --check - checks code for formatting
