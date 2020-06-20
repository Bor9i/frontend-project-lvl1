install:
	npm install
run:
	node bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
inEnv:
	npm install eslint@7.2.0 --save-dev
	npm install eslint-config-airbnb-base --save-dev
	npm install eslint-plugin-import --save-dev

.PHONY: install run publish lint inEnv