import { defineCollection, z } from 'astro:content';

// 基本フィールド（全コンテンツタイプ共通）
const baseSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  date: z.string().optional(),
  location: z.string().optional(),
  participants: z.string().optional(),
  duration: z.string().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
  description: z.string().optional(),
});

// 宿泊情報用のスキーマ（accommodation.md用）
const accommodationSchema = baseSchema.extend({
  type: z.literal('accommodation'),
  basicInfo: z.object({
    name: z.string(),
    address: z.string(),
    dates: z.string(),
    guests: z.string(),
    checkin: z.string(),
    checkout: z.string(),
  }).optional(),
  facilities: z.object({
    kitchen: z.string(),
    onsen: z.string(),
    wifi_ssid: z.string(),
    wifi_pass: z.string(),
    parking: z.string(),
    laundry: z.string(),
    aircon: z.string(),
    beds: z.string(),
    bathroom: z.string(),
  }).optional(),
  access: z.object({
    car: z.string(),
    train: z.string(),
    bus: z.string(),
  }).optional(),
  nearby: z.object({
    yutopia: z.string(),
    supermarket: z.string(),
    jinya: z.string(),
    downtown: z.string(),
    kamiokande: z.string(),
  }).optional(),
  plan: z.object({
    rate: z.string(),
    meals: z.string(),
    extras: z.string(),
  }).optional(),
  schedule: z.object({
    day1: z.array(z.object({
      time: z.string(),
      activity: z.string(),
    })),
    day2: z.array(z.object({
      time: z.string(),
      activity: z.string(),
    })),
  }).optional(),
  notes: z.array(z.string()).optional(),
  links: z.object({
    airbnb: z.string(),
    map: z.string(),
    yutopia: z.string(),
  }).optional(),
});

// 観光地用のスキーマ（spots.md用）
const spotSchema = baseSchema.extend({
  type: z.literal('spot'),
  category: z.string().optional(), // 観光、体験、グルメなど
  openingHours: z.string().optional(),
  admissionFee: z.string().optional(),
  access: z.object({
    car: z.string().optional(),
    train: z.string().optional(),
    bus: z.string().optional(),
    walking: z.string().optional(),
  }).optional(),
  contact: z.object({
    phone: z.string().optional(),
    website: z.string().optional(),
    address: z.string().optional(),
  }).optional(),
  highlights: z.array(z.string()).optional(),
  tips: z.array(z.string()).optional(),
});

// スケジュール用のスキーマ（schedule.md用）
const scheduleSchema = baseSchema.extend({
  type: z.literal('schedule'),
  transportation: z.string().optional(),
  itinerary: z.array(z.object({
    time: z.string(),
    activity: z.string(),
    location: z.string().optional(),
    notes: z.string().optional(),
  })).optional(),
  meetingPoint: z.string().optional(),
  importantNotes: z.array(z.string()).optional(),
});

// 一般情報用のスキーマ（info.md用）
const infoSchema = baseSchema.extend({
  type: z.literal('info'),
  transportation: z.string().optional(), // 交通手段情報
  sections: z.array(z.object({
    title: z.string(),
    content: z.string(),
  })).optional(),
  quickFacts: z.array(z.string()).optional(),
  links: z.array(z.object({
    title: z.string(),
    url: z.string(),
  })).optional(),
});

const tripCollection = defineCollection({
  type: 'content',
  schema: z.discriminatedUnion('type', [
    accommodationSchema,
    spotSchema,
    scheduleSchema,
    infoSchema,
  ]),
});

export const collections = {
  trip: tripCollection,
}; 