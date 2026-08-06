// src/types.ts

/* =========================
   Branch
========================= */

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

/* =========================
   Services
========================= */

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

/* =========================
   Facility Features
========================= */

export interface FacilityFeature {
  id: string;
  title: string;
  iconName:
    | "Award"
    | "Clock"
    | "Sparkles"
    | "Lock"
    | "Apple"
    | "Activity"
    | "Dumbbell"
    | "Users"
    | "Key"
    | "ShieldCheck"
    | "Zap"
    | "UserCheck"
    | "HeartPulse"
    | "Flame"
    | "Sun"
    | "Snowflake";

  isDesignCard?: boolean;
}

/* =========================
   Workout Videos
========================= */

export interface VideoItem {
  id: string;
  title: string;
  category:
    | "walkthrough"
    | "workout"
    | "zumba"
    | "mma"
    | "strength";

  youtubeId: string;
  duration?: string;
  thumbnail?: string;

  branch: "janakpuri" | "malviya-nagar" | "all";
}

/* =========================
   Fitness Classes
========================= */

export interface FitnessClass {
  id: string;
  name: string;
  image: string;
  intensity: "High" | "Medium" | "All Levels";
  duration: string;
  caloriesBurned: string;
  description: string;
}

/* =========================
   Trainers
========================= */

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

/* =========================
   Weekly Schedule
========================= */

export type WeekDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface ScheduleClass {
  id: string;
  day: WeekDay;
  time: string;
  className: string;
  trainer: string;
  room: string;

  branch: "janakpuri" | "malviya-nagar";
}

/* =========================
   Testimonials
========================= */

export interface Testimonial {
  id: string;
  name: string;
  role: string;

  branch: "Janakpuri" | "Malviya Nagar";

  comment: string;
  rating: number;
  avatar: string;
}

/* =========================
   Forms
========================= */

export interface PassFormData {
  name: string;
  phone: string;
  branch: string;
  classInterest: string;
}

export interface CoachFormData {
  goal: string;
  fitnessLevel: string;
  userQuery: string;
}