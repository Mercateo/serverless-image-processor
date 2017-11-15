import axios from 'axios';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe('Png Queries', () => {
  it('should resize image', async () => {
    const res = await axios.get('http://localhost:3000/test.png?width=500');
    expect(res.status).toBe(200);
    expect(res.headers).toMatchObject({ 'content-type': 'image/png' });
    expect(res.data).toMatchSnapshot();
  });

  it('should convert image', async () => {
    const webP = await axios.get(
      'http://localhost:3000/test.png?width=500&webp=true'
    );
    expect(webP.status).toBe(200);
    expect(webP.headers).toMatchObject({ 'content-type': 'image/webp' });
    expect(webP.data).toMatchSnapshot();

    const jpg = await axios.get(
      'http://localhost:3000/test.png?width=500&jpg=true'
    );
    expect(jpg.status).toBe(200);
    expect(jpg.headers).toMatchObject({ 'content-type': 'image/jpeg' });
    expect(jpg.data).toMatchSnapshot();
  });

  it('should accept parameters', async () => {
    const res = await axios.get(
      'http://localhost:3000/test.png?width=2600&progressive=false&blur=0.5&normalize=true&embed=true&max=true'
    );
    expect(res.status).toBe(200);
    expect(res.headers).toMatchObject({ 'content-type': 'image/png' });
    expect(res.data).toMatchSnapshot();
  });
});
