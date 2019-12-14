# Sort Object

Sort an object's key within source code automatically as part of linting

**IMPORTANT**: This lib only works with Typescript files for now. Open an issue to support Javascript files then we’ll add support to it.

## Install

Install with npm:
```
npm i @fotoncompany/sort-object
```

or with yarn:
```
yarn add @fotoncompany/sort-object
```

## Usage

Use the cli with the `--src` flag as follows:
```
sort-object --src ./packages
```

You can filter which files will be formated through the `--regex` flag, as shown below. The Regex must be a string that can be parsed.
```
sort-object --src ./packages --regex '.input.ts'
```