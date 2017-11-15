import { getTransformer } from '../../../../src/Sharp';
import { background } from '../../../../src/pipes/manipulation/Background';

describe('Background.ts', () => {
  let sharpInstance = getTransformer();
  let backgroundMock: jest.Mock<any>;

  beforeEach(() => {
    backgroundMock = jest.spyOn(sharpInstance, 'background').mockReturnThis();
  });

  afterEach(() => backgroundMock.mockReset());

  it('should default to no background', () => {
    background({}, sharpInstance);
    expect(backgroundMock).not.toHaveBeenCalled();
  });

  it('should respect query params', () => {
    background({ background: 'rgb(0,0,0)' }, sharpInstance);
    expect(backgroundMock).toHaveBeenCalledWith('rgb(0,0,0)');
    backgroundMock.mockReset();

    background({ background: '#fff' }, sharpInstance);
    expect(backgroundMock).toHaveBeenCalledWith('#fff');
    backgroundMock.mockReset();
  });
});
