import {
  videoByTransportAndLocation,
  videoLocations,
  videosByTransport,
} from './data';

describe('videoLocations', () => {
  test('should return list of locations', () => {
    console.log(videoLocations());
    expect(videoLocations().length).toEqual(3);
    expect(videoLocations().includes(undefined)).toBeFalsy();
    expect(videoLocations().includes('Brighton')).toBeTruthy();
    expect(videoLocations().includes('New York')).toBeTruthy();
    expect(videoLocations().includes('Venice Beach')).toBeTruthy();
  });
});

describe('videosByTransport', () => {
  test('should return list of walking videos', () => {
    const vids = videosByTransport('Walking');
    expect(vids.length).toEqual(3);
  });
});

describe('videoByTransportAndLocation', () => {
  test('should return a video for Venice Beach Walking', () => {
    const video = videoByTransportAndLocation({
      transport: 'Walking',
      location: 'Venice Beach',
    });
    expect(video.title).toEqual(
      'Walking from Venice Beach to Santa Monica Pier in Los Angeles, California'
    );
    expect(video.id).toEqual('Fhg8tvyJbAo');
  });
});
