export interface Itinerary {
  id: string;
  title: string;
  destination: string;
  region: 'europe' | 'india' | 'china-asia';
  days: number;
  style: string[];
  budgetTiers: {
    cheap: { perDay: string; total: string };
    mid: { perDay: string; total: string };
    luxury: { perDay: string; total: string };
  };
  walkingScore: number;
  bestSeason: string;
  heroImage: string;
  description: string;
  highlights: string[];
  dayByDay: {
    day: number;
    title: string;
    activities: string[];
    meals: string;
    transport: string;
  }[];
  transport: {
    public: string;
    shuttle: string;
    carRental: string;
  };
  stay: {
    hostel: string[];
    hotel: string[];
    luxury: string[];
  };
  sustainabilityTips: string[];
}

export const itineraries: Itinerary[] = [
  // EUROPE
  {
    id: 'florence-tuscan-nature',
    title: 'City Walks + Tuscan Nature Half-Day Escapes',
    destination: 'Florence, Italy',
    region: 'europe',
    days: 3,
    style: ['cityscapes', 'nature', 'culture', 'food'],
    budgetTiers: {
      cheap: { perDay: '€45-60', total: '€135-180' },
      mid: { perDay: '€90-120', total: '€270-360' },
      luxury: { perDay: '€200-300', total: '€600-900' },
    },
    walkingScore: 95,
    bestSeason: 'Apr-Jun, Sep-Oct',
    heroImage: 'https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=1200',
    description: 'Wander Renaissance streets in the morning, escape to Tuscan hills by afternoon. Perfect blend of art, food, and nature.',
    highlights: ['Duomo sunrise views', 'Boboli Gardens', 'Fiesole hill town', 'Oltrarno artisan quarter'],
    dayByDay: [
      {
        day: 1,
        title: 'Historic Center + River Walk',
        activities: ['Duomo complex morning visit', 'Piazza della Signoria', 'Ponte Vecchio sunset walk', 'Oltrarno dinner'],
        meals: 'Breakfast at local bar, lunch at Mercato Centrale, dinner in Santo Spirito',
        transport: 'Walking only (3-4km)',
      },
      {
        day: 2,
        title: 'Gardens + Fiesole Escape',
        activities: ['Boboli Gardens morning', 'Piazzale Michelangelo', 'Bus to Fiesole', 'Hilltop walks + Roman ruins'],
        meals: 'Pack picnic for Fiesole, dinner back in Florence',
        transport: 'Bus #7 to Fiesole (€1.50)',
      },
      {
        day: 3,
        title: 'Artisan Quarter + Departure',
        activities: ['San Lorenzo Market', 'Leather workshops tour', 'Santa Croce', 'Final gelato walk'],
        meals: 'Brunch at artisan café, light lunch',
        transport: 'Walking + train to airport',
      },
    ],
    transport: {
      public: 'Florence is highly walkable. Bus pass €5/day for Fiesole trip. Train to/from airport €6.',
      shuttle: 'Airport shuttle €6 one-way. Day trips to Siena/San Gimignano €25-40.',
      carRental: 'Not recommended for Florence city. Consider for day 4+ Tuscan exploration (€40-60/day).',
    },
    stay: {
      hostel: ['Plus Florence (€25-40)', 'Hostel Archi Rossi (€20-35)', 'Academy Hostel (€30-45)'],
      hotel: ['Hotel Davanzati (€120-180)', 'Hotel Perseo (€90-130)', 'Hotel Palazzo Guadagni (€140-200)'],
      luxury: ['Portrait Firenze (€500+)', 'Hotel Lungarno (€350-500)', 'Four Seasons (€700+)'],
    },
    sustainabilityTips: [
      'Carry refillable bottle - free fountains everywhere',
      'Walk the city, skip taxis',
      'Visit museums on free-entry days',
      'Eat at trattorias, not tourist traps',
    ],
  },
  {
    id: 'paris-parks-daytrip',
    title: 'City Icons + Hidden Parks + Day Trip Nature',
    destination: 'Paris, France',
    region: 'europe',
    days: 4,
    style: ['cityscapes', 'nature', 'culture', 'photography'],
    budgetTiers: {
      cheap: { perDay: '€55-75', total: '€220-300' },
      mid: { perDay: '€120-160', total: '€480-640' },
      luxury: { perDay: '€300-450', total: '€1200-1800' },
    },
    walkingScore: 90,
    bestSeason: 'Apr-Jun, Sep-Nov',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200',
    description: 'Beyond the Eiffel Tower: secret gardens, canal walks, and a forest escape just 30 minutes away.',
    highlights: ['Hidden Marais gardens', 'Canal Saint-Martin', 'Fontainebleau forest', 'Montmartre sunrise'],
    dayByDay: [
      {
        day: 1,
        title: 'Arrival + Marais Discovery',
        activities: ['Check-in, settle', 'Place des Vosges garden', 'Marais walk + vintage shops', 'Seine sunset'],
        meals: 'Falafel at L\'As du Fallafel, dinner in Marais',
        transport: 'Metro + walking',
      },
      {
        day: 2,
        title: 'Icons + Secret Spots',
        activities: ['Tuileries morning walk', 'Louvre exterior', 'Palais Royal gardens', 'Canal Saint-Martin evening'],
        meals: 'Bakery breakfast, picnic at Palais Royal, canal-side dinner',
        transport: 'Walking day (8km+)',
      },
      {
        day: 3,
        title: 'Fontainebleau Forest Escape',
        activities: ['Train to Fontainebleau', 'Forest hiking trails', 'Château visit', 'Village lunch'],
        meals: 'Pack snacks, lunch in village',
        transport: 'Train €17 return (45 min)',
      },
      {
        day: 4,
        title: 'Montmartre + Departure',
        activities: ['Sacré-Cœur sunrise', 'Artist square walk', 'Hidden vineyard', 'Final café'],
        meals: 'Croissant breakfast, brunch in Montmartre',
        transport: 'Metro + walk',
      },
    ],
    transport: {
      public: 'Carnet of 10 metro tickets €16.90. Navigo week pass €22.80. Vélib bikes €5/day.',
      shuttle: 'Roissybus airport €16. Day trip shuttles to Versailles €30-50.',
      carRental: 'Skip for Paris. Consider for Normandy/Loire add-ons (€50-70/day).',
    },
    stay: {
      hostel: ['Generator Paris (€30-50)', 'St Christopher\'s Canal (€25-45)', 'Les Piaules (€35-55)'],
      hotel: ['Hotel du Petit Moulin (€150-220)', 'Hotel National des Arts (€130-180)', 'Le Pavillon de la Reine (€250-350)'],
      luxury: ['Le Bristol (€700+)', 'Hôtel Plaza Athénée (€900+)', 'Shangri-La (€600+)'],
    },
    sustainabilityTips: [
      'Use Vélib bike-share for flat areas',
      'Carry reusable bag for boulangerie visits',
      'Drink tap water (Paris water is excellent)',
      'Buy from local markets, not supermarkets',
    ],
  },
  {
    id: 'switzerland-alpine',
    title: 'Lakeside City + Alpine Nature',
    destination: 'Lucerne & Interlaken, Switzerland',
    region: 'europe',
    days: 5,
    style: ['nature', 'cityscapes', 'photography'],
    budgetTiers: {
      cheap: { perDay: '€80-110', total: '€400-550' },
      mid: { perDay: '€150-200', total: '€750-1000' },
      luxury: { perDay: '€350-500', total: '€1750-2500' },
    },
    walkingScore: 85,
    bestSeason: 'Jun-Sep, Dec-Feb',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200',
    description: 'Medieval bridges meet Alpine peaks. Lake walks, mountain trains, and crystal-clear waters.',
    highlights: ['Chapel Bridge Lucerne', 'Pilatus mountain', 'Lake Brienz cruise', 'Grindelwald valley'],
    dayByDay: [
      {
        day: 1,
        title: 'Lucerne Arrival + Old Town',
        activities: ['Chapel Bridge walk', 'Old Town exploration', 'Lake promenade sunset', 'Fondue dinner'],
        meals: 'Light lunch, fondue dinner',
        transport: 'Train from Zurich (1hr), walking in Lucerne',
      },
      {
        day: 2,
        title: 'Mount Pilatus Day',
        activities: ['Golden round trip: boat + cogwheel + cable car', 'Summit walks', 'Panorama viewing', 'Return to Lucerne'],
        meals: 'Pack lunch or summit restaurant',
        transport: 'Pilatus golden ticket (CHF 108)',
      },
      {
        day: 3,
        title: 'Transfer to Interlaken',
        activities: ['Train through Alps', 'Interlaken arrival', 'Höheweg promenade', 'Lake Thun walk'],
        meals: 'Train snacks, Interlaken dinner',
        transport: 'Train (2hr, scenic route)',
      },
      {
        day: 4,
        title: 'Grindelwald + First',
        activities: ['Train to Grindelwald', 'First gondola', 'Cliff walk + zip line', 'Alpine meadow hike'],
        meals: 'Mountain restaurant lunch',
        transport: 'Train + gondola (Swiss Pass covers)',
      },
      {
        day: 5,
        title: 'Lake Brienz + Departure',
        activities: ['Morning lake cruise', 'Brienz village', 'Return journey'],
        meals: 'Lakeside breakfast',
        transport: 'Boat + train connections',
      },
    ],
    transport: {
      public: 'Swiss Travel Pass 4-day CHF 244 - covers all trains, boats, buses + museum discounts.',
      shuttle: 'Mountain excursion shuttles included with passes. Private tours €150-300.',
      carRental: 'Beautiful for flexibility (CHF 60-100/day) but trains are excellent.',
    },
    stay: {
      hostel: ['Backpackers Lucerne (CHF 35-55)', 'Balmers Interlaken (CHF 40-60)', 'Funny Farm (CHF 30-50)'],
      hotel: ['Hotel des Alpes Lucerne (CHF 180-280)', 'Victoria Jungfrau (CHF 400-600)', 'Hotel Interlaken (CHF 150-220)'],
      luxury: ['Bürgenstock Resort (CHF 600+)', 'Park Hotel Vitznau (CHF 500+)', 'Grand Hotel Giessbach (CHF 350+)'],
    },
    sustainabilityTips: [
      'Use Swiss Travel Pass for unlimited green transport',
      'Refill at mountain springs',
      'Stay on marked trails',
      'Support mountain hut restaurants',
    ],
  },

  // INDIA
  {
    id: 'kolkata-heritage',
    title: 'Heritage Lanes + Riverside Calm + Food Walks',
    destination: 'Kolkata, India',
    region: 'india',
    days: 2,
    style: ['culture', 'food', 'cityscapes'],
    budgetTiers: {
      cheap: { perDay: '₹1500-2500', total: '₹3000-5000' },
      mid: { perDay: '₹4000-6000', total: '₹8000-12000' },
      luxury: { perDay: '₹12000-20000', total: '₹24000-40000' },
    },
    walkingScore: 80,
    bestSeason: 'Oct-Mar',
    heroImage: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=1200',
    description: 'Colonial architecture, Hooghly River serenity, and the best street food in India. Kolkata rewards slow walkers.',
    highlights: ['Victoria Memorial', 'College Street books', 'Princep Ghat sunset', 'North Kolkata food walk'],
    dayByDay: [
      {
        day: 1,
        title: 'South Kolkata Heritage',
        activities: ['Victoria Memorial morning', 'Park Street breakfast', 'Indian Museum', 'Princep Ghat sunset', 'Park Street dinner'],
        meals: 'Flury\'s breakfast, street lunch, Mocambo dinner',
        transport: 'Metro + walking + auto-rickshaw',
      },
      {
        day: 2,
        title: 'North Kolkata + Food Trail',
        activities: ['Howrah Bridge dawn', 'Flower market', 'College Street walk', 'Kumartuli artisans', 'Street food evening'],
        meals: 'Street breakfast, Kathi roll lunch, food walk dinner',
        transport: 'Ferry + walking + metro',
      },
    ],
    transport: {
      public: 'Metro ₹10-30 per ride. App-based auto ₹50-100. Howrah ferry ₹6.',
      shuttle: 'Heritage walking tours ₹500-1500. Day trip to Sundarbans ₹2000-4000.',
      carRental: 'Driver rental ₹2000-3000/day. Traffic is heavy; metro preferred.',
    },
    stay: {
      hostel: ['Backpackers Kolkata (₹500-800)', 'Bodhi Tree (₹600-1000)', 'Calcutta Bungalow (₹800-1200)'],
      hotel: ['The Oberoi Grand (₹8000-15000)', 'ITC Sonar (₹7000-12000)', 'Lytton Hotel (₹2500-4000)'],
      luxury: ['Taj Bengal (₹15000+)', 'JW Marriott (₹12000+)', 'Oberoi Grand Suite (₹25000+)'],
    },
    sustainabilityTips: [
      'Carry cloth bag for College Street books',
      'Use earthen cups (bhar) for chai',
      'Take ferry instead of bridge taxi',
      'Support local sweet shops over chains',
    ],
  },
  {
    id: 'mumbai-sea-hills',
    title: 'Art Deco + Sea Walks + Hill Escape',
    destination: 'Mumbai, India',
    region: 'india',
    days: 3,
    style: ['cityscapes', 'culture', 'nature', 'photography'],
    budgetTiers: {
      cheap: { perDay: '₹2000-3500', total: '₹6000-10500' },
      mid: { perDay: '₹5000-8000', total: '₹15000-24000' },
      luxury: { perDay: '₹15000-25000', total: '₹45000-75000' },
    },
    walkingScore: 75,
    bestSeason: 'Nov-Feb',
    heroImage: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1200',
    description: 'Art Deco facades, Marine Drive sunsets, and a quick escape to Matheran\'s car-free hill station.',
    highlights: ['Marine Drive promenade', 'Kala Ghoda art district', 'Matheran hill escape', 'Gateway sunset'],
    dayByDay: [
      {
        day: 1,
        title: 'South Mumbai Heritage',
        activities: ['Gateway of India morning', 'Colaba Causeway walk', 'Kala Ghoda galleries', 'Marine Drive sunset'],
        meals: 'Leopold Café, street snacks, Khyber dinner',
        transport: 'Walking + local train',
      },
      {
        day: 2,
        title: 'Matheran Hill Escape',
        activities: ['Early train to Neral', 'Toy train to Matheran', 'Point walks (car-free town)', 'Sunset point', 'Return'],
        meals: 'Pack breakfast, hill lunch, train snacks',
        transport: 'Local train + toy train (₹300 total)',
      },
      {
        day: 3,
        title: 'Art Deco + Markets',
        activities: ['Art Deco walk', 'Crawford Market', 'Dhobi Ghat', 'Bandra evening', 'Bandstand sunset'],
        meals: 'Irani café, market lunch, Bandra dinner',
        transport: 'Metro + walking + auto',
      },
    ],
    transport: {
      public: 'Local train pass ₹150/day. Metro ₹20-50. Bus ₹10-20. Auto metered.',
      shuttle: 'Art Deco tours ₹1500. Elephanta Island ferry ₹200.',
      carRental: 'Driver rental ₹3000-5000/day. Useful for suburban exploration.',
    },
    stay: {
      hostel: ['Zostel Mumbai (₹600-1000)', 'Backpacker Panda (₹500-800)', 'Horn OK Please (₹700-1200)'],
      hotel: ['Taj Mahal Palace (₹15000-30000)', 'Trident Nariman (₹8000-15000)', 'Abode Bombay (₹5000-8000)'],
      luxury: ['Taj Lands End (₹20000+)', 'Four Seasons (₹25000+)', 'St Regis (₹30000+)'],
    },
    sustainabilityTips: [
      'Use local trains over cabs',
      'Visit Matheran (100% car-free)',
      'Carry water bottle - Mumbai water is safe when filtered',
      'Buy from street vendors, not mall chains',
    ],
  },
  {
    id: 'delhi-agra-gardens',
    title: 'History Core + Garden Trails + Sunrise Spots',
    destination: 'Delhi & Agra, India',
    region: 'india',
    days: 4,
    style: ['culture', 'cityscapes', 'photography', 'nature'],
    budgetTiers: {
      cheap: { perDay: '₹2500-4000', total: '₹10000-16000' },
      mid: { perDay: '₹6000-10000', total: '₹24000-40000' },
      luxury: { perDay: '₹18000-30000', total: '₹72000-120000' },
    },
    walkingScore: 70,
    bestSeason: 'Oct-Mar',
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200',
    description: 'Mughal gardens, Lodhi art walk, and the Taj at sunrise. India\'s golden triangle, done mindfully.',
    highlights: ['Taj Mahal sunrise', 'Lodhi Gardens', 'Humayun\'s Tomb', 'Old Delhi food walk'],
    dayByDay: [
      {
        day: 1,
        title: 'New Delhi Gardens',
        activities: ['Humayun\'s Tomb morning', 'Lodhi Gardens art walk', 'Khan Market lunch', 'India Gate evening'],
        meals: 'Khan Market brunch, street snacks, Connaught dinner',
        transport: 'Metro + walking',
      },
      {
        day: 2,
        title: 'Old Delhi Heritage',
        activities: ['Jama Masjid area', 'Chandni Chowk walk', 'Red Fort exterior', 'Nizamuddin evening'],
        meals: 'Paranthe wali gali, Karim\'s dinner',
        transport: 'Metro + cycle rickshaw',
      },
      {
        day: 3,
        title: 'Delhi to Agra + Sunset',
        activities: ['Gatimaan Express to Agra', 'Mehtab Bagh sunset view', 'Agra Fort', 'Local walk'],
        meals: 'Train breakfast, Agra lunch, rooftop dinner',
        transport: 'Train (2hr) + auto in Agra',
      },
      {
        day: 4,
        title: 'Taj Sunrise + Return',
        activities: ['Taj Mahal at sunrise', 'Garden walk', 'Breakfast with view', 'Return train'],
        meals: 'Early tea, late breakfast, train snacks',
        transport: 'Auto + return train',
      },
    ],
    transport: {
      public: 'Delhi Metro pass ₹200/day. Gatimaan Express ₹755 one-way. Agra auto ₹100-200.',
      shuttle: 'Day trip packages ₹3000-5000. Cycle tours ₹1500.',
      carRental: 'Delhi-Agra driver ₹5000-8000 round trip. Comfortable but slower.',
    },
    stay: {
      hostel: ['Zostel Delhi (₹600-1000)', 'Moustache Delhi (₹500-900)', 'Joey\'s Hostel Agra (₹400-700)'],
      hotel: ['The Imperial Delhi (₹15000-25000)', 'Oberoi Amarvilas Agra (₹40000+)', 'ITC Maurya (₹12000-20000)'],
      luxury: ['Taj Palace Delhi (₹20000+)', 'Leela Palace (₹25000+)', 'Oberoi Amarvilas (₹50000+)'],
    },
    sustainabilityTips: [
      'Take train over highway (less pollution)',
      'Visit Taj at sunrise (fewer crowds)',
      'Use metro over cabs in Delhi',
      'Support Lodhi Art District local artists',
    ],
  },

  // CHINA / ASIA
  {
    id: 'shanghai-water-town',
    title: 'Skyline + Old Town + Water Town Nature',
    destination: 'Shanghai, China',
    region: 'china-asia',
    days: 4,
    style: ['cityscapes', 'culture', 'nature', 'photography'],
    budgetTiers: {
      cheap: { perDay: '¥300-450', total: '¥1200-1800' },
      mid: { perDay: '¥600-900', total: '¥2400-3600' },
      luxury: { perDay: '¥1500-2500', total: '¥6000-10000' },
    },
    walkingScore: 85,
    bestSeason: 'Mar-May, Sep-Nov',
    heroImage: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=1200',
    description: 'Futuristic skyline meets 1930s French Concession and ancient water towns. Shanghai surprises at every turn.',
    highlights: ['Bund night walk', 'French Concession lanes', 'Zhujiajiao water town', 'Yu Garden'],
    dayByDay: [
      {
        day: 1,
        title: 'Bund + Old Shanghai',
        activities: ['Yu Garden morning', 'Old City walk', 'Nanjing Road', 'Bund sunset + night views'],
        meals: 'Dumpling breakfast, local lunch, Bund dinner',
        transport: 'Metro + walking',
      },
      {
        day: 2,
        title: 'French Concession',
        activities: ['Fuxing Park tai chi', 'Tree-lined lanes walk', 'Art galleries', 'Tianzifang evening'],
        meals: 'Café brunch, lane food, Xintiandi dinner',
        transport: 'Walking day (8km+)',
      },
      {
        day: 3,
        title: 'Zhujiajiao Water Town',
        activities: ['Bus to Zhujiajiao', 'Canal boat ride', 'Ancient bridges', 'Local crafts', 'Sunset return'],
        meals: 'Pack snacks, water town lunch',
        transport: 'Bus ¥12 (1.5hr) or tourist bus ¥100',
      },
      {
        day: 4,
        title: 'Modern + Departure',
        activities: ['Pudong skyline walk', 'Lujiazui morning', 'Shopping', 'Airport'],
        meals: 'Hotel breakfast, quick lunch',
        transport: 'Metro + Maglev (¥50)',
      },
    ],
    transport: {
      public: 'Metro ¥3-10 per ride. Day pass ¥18. Very efficient system.',
      shuttle: 'Water town tours ¥200-400. City bus tours ¥100.',
      carRental: 'Not recommended. Traffic + parking difficult. Metro is superior.',
    },
    stay: {
      hostel: ['Le Tour Traveler\'s Rest (¥80-150)', 'Blue Mountain (¥100-180)', 'Shanghai City Central (¥120-200)'],
      hotel: ['Fairmont Peace Hotel (¥1500-2500)', 'Les Suites Orient (¥800-1200)', 'Andaz Xintiandi (¥1200-2000)'],
      luxury: ['Peninsula Shanghai (¥3000+)', 'Waldorf Astoria (¥2500+)', 'The PuLi (¥2000+)'],
    },
    sustainabilityTips: [
      'Use metro exclusively - Shanghai\'s is world-class',
      'Bring reusable chopsticks',
      'Visit water towns on weekdays',
      'Support lane cafe culture',
    ],
  },
  {
    id: 'beijing-great-wall',
    title: 'City Heritage + Temple Parks + Great Wall Nature Day',
    destination: 'Beijing, China',
    region: 'china-asia',
    days: 4,
    style: ['culture', 'cityscapes', 'nature', 'photography'],
    budgetTiers: {
      cheap: { perDay: '¥350-500', total: '¥1400-2000' },
      mid: { perDay: '¥700-1000', total: '¥2800-4000' },
      luxury: { perDay: '¥1800-3000', total: '¥7200-12000' },
    },
    walkingScore: 80,
    bestSeason: 'Apr-May, Sep-Oct',
    heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200',
    description: 'Ancient hutongs, imperial gardens, and hiking the Great Wall away from crowds. Beijing done right.',
    highlights: ['Forbidden City', 'Temple of Heaven', 'Jinshanling Great Wall', 'Hutong evening'],
    dayByDay: [
      {
        day: 1,
        title: 'Imperial Beijing',
        activities: ['Forbidden City morning (4hr)', 'Jingshan Park view', 'Beihai Park walk', 'Hutong dinner'],
        meals: 'Quick breakfast, palace snacks, Hutong dinner',
        transport: 'Metro + walking',
      },
      {
        day: 2,
        title: 'Temple Parks',
        activities: ['Temple of Heaven early', 'Local tai chi', 'Qianmen walk', 'Dashilar evening'],
        meals: 'Park breakfast, duck lunch, street dinner',
        transport: 'Metro + walking',
      },
      {
        day: 3,
        title: 'Great Wall Adventure',
        activities: ['Early bus to Jinshanling', 'Hike uncrowded sections', 'Watchtower lunch', 'Sunset return'],
        meals: 'Pack lunch + snacks',
        transport: 'Tourist bus ¥150 return or private ¥800',
      },
      {
        day: 4,
        title: 'Summer Palace + Departure',
        activities: ['Summer Palace morning', 'Lake walk', 'Garden exploration', 'Airport'],
        meals: 'Palace breakfast area, light lunch',
        transport: 'Metro + airport express',
      },
    ],
    transport: {
      public: 'Metro ¥3-10. Day pass ¥20. Airport express ¥25. Bus ¥2.',
      shuttle: 'Great Wall shuttles ¥80-150. City tour buses ¥50.',
      carRental: 'Consider for Great Wall flexibility (¥400-600/day with driver).',
    },
    stay: {
      hostel: ['Leo Hostel (¥80-140)', 'Peking Yard (¥100-180)', '365 Inn (¥90-160)'],
      hotel: ['Opposite House (¥1500-2500)', 'Rosewood Beijing (¥2000-3500)', 'Hotel Cote Cour (¥800-1200)'],
      luxury: ['Aman Summer Palace (¥5000+)', 'Temple Hotel (¥3000+)', 'Waldorf Astoria (¥2500+)'],
    },
    sustainabilityTips: [
      'Visit Jinshanling not Badaling (fewer crowds, more authentic)',
      'Stay in restored hutong guesthouses',
      'Use reusable containers for street food',
      'Take metro over taxis',
    ],
  },
  {
    id: 'kyoto-slow-travel',
    title: 'Old Streets + Bamboo/Nature + Slow Cafés',
    destination: 'Kyoto, Japan',
    region: 'china-asia',
    days: 4,
    style: ['culture', 'nature', 'cityscapes', 'food'],
    budgetTiers: {
      cheap: { perDay: '¥8000-12000', total: '¥32000-48000' },
      mid: { perDay: '¥18000-25000', total: '¥72000-100000' },
      luxury: { perDay: '¥50000-80000', total: '¥200000-320000' },
    },
    walkingScore: 90,
    bestSeason: 'Mar-May, Oct-Nov',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200',
    description: 'Temples, bamboo forests, and the art of doing nothing. Kyoto teaches you to slow down.',
    highlights: ['Arashiyama bamboo', 'Gion evening walk', 'Fushimi Inari dawn', 'Philosopher\'s Path'],
    dayByDay: [
      {
        day: 1,
        title: 'Arrival + Gion Evening',
        activities: ['Arrive, settle', 'Nishiki Market walk', 'Gion evening walk', 'Traditional dinner'],
        meals: 'Market lunch, kaiseki dinner',
        transport: 'Train from Osaka/Tokyo, walking',
      },
      {
        day: 2,
        title: 'Arashiyama Nature',
        activities: ['Bamboo grove early', 'Tenryu-ji garden', 'Monkey park hike', 'River walk', 'Togetsu-kyo bridge'],
        meals: 'Tofu breakfast, riverside lunch, local dinner',
        transport: 'Train + walking (full day)',
      },
      {
        day: 3,
        title: 'East Kyoto Temples',
        activities: ['Fushimi Inari sunrise', 'Philosopher\'s Path', 'Ginkaku-ji', 'Higashiyama cafés'],
        meals: 'Café breakfast, path lunch, Pontocho dinner',
        transport: 'Bus + walking',
      },
      {
        day: 4,
        title: 'Tea + Departure',
        activities: ['Kinkaku-ji morning', 'Tea ceremony experience', 'Final shopping', 'Departure'],
        meals: 'Ryokan breakfast, matcha lunch',
        transport: 'Bus + train to next destination',
      },
    ],
    transport: {
      public: 'Bus day pass ¥700. JR Pass for connections. Rent bikes ¥1000/day.',
      shuttle: 'Temple tours ¥5000-10000. Nara day trip ¥3000.',
      carRental: 'Not needed in Kyoto. Consider for rural Kyoto extensions (¥6000/day).',
    },
    stay: {
      hostel: ['Piece Hostel (¥3500-5000)', 'Khaosan Kyoto (¥3000-4500)', 'The Lower East Nine (¥4000-6000)'],
      hotel: ['Hotel Kanra (¥25000-40000)', 'The Screen (¥20000-35000)', 'Mitsui Kyoto (¥35000-60000)'],
      luxury: ['Aman Kyoto (¥150000+)', 'Four Seasons (¥80000+)', 'Tawaraya Ryokan (¥100000+)'],
    },
    sustainabilityTips: [
      'Visit temples at dawn to avoid crowds',
      'Rent bicycle instead of bus',
      'Bring furoshiki (wrapping cloth) instead of plastic bags',
      'Support small family restaurants over chains',
    ],
  },
];

