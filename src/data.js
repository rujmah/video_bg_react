const videoData = [
  {
    id: 'u68EWmtKZw0',
    creator: 'Wind Walks Travel Videos',
    snippet:
      'Walking tour of Times Square in Midtown Manhattan, New York City USA Travel Guide ',
    url: 'https://youtu.be/u68EWmtKZw0',
    title: 'Times Square, New York',
    location: 'New York',
    transport: 'Walking',
  },

  {
    id: 'USlSbk3TvLc',
    creator: 'Living Walks',
    location: 'Brighton',
    url: 'https://youtu.be/USlSbk3TvLc',
    title: 'Brighton, UK 2020 - Town & Seafront Saturday Night Walking Tour',
    snippet: 'Brighton, UK 2020 - Town & Seafront Saturday Night Walking Tour',
    transport: 'Walking',
  },
  {
    id: 'uTy4nbXb9Is',
    creator: 'Drive More Daily',
    snippet: 'Cinematic Drive on the South Coast of UK (Worthing-Brighton)',
    url: 'https://youtu.be/uTy4nbXb9Is',
    title: 'Worthing to Brighton Drive',
    location: 'Brighton',
    transport: 'Drive',
  },
  {
    id: 'Fhg8tvyJbAo',
    url: 'https://youtu.be/Fhg8tvyJbAo',
    title:
      'Walking from Venice Beach to Santa Monica Pier in Los Angeles, California',
    location: 'Venice Beach',
    transport: 'Walking',
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
