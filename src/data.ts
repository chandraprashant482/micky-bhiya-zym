import { Branch, ServiceItem, FacilityFeature, VideoItem, FitnessClass, Trainer, ScheduleClass, Testimonial } from './types';

export const BRANCHES: Branch[] = [
  {
    id: "parsa-bazar",
    name: "LAGOON FITNESS GYM",
    address:
      "Parsa Bazar - Sampatchak Main Rd, near Annie Besant International School, Parsa Bazar, Punpun, Parsa, Bihar 804453",
    phone: "+91 6206145456",
    email: " sushantsing3858@gmail.com",
    mapUrl: "",
    embedMapUrl: "",
    tagline: "Premium Fitness Destination of Patna",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'matrix-equipment',
    title: 'World Class Matrix Equipments',
    subtitle: 'Bio-mechanically Engineered',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop',
    description: 'Precision-engineered resistance machines, heavy-duty Olympic barbells, and custom dumbbell stations.'
  },
  {
    id: 'steam-bath',
    title: 'Eucalyptus Steam Bath',
    subtitle: 'Post-Workout Detox',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop',
    description: 'Therapeutic aromatic steam rooms designed to soothe muscles, boost circulation, and speed recovery.'
  },
  {
    id: 'hot-cold-shower',
    title: 'Hot & Cold Spa Showers',
    subtitle: 'Hygiene & Comfort',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    description: 'Ultra-hygienic private shower suites stocked with premium toiletries and hot/cold contrast controls.'
  },
  {
    id: 'healthy-cafe',
    title: 'Protein Cafe & Smoothie Bar',
    subtitle: 'Macro Nutrition',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=800&auto=format&fit=crop',
    description: 'Freshly blended whey protein shakes, electrolyte coolers, pre-workout shots, and keto snacks.'
  },
  {
    id: 'flexible-membership',
    title: 'Membership Freezing & Extensions',
    subtitle: '100% Hassle Free',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    description: 'Travel or busy schedule? Freeze your active membership with zero penalty fees anytime.'
  },
  {
    id: 'amenities',
    title: '24x7 RFID Keycard Access',
    subtitle: 'Always Open',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    description: 'Unrestricted round-the-clock entry with biometric RFID security and 24/7 CCTV surveillance.'
  }
];

export const FACILITY_FEATURES: FacilityFeature[] = [
  { id: '1', title: 'Highly Qualified Trainers', iconName: 'Award', isDesignCard: true },
  { id: '2', title: '24X7 Trainers Available', iconName: 'Clock', isDesignCard: false },
  { id: '3', title: 'Maintained Hygiene', iconName: 'Sparkles', isDesignCard: true },
  { id: '4', title: 'Personal Lockers', iconName: 'Lock', isDesignCard: false },
  { id: '5', title: 'Nutrition Counselling', iconName: 'Apple', isDesignCard: true },
  { id: '6', title: 'Dedicated Cardio Area', iconName: 'Activity', isDesignCard: false },
  { id: '7', title: 'Heavy Free Weight Zone', iconName: 'Dumbbell', isDesignCard: true },
  { id: '8', title: 'Group Exercise Studio', iconName: 'Users', isDesignCard: false },
  { id: '9', title: '24X7 Unrestricted Access', iconName: 'Key', isDesignCard: false },
  { id: '10', title: 'RFID Security Access', iconName: 'ShieldCheck', isDesignCard: true },
  { id: '11', title: 'World Class Equipments', iconName: 'Zap', isDesignCard: false },
  { id: '12', title: 'Personal Training (PT)', iconName: 'UserCheck', isDesignCard: true },
  { id: '13', title: 'Routine Health Checkups', iconName: 'HeartPulse', isDesignCard: false },
  { id: '14', title: 'Functional Turf Zone', iconName: 'Flame', isDesignCard: true },
  { id: '15', title: 'Outdoor Bootcamps', iconName: 'Sun', isDesignCard: false },
  { id: '16', title: 'Membership Freezing', iconName: 'Snowflake', isDesignCard: true }
];

