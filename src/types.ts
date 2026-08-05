export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
  embedMapUrl: string;
  tagline: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

export interface FacilityFeature {
  id: string;
  title: string;
  iconName: string;
  isDesignCard?: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'walkthrough' | 'workout' | 'zumba' | 'mma' | 'strength';
  youtubeId: string;
  branch: 'janakpuri' | 'malviya-nagar' | 'all';
  duration?: string;
  thumbnail?: string;
}

export interface FitnessClass {
  id: string;
  name: string;
  image: string;
  intensity: 'High' | 'Medium' | 'All Levels';
  duration: string;
  caloriesBurned: string;
  description: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  image: string;
  bio: string;
  rating: number;
}

export interface ScheduleClass {
  id: string;
  time: string;
  className: string;
  trainer: string;
  room: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  branch: 'janakpuri' | 'malviya-nagar';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  branch: string;
  comment: string;
  rating: number;
  avatar: string;
}
