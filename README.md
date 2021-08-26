# Native Scroller

### A framework agnostic web component scroller that only uses CSS to mimic native app behavior.

[![CodeFactor](https://www.codefactor.io/repository/github/dmbdesignpdx/native-scroller/badge)](https://www.codefactor.io/repository/github/dmbdesignpdx/native-scroller)

## Getting Started

Install

```bash
# npm
npm i native-scroller

# yarn
yarn native-scroller

# pnpm
pnpm native-scroller
```

Import just once, preferably in a root file.

```js
import 'native-scroller';
```

Use wherever you use HTML

```html
<native-scroller></native-scroller>
```

## Props

- `inline` (String) - How wide is each child relative to the scroller container. Default: `'100%'`.
- `gap` (String) - The space between each child. Default: `'15px'`.


## Example

```html
<native-scroller
  inline="66.6%"
  gap="18px"
>
  <img src="..." alt="" />
  <img src="..." alt="" />
  <img src="..." alt="" />
  <img src="..." alt="" />
  <img src="..." alt="" />
</native-scroller>
```
