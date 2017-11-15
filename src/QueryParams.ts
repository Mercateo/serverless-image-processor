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
   * Preserving aspect ratio, resize the image to the maximum width or height specified then embed on a background of the exact width and height specified.
   * Default: false
   */
  embed?: boolean;

  /**
   * Sets the background for embed mode.
   * Accepts every string format which is accepted by https://www.npmjs.com/package/color.
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
   * Defsult: false
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

export type InputQueryParams = { [P in keyof QueryParams]?: string };
