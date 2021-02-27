const videoData = [
  {
    id: 'u68EWmtKZw0',
    creator: 'Wind Walks Travel Videos',
    url: 'https://youtu.be/u68EWmtKZw0',
    title:
      'Walking tour of Times Square in Midtown Manhattan, New York City USA Travel Guide',
    location: 'Times Square, New York',
    transport: 'Walking',
  },
  {
    id: 'USlSbk3TvLc',
    creator: 'Living Walks',
    location: 'The Lanes, Brighton',
    url: 'https://youtu.be/USlSbk3TvLc',
    title: 'Brighton, UK 2020 - Town & Seafront Saturday Night Walking Tour',
    transport: 'Walking',
  },
  {
    id: 'Fhg8tvyJbAo',
    url: 'https://youtu.be/Fhg8tvyJbAo',
    title:
      'Walking from Venice Beach to Santa Monica Pier in Los Angeles, California',
    location: 'Venice Beach, CA',
    transport: 'Walking',
    creator: 'Wind Walk Travel Videos',
  },
];

const videoLocations = () => [...new Set(videoData.map((v) => v.location))];
const videosByTransport = (transport) =>
  videoData.filter((v) => v.transport === transport);
const videoByTransportAndLocation = (p) =>
  videoData.find(
    (v) => v.transport === p.transport && v.location === p.location
  );

export {
  videoLocations,
  videoData,
  videosByTransport,
  videoByTransportAndLocation,
};
