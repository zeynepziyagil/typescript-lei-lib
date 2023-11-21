
# TypeScript LEI Library

[![npm version](https://img.shields.io/npm/v/typescript-lei.svg)](https://www.npmjs.com/package/typescript-lei-lib)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

API wrapper in TypeScript for GLEIF(LEI) API for Node & Browsers to be used in Company Service and the Web App.

## Installation

```bash
npm install typescript-lei-lib
```

## Usage

### Importing the Library

```typescript
import { getLEIRecordByID, getAutocompletions, getFuzzyCompletions } from 'typescript-lei-lib';
```

### Example Usage

#### Get LEI Record by ID

```typescript
const leiRecord = await getLEIRecordByID("789000Q21SW842S9IJ58");
console.log("LEI Record:", leiRecord);
```

#### Get Autocompletions

```typescript
const autocompletions = await getAutocompletions("fulltext", "Global");
console.log("Autocompletions:", autocompletions);
```

#### Get Fuzzy Completions

```typescript
const fuzzyCompletions = await getFuzzyCompletions("entity.legalName", "factbook");
console.log("Fuzzy Completions:", fuzzyCompletions);
```

## Contributing

Feel free to contribute to this project. Your contributions are valued!

- Fork this repository
- Create your feature branch: `git checkout -b feature/new-feature`
- Commit your changes: `git commit -am 'Add a new feature'`
- Push to the branch: `git push origin feature/new-feature`
- Submit a pull request


## Author

- [@zeynepziyagil](https://github.com/zeynepziyagil) - Original Author


