install: install-deps
	npx simple-git-hooks

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npm test --test-reporter=spec

test-coverage:
	# TODO: set global flag --experimental-test-coverage
	npm test

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test

# install: 
# 	npm ci

#  publish:
# 	 npm publish --dry-run

#  lint:
# 	npx eslint .

# lint fix:
# 	npx eslint --fix .

# gendiff -h:
# 	node gendiff.js 

# test:
# 	npx jest


# build:
# 	./gradlew clean build

# report:
# 	./gradlew jacocoTestReport

# build-run:
# 	 build run

# .PHONY: build