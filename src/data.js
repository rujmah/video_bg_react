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
  {
    id: 'yIMDgPKgN1w',
    url: 'https://youtu.be/yIMDgPKgN1w',
    creator: 'Rambalac',
    title:
      'Walking in rainy Arashiyama, Kyoto - Kameyama park and bamboo grove',
    location: 'Arashiyama, Kyoto',
    transport: 'Walking',
  },
  {
    id: 'E2sSvVCRI4s',
    url: 'https://youtu.be/E2sSvVCRI4s',
    creator: 'Watched Walker',
    title:
      'Walking London’s West End in the Rain - Saturday Night City Ambience',
    location: 'West End, London',
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
