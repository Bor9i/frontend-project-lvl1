install:
	npm install
run:
	node bin/brain-games.js
even:
	node bin/brain-even.js
calc:
	node bin/brain-calc.js
gcd:
	node bin/brain-gcd.js
progression:
	node bin/brain-progression.js
prime:
	node bin/brain-prime.js	
publish:
	npm publish --dry-run
lint:
	npx eslint .
inEnv:
	npm install eslint@7.2.0 --save-dev
	npm install eslint-config-airbnb-base --save-dev
	npm install eslint-plugin-import --save-dev

.PHONY: install run publish lint inEnv