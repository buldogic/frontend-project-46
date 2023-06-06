install: 
	npm ci

 publish:
	 npm publish --dry-run

 lint:
	npx eslint .

lint fix:
	npx eslint --fix .

gendiff -h:
	node gendiff.js 

test:
	npx jest


build:
	./gradlew clean build

report:
	./gradlew jacocoTestReport

build-run:
	 build run

.PHONY: build