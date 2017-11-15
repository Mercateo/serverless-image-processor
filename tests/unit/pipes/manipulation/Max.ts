import { getTransformer } from '../../../../src/Sharp';
import { max } from '../../../../src/pipes/manipulation/Max';

describe('Max.ts', () => {
  let sharpInstance = getTransformer();
  let maxMock: jest.Mock<any>;

  beforeEach(() => {
    maxMock = jest.spyOn(sharpInstance, 'max').mockReturnThis();
  });

  afterEach(() => maxMock.mockReset());

  it('should default to non max mode', () => {
    max({}, sharpInstance);
    expect(maxMock).not.toHaveBeenCalled();
  });

  it('should respect query params', () => {
    max({ max: 'false' }, sharpInstance);
    expect(maxMock).not.toHaveBeenCalled();
    maxMock.mockReset();

    max({ max: 'true' }, sharpInstance);
    expect(maxMock).toHaveBeenCalled();
    maxMock.mockReset();
  });
});
