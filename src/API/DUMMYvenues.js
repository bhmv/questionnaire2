const venues = [
  {
    id: 1,
    title: 'Venue1',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Corporate',
    type: 'Ballroom & Banquett Hall',
    location: 'Miami Beach',
    etaNumber: 'Less than 50',
    budget: '$70,000 or more',
    featured: false
  },
  {
    id: 1,
    title: 'Venue1',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Corporate',
    type: 'Ballroom & Banquett Hall',
    location: 'Miami Beach',
    etaNumber: 'Less than 50',
    budget: '$70,000 or more',
    featured: false
  },
  {
    id: 1,
    title: 'Venue1',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Corporate',
    type: 'Ballroom & Banquett Hall',
    location: 'Miami Beach',
    etaNumber: 'Less than 50',
    budget: '$70,000 or more',
    featured: false
  },
  {
    id: 2,
    title: 'Venue2',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Weddings',
    type: 'Church & Temple',
    location: 'Design District/Wynwood',
    etaNumber: '51-100',
    budget: '$70,000 or more',
    featured: false
  },
  {
    id: 3,
    title: 'Venue3',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Social',
    type: 'Gallery & Museum',
    location: 'Downtown Miami',
    etaNumber: '101-150',
    budget: '$70,000 or more',
    featured: false
  },
  {
    id: 4,
    title: 'Venue4',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Corporate',
    type: 'Parden & Park',
    location: 'North Miami',
    etaNumber: '151-200',
    budget: '$20,000-$70,000',
    featured: false
  },
  {
    id: 5,
    title: 'Venue5',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Weddings',
    type: 'Historic',
    location: 'Coconut Grove',
    etaNumber: '201-250',
    budget: '$20,000-$70,000',
    featured: false
  },
  {
    id: 6,
    title: 'Venue6',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Social',
    type: 'Hotel & Resort',
    location: 'Coral Gables',
    etaNumber: '251-300',
    budget: '$20,000-$70,000',
    featured: false
  },
  {
    id: 7,
    title: 'Venue7',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Corporate',
    type: 'Indoor',
    location: 'South Miami',
    etaNumber: '301-400',
    budget: '$5,000-$10,000',
    featured: false
  },
  {
    id: 8,
    title: 'Venue8',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Weddings',
    type: 'Industrial',
    location: 'Central Dade',
    etaNumber: '401-500',
    budget: '5000-10000',
    featured: false
  },
  {
    id: 9,
    title: 'Venue9',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Social',
    type: 'Mansion & Private Property',
    location: 'Key Biscayne',
    etaNumber: '501-700',
    budget: '$5,000-$10,000',
    featured: false
  },
  {
    id: 11,
    title: 'Venue10',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Corporate',
    type: 'Modern',
    location: 'Florida Keys',
    etaNumber: '701-1000',
    budget: '0-$5,000',
    featured: false
  },
  {
    id: 12,
    title: 'Venue11',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Weddings',
    type: 'Outdoor',
    location: 'Broward County',
    etaNumber: 'Over 1000',
    budget: '0-$5,000',
    featured: false
  },
  {
    id: 13,
    title: 'Venue12',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Social',
    type: 'Party at Sea',
    location: 'Palm Beach County',
    etaNumber: 'less-50',
    budget: '$70,000 or more',
    featured: false
  },
  {
    id: 14,
    title: 'Venue13',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Corporate',
    type: 'Restaurant & Bar',
    location: 'Miami Beach',
    etaNumber: '101-150',
    budget: '$5,000-$10,000',
    featured: false
  },
  {
    id: 15,
    title: 'Venue15',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Weddings',
    type: 'Rooftop',
    location: 'Miami Beach',
    etaNumber: '151-200',
    budget: '$5,000-$10,000',
    featured: false
  },
  {
    id: 16,
    title: 'Venue16',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Social',
    type: 'Rustic',
    location: 'Miami Beach',
    etaNumber: '201-250',
    budget: '$5,000-$10,000',
    featured: false
  },
  {
    id: 17,
    title: 'Venue17',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Corporate',
    type: 'Studio',
    location: 'Design District/Wynwood',
    etaNumber: '251-300',
    budget: '$5,000-$10,000',
    featured: false
  },
  {
    id: 18,
    title: 'Venue18',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Weddings',
    type: 'Theater',
    location: 'Downtown Miami',
    etaNumber: '301-400',
    budget: '$5,000-$10,000',
    featured: false
  },
  {
    id: 19,
    title: 'Venue19',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'SocialEvents',
    type: 'Waterfront',
    location: 'North Miami',
    etaNumber: '401-500',
    budget: '$70,000 or more',
    featured: false
  },
  {
    id: 20,
    title: 'Venue20',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Industrial',
    type: 'Waterfront',
    location: 'Coconut Groove',
    etaNumber: '701-1000',
    budget: '$15,000-$20,000',
    featured: false
  },
  {
    id: 21,
    title: 'Venue21',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Weddings',
    type: 'Waterfront',
    location: 'Coral Gables',
    etaNumber: 'Over 1000',
    budget: '$15,000-$20,000',
    featured: false
  },
  {
    id: 22,
    title: 'Venue22',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Weddings',
    type: 'Studio',
    location: 'Coral Gables',
    etaNumber: 'Over 1000',
    budget: '$15,000-$20,000',
    featured: false
  },
  {
    id: 23,
    title: 'Venue23 - Featured',
    cover: 'https://bit.ly/2YLtBQF',
    category: 'Weddings',
    type: 'Studio',
    location: 'Coral Gables',
    etaNumber: '701-1000',
    budget: '$15,000-$20,000',
    featured: true
  }
];

export default venues;
