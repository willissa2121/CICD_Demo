# Scott Willis CICD Demo

This is a demo application to test CICD practices with building, testing and deploying. 

## Prerequisites
- Node 12 or later versions
- Bash

## Installation

```bash
cd CICD_demo
npm init -y
npm install
```

## Usage

To run appliucation
```bash
node app.js
```
To run the test suite
```bash
npm run test
```

## to create a merge request

```bash
git checkout -b <BRANCH_NAME>
git add .
git commit -m "<MESSAGE>"
git push --set-upstream origin <BRANCH_NAME>