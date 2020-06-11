install:
	npm install
run:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
inEnv:
	npm install eslint --save-dev
	npm install eslint-config-airbnb-base --save-dev
	npm install eslint-plugin-import --save-dev

.PHONY: install run publish lint inEnv