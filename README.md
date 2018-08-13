# Serverless AWS Backend

Built as a backend component to complete [Hitchedagram](https://github.com/NCMoseley/Hitchedagram) Application.

# Deploy

```bash
serverless deploy
```

### Usage

To run unit tests on your local

```bash
$ npm test
```

To run a function on your local

```bash
$ serverless invoke local --function hello
```

To simulate API Gateway locally using [serverless-offline](https://github.com/dherault/serverless-offline)

```bash
$ serverless offline start
```

Run your tests

```bash
$ npm test
```

Deploy your project

```bash
$ serverless deploy
```

Deploy a single function

```bash
$ serverless deploy function --function hello
```
