# serverless-image-processor

[![Build Status](https://travis-ci.org/Mercateo/serverless-image-processor.svg?branch=master)](https://travis-ci.org/Mercateo/serverless-image-processor)
[![Coverage Status](https://coveralls.io/repos/github/Mercateo/serverless-image-processor/badge.svg?branch=master)](https://coveralls.io/github/Mercateo/serverless-image-processor?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/Mercateo/serverless-image-processor.svg)](https://greenkeeper.io/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![NSP Status](https://nodesecurity.io/orgs/opensource/projects/c56c0c76-edb1-460a-95c0-4be30a573a57/badge)](https://nodesecurity.io/orgs/opensource/projects/c56c0c76-edb1-460a-95c0-4be30a573a57)
[![Maintainability](https://api.codeclimate.com/v1/badges/149b0866f7121aad91a9/maintainability)](https://codeclimate.com/github/Mercateo/serverless-image-processor/maintainability)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/Mercateo/serverless-image-processor/blob/master/LICENSE)

This is a [Serverless](https://serverless.com) starter for an image processing lambda. It will create a Cloudfront Distribution, an API Gateway, a image source Bucket and a Lambda function. It's based on the phenomenal [sharp](https://github.com/lovell/sharp) image manipulation and conversion library.

Request flow is:  
User -> Cloudfront -> API Gateway -> Lambda

## Demo
![test.png](https://d1tk3y1sqx2xzp.cloudfront.net/test.png?width=200) ![test.jpg](https://d1tk3y1sqx2xzp.cloudfront.net/test.jpg?width=200) ![test.gif](https://d1tk3y1sqx2xzp.cloudfront.net/test.gif?width=200)
https://d1tk3y1sqx2xzp.cloudfront.net/test.png?width=200 
https://d1tk3y1sqx2xzp.cloudfront.net/test.jpg?width=200 
https://d1tk3y1sqx2xzp.cloudfront.net/test.gif?width=200

## Supported formats
  
Input: ```image/jpeg```, ```image/png```, ```image/gif```  
Output: ```image/jpeg```, ```image/png```, ```image/webp```


## Query params
```typescript
export interface QueryParams {
  /**
   * The width/height of the output image.
   * If you specify only one dimension (width or height) the image will be scaled respecting the ratio.
   * If you specify both the image will be croped to the center if possible.
   * If nothing is specified the width will default to 1920.
   * Allowed values: 1 - 5000
   */
  width?: number;
  height?: number;

  /**
   * Do not enlarge the output image if the input image width or height are already less than the required dimensions. 
   * Default: true
   */
  withoutEnlargement?: boolean;

  /**
   * Preserving aspect ratio, resize the image to the maximum width or height specified then embed on a background of the exact width and height specified.
   * Default: false
   */
  embed?: boolean;

  /**
   * Sets the background for embed mode.
   * Accepts every string format which is accepted by https://www.npmjs.com/package/color.
   * Default: black
   */
  background?: string;

  /**
   * Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to the width and height specified.
   * Both width and height must be provided via resize otherwise the behaviour will default to crop.
   * Default: false
   */
  max?: boolean;

  /**
   * Converts the input image to jpg.
   * Default: false
   */
  jpg?: boolean;

  /**
   * Converts the input image to webp.
   * Default: false
   */
  webp?: boolean;

  /**
   * Specifies the output quality for jpg and webp.
   * Allowed values: 1 - 100
   * Default: 75
   */
  quality?: number;

  /**
   * Specifies if the output is a progressive image.
   * Only for jpg and png output.
   * Default: true
   */
  progressive?: boolean;

  /**
   * Blur the image.
   * Needs a value between 0.3 and 100 representing the sigma of the Gaussian mask, where sigma = 1 + radius / 2.
   * Keep in mind higher values will be very slow.
   */
  blur?: number;

  /**
   * If true the output image will be normalized to enhance
   * contrast by stretching its luminance to cover the full dynamic range.
   * Default: false
   */
  normalize?: boolean;
}
```

## Local development

1. ```$ yarn```
2. ```$ yarn start```

That's it! :)

The start command will spin up an offline version of an API Gateway and a local S3 server (via [serverless-offline](https://github.com/dherault/serverless-offline)). After this you can query some test images (test.gif, test.jpg and test.png) via ```http://localhost:3000```. Due to restrictions in this setup you will only see the Base64 encoded response. 

## Contributing
Please feel free to open issues or create PRs. :)  
Just run the test suites (```yarn test``` and ```yarn test:e2e```) and create new tests for added features.
Also make sure you run ```yarn lint``` (and ```yarn lint:fix```) to check for code style issues.
Notice: the end to end tests may fail on your setup. I work on this :/

## A note on updating sharp
```sharp``` is fixed at version ```0.18.4```. If you plan to upgrade please follow [this](http://sharp.dimens.io/en/stable/install/#aws-lambda) guide and place the output in the ```compiled/``` folder.

## Credits
Example photos by Adi Constantin, Michael DePetris, Blake Connally on Unsplash

