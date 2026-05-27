const rawToursData = [
  {
    number: 1,
    id: 'city-tour-ujjain-darshan',
    category: 'Sightseeing',
    title: 'City Tour (Ujjain Darshan)',
    route: 'Local Sightseeing',
    price: '₹2,500/-',
    img: '/Images/mahakal.webp',
    waText: 'Book Ujjain Darshan',
    description: 'Explore the highly ancient and sacred city of Ujjain. This package is specifically designed for pilgrims wanting a comprehensive day yatra covering all key holy temples of the city with safe, hassle-free transportation. Read our highly detailed [Ujjain Darshan Blog Guide](/blogs/ujjain-darshan-guide) for the best pilgrim secrets.',
    itinerary: [
      'Mahakaleshwar Jyotirlinga (Bhasma Aarti & General Darshan)',
      'Harsiddhi Mata Temple (one of the 51 Shaktipeeths)',
      'Kaal Bhairav Temple (famous sacred temple of Ujjain)',
      'Ram Ghat on the banks of the sacred Shipra River',
      'Mangalnath Temple (origin point of Mars / Mangal Grah)',
      'Bada Ganesh & Sandipani Ashram (Gurukul of Lord Krishna)'
    ],
    inclusions: ['Private Chauffeur-Driven AC Car', '24/7 Support Desk Assistance', 'Fuel, Toll Charges, & Parking Fees Included', 'Experienced Local Navigator Pilot']
  },
  {
    number: 2,
    id: 'omkareshwar-tour',
    category: 'Pilgrimage',
    title: 'Omkareshwar Tour',
    route: 'Ujjain → Omkareshwar',
    price: '₹3,500/-',
    img: '/Images/Omkareshwar.webp',
    waText: 'Book Omkareshwar Tour',
    description: 'Complete day yatra to Omkareshwar Jyotirlinga, situated on the sacred Mandhata island in the Narmada River. The island shape is naturally in the holy form of the "Om" symbol. Read our dedicated [Omkareshwar Yatra Guide](/blogs/omkareshwar-darshan-guide) to plan your riverside timings and boat trips.',
    itinerary: [
      'Early morning pickup from Ujjain for Omkareshwar',
      'Narmada River Boat Ride & Sacred Snan (bath)',
      'Omkareshwar Jyotirlinga Darshan & Poojan',
      'Visit the nearby Mamleshwar Jyotirlinga Temple',
      'Scenic highway drive back to Ujjain'
    ],
    inclusions: [' AC Sedan/SUV Highway Car', 'Chauffeur with deep Narmada-region wisdom', 'All Highway Toll & State taxes', 'Bottled mineral water']
  },
  {
    number: 3,
    id: 'baglamukhi-temple',
    category: 'Sightseeing',
    title: 'Maa Bagla Mukhi Temple',
    route: 'Local Sightseeing',
    price: '₹2,500/-',
    img: '/Images/maa-bagla-mukhi.webp',
    waText: 'Book Maa Bagla Mukhi Temple',
    description: 'Travel to the powerful Maa Baglamukhi Temple in Nalkheda. Located on the banks of the Lakhunder river, this highly energetic temple is known for ancient tantric rituals and victorious blessings. To understand the powerful tantric fire rituals and yellow dress customs, read our comprehensive [Maa Baglamukhi Nalkheda Blog Guide](/blogs/baglamukhi-nalkheda-guide).',
    itinerary: [
      'Depart from Ujjain to Nalkheda via comfortable AC sedan/SUV',
      'Maa Baglamukhi Temple Darshan & Rituals',
      'Visit the ancient self-manifested Hanuman Temple nearby',
      'Short stop for local authentic Malwi lunch',
      'Return journey to Ujjain with drop at your hotel/station'
    ],
    inclusions: ['AC Hatchback/Sedan/SUV ride', 'Expert Highway Chauffeur', 'All Interstate/Toll and Parking fees', 'Flexible Departure Timings']
  },
  {
    number: 4,
    id: 'dewas-darshan',
    category: 'Pilgrimage',
    title: 'Dewas Darshan',
    route: 'Ujjain → Dewas',
    price: '₹2,000/-',
    img: '/Images/ranjeet-hanuman.webp',
    waText: 'Book Dewas Darshan',
    description: 'Visit the divine Dewas Tekri, housing the highly powerful Chamunda Mata and Tulja Bhavani Mata temples. A perfect day yatra for families looking to take blessings on the sacred hill.',
    itinerary: [
      'Travel from Ujjain to Dewas via Indore-Ujjain Highway',
      'Dewas Tekri Climb (Ropeway/Steps) for Maa Chamunda Darshan',
      'Visit Ranjeet Hanuman Temple (highly popular local shrine)',
      'Comfortable highway return to Ujjain'
    ],
    inclusions: ['Clean AC Vehicle', 'Professional Driver Navigator', 'Fuel & Parking Fees', 'Doorstep Pickup & Drop']
  },
  {
    number: 5,
    id: 'indore-city-tour',
    category: 'Sightseeing',
    title: 'Indore City Tour',
    route: 'Ujjain → Indore Local Sightseeing → Ujjain',
    price: '₹3,000/-',
    img: '/Images/indore.png',
    waText: 'Book Indore City Tour',
    description: 'Discover Indore, the cleanest city of India and the commercial capital of Madhya Pradesh. Visit majestic Maratha heritage sites like Rajwada, popular temples, and indulge in world-famous street food. Read our [Indore City Food & Transit Guide](/blogs/indore-tour-guide) to find the best street delicacies.',
    itinerary: [
      'Morning pickup from Ujjain for Indore drive',
      'Visit the magnificent Rajwada Palace (heritage landmark)',
      'Explore the stunning Lal Bagh Palace & its grand European-style gates',
      'Darshan at the highly sacred Khajrana Ganesh Temple',
      'Treat your tastebuds at Chappan Dukan (56 Shops culinary street)',
      'Safe and smooth return highway drive back to Ujjain'
    ],
    inclusions: ['AC Hatchback/Sedan/SUV ride', 'Expert Highway Chauffeur', 'All Highway Toll & Parking fees', 'Flexible Departure Timings']
  },
  {
    number: 6,
    id: 'maheshwar-tour',
    category: 'Pilgrimage',
    title: 'Maheshwar Tour',
    route: 'Ujjain → Maheshwar',
    price: '₹4,500/-',
    img: '/Images/Maheshwer.webp',
    waText: 'Book Maheshwar Tour',
    description: 'Visit the peaceful temple town of Maheshwar, located on the banks of the sacred Narmada River. Explore the glorious Ahilya Fort and take in the spiritual ghat environment. Dive into the history and handloom stories in our [Maheshwar & Mandu Royal Heritage Guide](/blogs/maheshwar-mandu-heritage-guide).',
    itinerary: [
      'Depart Ujjain to Maheshwar via Indore bypass',
      'Explore Ahilya Fort & Palace Heritage Complex',
      'Visit Maheshwar Ghats & participate in Narmada Aarti',
      'Shop for authentic world-famous Maheshwari handloom sarees',
      'Safe highway return to Ujjain'
    ],
    inclusions: [' AC Sedan or SUV', 'All toll fees & parking permits', 'Flexible customized timings', 'Driver with deep local knowledge']
  },
  {
    number: 7,
    id: 'mandu-tour',
    category: 'Heritage',
    title: 'Mandu Tour',
    route: 'Ujjain → Mandu',
    price: '₹4,500/-',
    img: '/Images/jahazMahal.webp',
    waText: 'Book Mandu Tour',
    description: 'Step back in history with a trip to the ancient ruined fortress city of Mandu. Famous for its Afghan architectural heritage, romantic palaces, and historic stone gates. Learn more about the romantic monuments in our [Maheshwar & Mandu Royal Heritage Guide](/blogs/maheshwar-mandu-heritage-guide).',
    itinerary: [
      'Travel from Ujjain to Mandu mountain plateau',
      'Explore Jahaz Mahal (Ship Palace) & Hindola Mahal',
      'Visit Rani Roopmati Pavilion & Baz Bahadur Palace',
      'Walk through the historical Jama Masjid & Hoshang Shah Tomb',
      'Comfortable evening return drive to Ujjain'
    ],
    inclusions: ['AC Sedan/SUV ride', 'Fuel and highway toll permits', 'Parking charges included', 'Customizable tour stops']
  },
  {
    number: 8,
    id: 'bhopal-tour',
    category: 'Outstation',
    title: 'Bhopal Tour',
    route: 'Ujjain → Bhopal',
    price: '₹5,200/-',
    img: '/Images/Bhopal-aesthetics.webp',
    waText: 'Book Bhopal Tour',
    description: 'Explore Bhopal, the beautiful City of Lakes. This package showcases the rich historical mosques, magnificent scenic lakes, and standard heritage sites of the capital city.',
    itinerary: [
      'Ujjain to Bhopal Highway Drive',
      'Visit Upper Lake & Lower Lake (boating optional)',
      'Explore Taj-ul-Masajid (one of the largest mosques in Asia)',
      'Visit Indira Gandhi Rashtriya Manav Sangrahalaya',
      'Drop back at Ujjain station or hotel'
    ],
    inclusions: [' AC Vehicle of your choice', 'All Tolls, Parking, State Permits', 'Polite, English/Hindi speaking driver', 'Flexible Sightseeing stops']
  },
  {
    number: 9,
    id: 'pachmarhi-tour',
    category: 'Hill Station',
    title: 'Pachmarhi Tour',
    route: 'Ujjain → Pachmarhi',
    price: '₹9,000/-',
    img: '/Images/beeFalls.webp',
    waText: 'Book Pachmarhi Tour',
    description: 'Escape to Pachmarhi, the "Queen of Satpura" and the only hill station in Madhya Pradesh. A beautiful retreat filled with scenic waterfalls, ancient caves, and sunset points.',
    itinerary: [
      'Travel from Ujjain to Pachmarhi foothills',
      'Visit Bee Falls & Duchess Falls (scenic cascades)',
      'Explore Jata Shankar Caves & Pandav Caves',
      'Enjoy sunset at Dhoopgarh (highest point in MP)',
      'Safe return drop at Ujjain'
    ],
    inclusions: ['Clean AC Chauffeur Car', 'Satpura hilly permit passes', 'All Toll and Parking fees', '24/7 customer helpline support']
  },
  {
    number: 10,
    id: 'sanchi-tour',
    category: 'Sightseeing',
    title: 'Sanchi Tour',
    route: 'Ujjain → Sanchi',
    price: '₹6,000/-',
    img: '/Images/SanchiStupa.webp',
    waText: 'Book Sanchi Tour',
    description: 'A dedicated historical yatra to Sanchi Stupa, a UNESCO World Heritage Site famous for its majestic Buddhist Stupas dating back to the Emperor Ashoka era.',
    itinerary: [
      'Highway travel to Sanchi via Bhopal bypass',
      'Explore Sanchi Stupa 1, 2 & 3 with local history guides',
      'Visit Sanchi Archaeological Museum',
      'Visit the nearby Udayagiri Caves (rock-cut temples)',
      'Return highway drive to Ujjain'
    ],
    inclusions: [' AC Highway Sedan/SUV', 'Fuel, Toll Permits & Parking', 'Doorstep pickup at Ujjain', 'Punctual travel schedule']
  },
  {
    number: 11,
    id: 'boreshwar-mahadev',
    category: 'Pilgrimage',
    title: 'Boreshwar Mahadev',
    route: 'Ujjain → Boreshwar',
    price: '₹2,000/-',
    img: '/Images/siddhanathTemple.webp',
    waText: 'Book Boreshwar Mahadev',
    description: 'Explore the divine Boreshwar Mahadev Temple. Known for its historical stone carvings and spiritual tranquility, it is a hidden gem for Shaivite devotees.',
    itinerary: [
      'Comfortable AC drive to Boreshwar temple bounds',
      'Boreshwar Mahadev Abhishek & Darshan',
      'Visit the nearby ancient stepwells and shrines',
      'Return drive back to Ujjain'
    ],
    inclusions: ['Clean AC hatchback/sedan', 'Fuel and parking fees', 'Polite native driver pilot', 'Flexible schedule options']
  },
  {
    number: 12,
    id: '4-dham-package',
    category: 'Special',
    title: '4-Dham Package',
    route: 'Omkareshwar + Maheshwar + Mamleshwar + Shani Temple',
    price: '₹5,500/-',
    img: '/Images/MamleshwarTemple.webp',
    waText: 'Book 4 Dham Package',
    description: 'Our signature consolidated holy pilgrimage yatra mapping four highly energetic temple destinations in a single organized round-trip journey.',
    itinerary: [
      'Early pickup from Ujjain for Shani Singnapur Temple',
      'Omkareshwar Jyotirlinga Darshan & holy river snan',
      'Visit Mamleshwar Jyotirlinga & Maheshwar Ahilya Fort',
      'Participate in twilight Narmada Aarti',
      'Punctual drop back at Ujjain station/hotel'
    ],
    inclusions: [' AC Sedan/SUV Highway Tour Car', 'Consolidated toll permits & parking', 'Mineral water bottle supply', '24/7 dedicated support desk coordination']
  }
];

// Dynamically sort the tours by the 'number' property before exporting
export const toursData = [...rawToursData].sort((a, b) => a.number - b.number);
