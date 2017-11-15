import { curry } from 'ramda';
import { SharpInstance } from 'sharp';
import { InputQueryParams } from '../../QueryParams';
import { toBoolean } from '../../Utils';

export const embed = curry(
  (queryParams: InputQueryParams, transformer: SharpInstance) => {
    if (toBoolean(queryParams.embed)) {
      return transformer.embed();
    }

    return transformer;
  }
);
