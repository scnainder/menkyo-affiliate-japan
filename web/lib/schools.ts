export interface School {
  id: string
  name: string
  prefecture: string
  city: string
  price: number
  rating: number
  reviews: number
  features: string[]
  contact: string
  website: string
  address: string
}

export const schools: School[] = [
  {
    id: 'tokyo-001',
    name: 'シティードライビングスクール渋谷',
    prefecture: '東京都',
    city: '渋谷区',
    price: 275000,
    rating: 4.8,
    reviews: 234,
    features: ['駅近', '短期取得', '女性スタッフ多数'],
    contact: '03-XXXX-XXXX',
    website: 'https://example.com',
    address: '東京都渋谷区...',
  },
  {
    id: 'tokyo-002',
    name: '新宿自動車学校',
    prefecture: '東京都',
    city: '新宿区',
    price: 298000,
    rating: 4.5,
    reviews: 156,
    features: ['宿泊可能', 'AT限定', '教官が親切'],
    contact: '03-XXXX-XXXX',
    website: 'https://example.com',
    address: '東京都新宿区...',
  },
  {
    id: 'kanagawa-001',
    name: '横浜ドライビング学園',
    prefecture: '神奈川県',
    city: '横浜市',
    price: 265000,
    rating: 4.3,
    reviews: 89,
    features: ['安い', '駅近', '夜間コース'],
    contact: '045-XXXX-XXXX',
    website: 'https://example.com',
    address: '神奈川県横浜市...',
  },
  {
    id: 'saitama-001',
    name: '埼玉さくら自動車学校',
    prefecture: '埼玉県',
    city: 'さいたま市',
    price: 245000,
    rating: 4.6,
    reviews: 178,
    features: ['格安', 'MT・AT対応', '親切な教官'],
    contact: '048-XXXX-XXXX',
    website: 'https://example.com',
    address: '埼玉県さいたま市...',
  },
  {
    id: 'chiba-001',
    name: '千葉中央自動車学校',
    prefecture: '千葉県',
    city: '千葉市',
    price: 255000,
    rating: 4.4,
    reviews: 123,
    features: ['駐車場完備', '夜間対応', 'WiFi完備'],
    contact: '043-XXXX-XXXX',
    website: 'https://example.com',
    address: '千葉県千葉市...',
  },
  {
    id: 'osaka-001',
    name: '大阪ドライビングスクール',
    prefecture: '大阪府',
    city: '大阪市',
    price: 280000,
    rating: 4.7,
    reviews: 267,
    features: ['梅田駅近', '最新教材', '合格保証'],
    contact: '06-XXXX-XXXX',
    website: 'https://example.com',
    address: '大阪府大阪市...',
  },
  {
    id: 'kyoto-001',
    name: '京都自動車学園',
    prefecture: '京都府',
    city: '京都市',
    price: 270000,
    rating: 4.5,
    reviews: 145,
    features: ['駅近', '女性向けコース', '教官親切'],
    contact: '075-XXXX-XXXX',
    website: 'https://example.com',
    address: '京都府京都市...',
  },
  {
    id: 'hyogo-001',
    name: '神戸ドライバーズスクール',
    prefecture: '兵庫県',
    city: '神戸市',
    price: 265000,
    rating: 4.6,
    reviews: 198,
    features: ['海が見える', '快適環境', '短期コース'],
    contact: '078-XXXX-XXXX',
    website: 'https://example.com',
    address: '兵庫県神戸市...',
  },
  {
    id: 'fukuoka-001',
    name: '福岡自動車学校',
    prefecture: '福岡県',
    city: '福岡市',
    price: 260000,
    rating: 4.4,
    reviews: 112,
    features: ['駅近', '託児所あり', 'テスト合格率高'],
    contact: '092-XXXX-XXXX',
    website: 'https://example.com',
    address: '福岡県福岡市...',
  },
  {
    id: 'hiroshima-001',
    name: '広島ドライビングセンター',
    prefecture: '広島県',
    city: '広島市',
    price: 250000,
    rating: 4.5,
    reviews: 98,
    features: ['安い', '教官がイケメン', '設備が新しい'],
    contact: '082-XXXX-XXXX',
    website: 'https://example.com',
    address: '広島県広島市...',
  },
  {
    id: 'hokkaido-001',
    name: '札幌自動車学園',
    prefecture: '北海道',
    city: '札幌市',
    price: 280000,
    rating: 4.3,
    reviews: 76,
    features: ['冬対応', '広い敷地', '一人ひとり丁寧'],
    contact: '011-XXXX-XXXX',
    website: 'https://example.com',
    address: '北海道札幌市...',
  },
  {
    id: 'okinawa-001',
    name: '沖縄ドライビングスクール',
    prefecture: '沖縄県',
    city: '那覇市',
    price: 275000,
    rating: 4.6,
    reviews: 134,
    features: ['リゾート気分', 'MT得意', '楽しく学べる'],
    contact: '098-XXXX-XXXX',
    website: 'https://example.com',
    address: '沖縄県那覇市...',
  },
]

export function getSchoolsByPrefecture(prefecture: string): School[] {
  return schools.filter(school => school.prefecture === prefecture)
}

export function getAllPrefectures(): string[] {
  const prefectures = new Set(schools.map(school => school.prefecture))
  return Array.from(prefectures).sort()
}
