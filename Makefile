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

tets:
	npx jest


build:
	./gradlew clean build

build-run:
	 build run

.PHONY: build