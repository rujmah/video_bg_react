import {
  videoByTransportAndLocation,
  videoLocations,
  videosByTransport,
  shuffleVideos,
  videoData,
} from './data';

describe('videoLocations', () => {
  test('should return list of locations', () => {
    expect(videoLocations().length).toEqual(5);
    expect(videoLocations().includes(undefined)).toBeFalsy();
    expect(videoLocations().includes('The Lanes, Brighton')).toBeTruthy();
    expect(videoLocations().includes('Times Square, New York')).toBeTruthy();
    expect(videoLocations().includes('Venice Beach, CA')).toBeTruthy();
  });
});

describe('videosByTransport', () => {
  test('should return list of walking videos', () => {
    const vids = videosByTransport('Walking');
    expect(vids.length).toEqual(5);
  });
});

describe('videoByTransportAndLocation', () => {
  test('should return a video for Venice Beach Walking', () => {
    const video = videoByTransportAndLocation({
      transport: 'Walking',
      location: 'Venice Beach, CA',
    });
    expect(video.title).toEqual(
      'Walking from Venice Beach to Santa Monica Pier in Los Angeles, California'
    );
    expect(video.id).toEqual('Fhg8tvyJbAo');
  });
});

describe('videoDataRandom', () => {
  test('should return randomised list of videoData', () => {
    const videosArray = videoData;

    expect(videosArray[0].id).toEqual('u68EWmtKZw0');
    shuffleVideos(videosArray);
    expect(videosArray.length).toEqual(5);
    expect(videosArray[0].id).not.toEqual('u68EWmtKZw0');
  });
});
