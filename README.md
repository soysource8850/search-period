# Search Period

Type a period in your search.

## feature

This is helper extension of Google Search.

- Search by period
- Search from history

## development

```sh
yarn build
# tsc --esModuleInterop true

yarn clean-install
# rimraf ./node_modules && yarn install

yarn lint
# eslint './src/**/*.ts'

yarn lint:fix
# eslint --fix './src/**/*.ts'

yarn webpack:dev
# rimraf ./dist && yarn build && webpack --mode development

yarn webpack:prd
# rimraf ./dist && yarn build && webpack --mode production
```

### commit_template

```sh
git config commit.template .commit_template
```

## License

MIT
