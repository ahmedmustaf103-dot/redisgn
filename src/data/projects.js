// Project data – images from real waten.com (Squarespace CDN)
const CDN = 'https://images.squarespace-cdn.com/content/v1/679a478f72e1ff7f9f77d1f0';

export const projects = [
  {
    slug: 'murabbaa-residence',
    title: 'Murabaa Residence',
    city: 'Riyadh',
    location: 'Riyadh, Murabaa',
    type: 'Residential',
    status: 'In Progress',
    description: 'Murabaa Residence is a 12 storey residential building located in the Murabaa area in Riyadh. The project is a 74 units mix of one bedroom, two-bedroom and three-bedroom flats with a clear focus on targeting end users of young professionals who wish to commute to their work by metro. A special focus is invested on rich amenities and a sense of community by allocating two entire floors for various types of amenities including a well-equipped gym, lounge area and co-working space.',
    externalLink: 'https://www.waten.com/portfolio/murabaa-residence',
    // Portfolio + project page gallery (waten.com)
    image: `${CDN}/1738257719618-5EK3RT5B4JSY0IIDH2V6/Artboard+1+copy+11.jpg`,
    images: [
      `${CDN}/9e90152e-e154-4fc0-ba0b-eb4ebae9d7eb/Artboard+1+copy+11.jpg`,
      `${CDN}/7442b059-a70b-473f-b7f6-17e55af7f1b7/Untitled-52-gigapixel-high+fidelity+v2-2x.jpeg`,
      `${CDN}/f7394a30-a7d0-4d44-bc81-4c6168fb09d8/Untitled-5.jpg`,
    ],
  },
  {
    slug: 'plaza-dan',
    title: 'Plaza Dan',
    city: 'Makkah',
    location: 'Makkah, Awali District',
    type: 'Commercial',
    status: 'Completed',
    description: 'Plaza Dan is a retail plaza located in the heart of Alawali district in Makkah and sits on a 19,000 sqm land area. It consists of Danub hypermarket and a well-balanced tenant mix varying from fashion to perfume and predominantly F&B brands.',
    externalLink: 'https://www.waten.com/portfolio/plaza-dan',
    // Portfolio + project page gallery (waten.com)
    image: `${CDN}/1738250935690-J3HFE52N7OIVNMBPSH7B/Artboard+1+copy+12.jpg`,
    images: [
      `${CDN}/a0daa67c-e2ed-4968-957b-fbd1ed1eb0ab/%D8%B3%D9%85%D8%A7%D9%88%D9%8A.png`,
      `${CDN}/35cd653c-7681-43f4-b6de-a8bbcb714d66/Artboard+1+copy+12.jpg`,
      `${CDN}/fece01d2-9e54-4b37-badd-cecfee0c772b/Artboard+1+copy+15.jpg`,
      `${CDN}/b034ea84-d464-4eb4-857e-a6ebbeef1a05/Artboard+1+copy+16.jpg`,
      `${CDN}/56cba9fd-6c12-4259-95f7-278970c8ed98/Artboard+1+copy+17.jpg`,
      `${CDN}/82fb7489-6b9f-4f8e-9e44-d60c14b65126/Artboard+1+copy+18.jpg`,
    ],
  },
  {
    slug: 'princess-sara',
    title: 'Princess Sara',
    city: 'Riyadh',
    location: 'Riyadh',
    type: 'Residential',
    status: 'In Progress',
    description: 'The Princess Sara Project is a residential building located within close proximity to King Salman Park. It consists of three floors and a rooftop annex, comprising a total of 11 residential units and 13 designated parking spaces.',
    externalLink: 'https://www.waten.com/portfolio/princess-sara',
    // Portfolio thumbnail + project page gallery (waten.com)
    image: `${CDN}/b96cce12-4451-45f6-aa1f-c1cd757a8879/PSR+-+WATAD_01_final.jpg`,
    images: [
      `${CDN}/f7844b96-121b-4482-81df-c49ad18b7aea/PSR+-+WATAD_01_final.jpg`,
      `${CDN}/4f800de6-6263-44c6-986e-4ddcdb043663/PSR+-+WATAD_02_final.jpg`,
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
