import { curry } from 'ramda';
import { SharpInstance } from 'sharp';
import { InputQueryParams } from '../../QueryParams';
import { toBoolean } from '../../Utils';

export const max = curry(
  (queryParams: InputQueryParams, transformer: SharpInstance) => {
    if (toBoolean(queryParams.max)) {
      return transformer.max();
    }

    return transformer;
  }
);
