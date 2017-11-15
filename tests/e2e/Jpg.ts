import axios from 'axios';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe('Jpeg Queries', () => {
  it('should resize image', async () => {
    const res = await axios.get('http://localhost:3000/test.jpg?width=500');
    expect(res.status).toBe(200);
    expect(res.headers).toMatchObject({ 'content-type': 'image/jpeg' });
    expect(res.data).toMatchSnapshot();
  });

  it('should convert image', async () => {
    const res = await axios.get(
      'http://localhost:3000/test.jpg?width=500&webp=true'
    );
    expect(res.status).toBe(200);
    expect(res.headers).toMatchObject({ 'content-type': 'image/webp' });
    expect(res.data).toMatchSnapshot();
  });

  it('should accept parameters', async () => {
    const res = await axios.get(
      'http://localhost:3000/test.jpg?width=5500&quality=30&progressive=false&blur=0.5&normalize=true&embed=true&max=true'
    );
    expect(res.status).toBe(200);
    expect(res.headers).toMatchObject({ 'content-type': 'image/jpeg' });
    expect(res.data).toMatchSnapshot();
  });
});
