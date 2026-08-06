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
  category: "walkthrough" | "workout" | "zumba" | "mma" | "strength";
  youtubeId: string;
  duration?: string;
  thumbnail?: string;
}

export interface FitnessClass {
  id: string;
  name: string;
  image: string;
  intensity: "High" | "Medium" | "All Levels";
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
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}