export const WORKOUT_VIDEOS: VideoItem[] = [
  {
    id: 'v1',
    title: 'Lagoon Fitness Gym Tour',
    category: 'walkthrough',
    youtubeId: '4g9fOfKg7Bo',
    branch: 'janakpuri',
    duration: '02:45'
  },
  {
    id: 'v2',
    title: 'High Energy Zumba & Bhangra Group Class',
    category: 'zumba',
    youtubeId: '4g9fOfKg7Bo',
    branch: 'janakpuri',
    duration: '03:15'
  },
  {
    id: 'v3',
    title: 'Heavy Strength & Functional Turf Walkthrough',
    category: 'strength',
    youtubeId: '4g9fOfKg7Bo',
    branch: 'janakpuri',
    duration: '01:50'
  },
  {
    id: 'v4',
    title: 'Lagoon Fitness Gym Night Vibe',
    category: 'walkthrough',
    youtubeId: '4g9fOfKg7Bo',
    branch: 'malviya-nagar',
    duration: '02:10'
  },
  {
    id: 'v5',
    title: 'Full Body HIIT Workout Routine by PT Lead',
    category: 'workout',
    youtubeId: '4g9fOfKg7Bo',
    branch: 'all',
    duration: '04:30'
  },
  {
    id: 'v6',
    title: 'MMA & Combat Conditioning Session',
    category: 'workout',
    youtubeId: '4g9fOfKg7Bo',
    branch: 'all',
    duration: '03:40'
  }
];

export const FITNESS_CLASSES: FitnessClass[] = [
  {
    id: 'functional',
    name: 'Functional Training',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    intensity: 'High',
    duration: '50 Mins',
    caloriesBurned: '550 - 750 kcal',
    description: 'Dynamic multi-planar conditioning with kettlebells, battle ropes, plyo boxes, and slam balls.'
  },
  {
    id: 'pilates',
    name: 'Core Pilates',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    intensity: 'Medium',
    duration: '45 Mins',
    caloriesBurned: '300 - 450 kcal',
    description: 'Low-impact core strengthening, posture alignment, flexibility, and controlled breathing drills.'
  },
  {
    id: 'yoga',
    name: 'Power Yoga',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',
    intensity: 'Medium',
    duration: '60 Mins',
    caloriesBurned: '350 - 500 kcal',
    description: 'Vinyasa flow combining bodyweight isometric holds, deep flexibility stretches, and stress relief.'
  },
  {
    id: 'bhangra',
    name: 'Bhangra Fitness',
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=800&auto=format&fit=crop',
    intensity: 'High',
    duration: '50 Mins',
    caloriesBurned: '600 - 800 kcal',
    description: 'Traditional Punjabi folk moves transformed into an explosive high-tempo cardiovascular dance party.'
  },
  {
    id: 'bollytwist',
    name: 'Bollytwist Cardio',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop',
    intensity: 'High',
    duration: '50 Mins',
    caloriesBurned: '500 - 700 kcal',
    description: 'High-energy Bollywood dance cardio designed to burn fat while enjoying electric dance beats.'
  },
  {
    id: 'zumba',
    name: 'Zumba Fitness',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop',
    intensity: 'High',
    duration: '50 Mins',
    caloriesBurned: '500 - 650 kcal',
    description: 'Latin-inspired cardio workout blending salsa, merengue, reggaeton, and hip-hop beats.'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 't1',
    name: 'Sushant Singh',
    role: 'Head Strength Coach & Master PT',
    experience: '11+ Years',
    specialties: ['Hypertrophy', 'Powerlifting', 'Fat Loss Protocol'],
    image: "/mickyphoto.png",
    bio: 'Certified ACSM Strength Specialist with over 500 transformation success stories in Delhi.',
    rating: 4.9
  },
  {
    id: 't2',
    name: 'Prashant Yadav,
    role: 'Group Fitness & Zumba Lead',
    experience: '6+ Years',
    specialties: ['Zumba Official', 'Bhangra Cardio', 'Pilates Core'],
    image: "/mickyphoto.png",
    bio: 'Licensed Zumba Fitness instructor bringing electrifying rhythm and fat-melting beats to every class.',
    rating: 5.0
  },
  {
    id: 't3',
    name: 'Sushant Singh',
    role: 'Functional & Combat Conditioning',
    experience: '8+ Years',
    specialties: ['Kettlebell Level 2', 'Calisthenics', 'MMA Conditioning'],
    image: "/mickyphoto.png",
    bio: 'Former national martial arts practitioner specializing in explosive athletic endurance & agility.',
    rating: 4.8
  },
  {
    id: 't4',
    name: 'Prashant Kumar',
    role: 'Power Yoga & Mindful Wellness',
    experience: '7+ Years',
    specialties: ['Ashtanga Vinyasa', 'Flexibility Rehab', 'Posture Correction'],
   image: "/mickyphoto.png",
    bio: 'RYT-500 Certified Yoga Alliance Master focused on mobility, core stability, and holistic mindfulness.',
    rating: 4.9
  }
];

