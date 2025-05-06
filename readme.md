## API Testing framework for gorest

### Clone repository from gitHub
```
clone git 
```
### Pre-requisite
Nodejs<br>
Playwright<br>
Faker<br>
Eslint<br>

### Token generate
```
create a unique token from https://gorest.co.in/ and add it into tests\helper\env.ts authorization key
```
### Install browser for report generate
```
npm i -D @playwright/browser-chromium
```

### Run test
```
npx playwright test
```