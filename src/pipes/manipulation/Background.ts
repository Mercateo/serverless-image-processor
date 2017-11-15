import { curry } from 'ramda';
import { SharpInstance } from 'sharp';
import { InputQueryParams } from '../../QueryParams';

export const background = curry(
  (queryParams: InputQueryParams, transformer: SharpInstance) => {
    if (queryParams.background != null) {
      return transformer.background(queryParams.background);
    }

    return transformer;
  }
);
