install:
	npm install
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
	node bin/brain-progression.js
brain-prime:
	node bin/brain-prime.js	
publish:
	npm publish --dry-run
lint:
	npx eslint .
inEnv:
	npm install eslint@7.2.0 --save-dev
	npm install eslint-config-airbnb-base@14.2.0 --save-dev
	npm install eslint-plugin-import@2.21.2 --save-dev

.PHONY: