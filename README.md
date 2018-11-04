# Nodejs/Graphql/AWS/Lambda/Serverless/React

## Prerequisites
* Node > 8.0
* create-react-app
* Serverless > 1.2.0 


# Backend

Backend provides a ```Graphql``` API to query data. The application is written in NodeJs/Typescript and can be deployed in AWS Lambda, served with AWS API gateway. Data is stored in a json file. [Serverless](https://serverless.com/) framework is used for deploying application to aws. [Webpack](https://webpack.js.org/) is used for bundling and packaging lambda function.

## Installation
* Install Serverless Framework globally.
```
npm install -g serverless
```
* Go to backend folder and run ```npm install```
* Run ```serverless offline start``` to run application locally.
* Goto ```http://127.0.0.1:3002/graphiql``` to query and see response from the graphql server.
   
## Sample Query
```
{
    data(date:"20180507",currency:"LTC")
    {
        date
        currency
        buy_time
        buy_price
        sell_time
        sell_price
        profit
    }
}
```

## Sample Response
```
{
    "data": {
        "data": [
        {
            "date": "20180507",
            "currency": "LTC",
            "buy_time": "0930",
            "buy_price": "14.32",
            "sell_time": "1245",
            "sell_price": "15.03",
            "profit": "0.71"
        }
        ]
    }
}
```

* Run ```npm test``` to run unit tests.

## Deploying to AWS
* Setup aws [credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/). 
* Run ```serverless deploy``` to deploy application to aws.


# Frontend
Frontend is built in react with ```create-react-app```. Uses ```Redux``` for application's state management.

## Installation
* Go to frontend folder and run ```npm install```
* Run ```npm start``` to run application locally. Requires backend application to run to fetch data.
* Run ```npm test``` to run unit tests.

Data can be filtered by date and/or currency. 
Data available for date ```20180507``` and ```20180508```

