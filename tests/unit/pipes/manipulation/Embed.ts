import { getTransformer } from '../../../../src/Sharp';
import { embed } from '../../../../src/pipes/manipulation/Embed';

describe('Embed.ts', () => {
  let sharpInstance = getTransformer();
  let embedMock: jest.Mock<any>;

  beforeEach(() => {
    embedMock = jest.spyOn(sharpInstance, 'embed').mockReturnThis();
  });

  afterEach(() => embedMock.mockReset());

  it('should default to non embed mode', () => {
    embed({}, sharpInstance);
    expect(embedMock).not.toHaveBeenCalled();
  });

  it('should respect query params', () => {
    embed({ embed: 'false' }, sharpInstance);
    expect(embedMock).not.toHaveBeenCalled();
    embedMock.mockReset();

    embed({ embed: 'true' }, sharpInstance);
    expect(embedMock).toHaveBeenCalled();
    embedMock.mockReset();
  });
});