export const SCHEDULE: ScheduleClass[] = [
  { id: 's1', time: '06:30 AM - 07:30 AM', className: 'Power Yoga', trainer: 'Ananya Verma', room: 'Mind Studio 1', day: 'Monday', branch: 'janakpuri' },
  { id: 's2', time: '07:30 AM - 08:30 AM', className: 'Functional Training', trainer: 'Vikram Singh', room: 'Turf Zone', day: 'Monday', branch: 'janakpuri' },
  { id: 's3', time: '05:30 PM - 06:30 PM', className: 'Zumba Fitness', trainer: 'Simran Kaur', room: 'Dance Studio', day: 'Monday', branch: 'janakpuri' },
  { id: 's4', time: '06:30 PM - 07:30 PM', className: 'Bollytwist Cardio', trainer: 'Simran Kaur', room: 'Dance Studio', day: 'Monday', branch: 'janakpuri' },
  
  { id: 's5', time: '06:30 AM - 07:30 AM', className: 'Core Pilates', trainer: 'Ananya Verma', room: 'Mind Studio 1', day: 'Tuesday', branch: 'janakpuri' },
  { id: 's6', time: '07:30 AM - 08:30 AM', className: 'Calisthenics & Booty Boot', trainer: 'Vikram Singh', room: 'Turf Zone', day: 'Tuesday', branch: 'janakpuri' },
  { id: 's7', time: '06:00 PM - 07:00 PM', className: 'Bhangra Blast', trainer: 'Simran Kaur', room: 'Dance Studio', day: 'Tuesday', branch: 'janakpuri' },

  { id: 's8', time: '06:30 AM - 07:30 AM', className: 'Power Yoga', trainer: 'Ananya Verma', room: 'Mind Studio 1', day: 'Wednesday', branch: 'janakpuri' },
  { id: 's9', time: '07:30 AM - 08:30 AM', className: 'HIIT Circuit Training', trainer: 'Sushant Singh', room: 'Main Gym Floor', day: 'Wednesday', branch: 'janakpuri' },
  { id: 's10', time: '06:00 PM - 07:00 PM', className: 'Zumba Party', trainer: 'Simran Kaur', room: 'Dance Studio', day: 'Wednesday', branch: 'janakpuri' },

  { id: 's11', time: '07:00 AM - 08:00 AM', className: 'Functional Training', trainer: 'Vikram Singh', room: 'Turf Zone', day: 'Thursday', branch: 'janakpuri' },
  { id: 's12', time: '06:30 PM - 07:30 PM', className: 'Bollytwist', trainer: 'Simran Kaur', room: 'Dance Studio', day: 'Thursday', branch: 'janakpuri' },

  { id: 's13', time: '06:30 AM - 07:30 AM', className: 'Vinyasa Flow Yoga', trainer: 'Ananya Verma', room: 'Mind Studio 1', day: 'Friday', branch: 'janakpuri' },
  { id: 's14', time: '06:00 PM - 07:00 PM', className: 'Bhangra Fitness', trainer: 'Simran Kaur', room: 'Dance Studio', day: 'Friday', branch: 'janakpuri' },

  { id: 's15', time: '08:00 AM - 09:00 AM', className: 'Weekend Bootcamp', trainer: 'Rajeev & Vikram', room: 'Outdoor / Turf', day: 'Saturday', branch: 'janakpuri' },
  { id: 's16', time: '09:00 AM - 10:00 AM', className: 'Super Zumba', trainer: 'Simran Kaur', room: 'Dance Studio', day: 'Saturday', branch: 'janakpuri' },

  { id: 's17', time: '08:30 AM - 09:30 AM', className: 'Meditation & Stretch', trainer: 'Ananya Verma', room: 'Mind Studio 1', day: 'Sunday', branch: 'janakpuri' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Amanpreet Singh',
    role: 'Janakpuri Member',
    branch: 'Janakpuri',
    comment: 'The 24/7 access at Lagoon Fitness Gym is a lifesaver for my late-night shifts! Matrix machines are super smooth, and the steam bath after a brutal leg day is pure luxury.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop'
  },
  {
    id: 't2',
    name: 'Neha Roy',
    role: 'Malviya Nagar Member',
    branch: 'Malviya Nagar',
    comment: 'The Zumba and Bhangra classes with Simran are insanely energetic! I lost 8 kgs in 3 months while actually having fun. Hands down the best gym atmosphere in South Delhi.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop'
  },
  {
    id: 't3',
    name: 'Rohan Mehra',
    role: 'Personal Training Client',
    branch: 'Janakpuri',
    comment: 'Rajeev Sir created a tailored nutrition and powerlifting regimen for me. His technical cues corrected my deadlift form on day 1. Super clean lockers and great protein cafe too.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop'
  }
];