export const regions = [
  { id: 'europe', label: 'Europe' },
  { id: 'india', label: 'India' },
  { id: 'china-asia', label: 'China / Asia' },
];

export const styles = [
  { id: 'cityscapes', label: 'Cityscapes' },
  { id: 'nature', label: 'Nature' },
  { id: 'culture', label: 'Culture' },
  { id: 'food', label: 'Food' },
  { id: 'photography', label: 'Photography' },
  { id: 'mixed', label: 'Mixed' },
  { id: 'student-friendly', label: 'Student-friendly' },
];

export const durations = [
  { id: '1-2', label: '1-2 days', min: 1, max: 2 },
  { id: '3-4', label: '3-4 days', min: 3, max: 4 },
  { id: '5-7', label: '5-7 days', min: 5, max: 7 },
  { id: '8+', label: '8+ days', min: 8, max: 30 },
];

export const budgetTiers = [
  { id: 'cheap', label: 'Budget' },
  { id: 'mid', label: 'Mid-range' },
  { id: 'luxury', label: 'Luxury' },
];

export const transportModes = [
  { id: 'public', label: 'Public Transit' },
  { id: 'shuttle', label: 'Shuttle/Tours' },
  { id: 'carRental', label: 'Car Rental' },
];

export const stayTypes = [
  { id: 'hostel', label: 'Hostel' },
  { id: 'hotel', label: 'Hotel' },
  { id: 'luxury', label: 'Luxury' },
];
