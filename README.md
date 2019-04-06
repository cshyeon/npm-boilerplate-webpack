# Npm Boilerplate
- npm package boilerplate for both node.js and browser.

## Setup
- Edit package.json
```json
"name": "your package name"
```

- Edit webpack.config.js
```javascript
const libraryName = 'your libaray name';
```

## Development

- Start webpack dev mode.
```bash
# Terminal 1
npm run dev
```

- Run dev bundle.js made by webpack
```bash
# Terminal 2
npm start 
```

## Test
```bash
npm test # or npm run test
```

## Production
- Before deployment, Check the production bundling.
```bash
npm run build
# then
npm start
```