export interface Reward {
  id: string;
  platform: 'Google Pay' | 'Paytm' | 'PhonePe';
  type: 'Cashback' | 'Coupon';
  amount?: number;
  description: string;
  category: 'Food' | 'Travel' | 'Health' | 'Shopping' | 'Others';
  expiryDate: string;
  status: 'Active' | 'Expiring Soon' | 'Redeemed';
}

export const mockRewards: Reward[] = [
  {
    id: '1',
    platform: 'Google Pay',
    type: 'Cashback',
    amount: 50,
    description: 'Cashback on Zomato order',
    category: 'Food',
    expiryDate: '2024-04-15',
    status: 'Active',
  },
  {
    id: '2',
    platform: 'Paytm',
    type: 'Coupon',
    description: 'Flat 20% off on Myntra',
    category: 'Shopping',
    expiryDate: '2024-03-05',
    status: 'Expiring Soon',
  },
  {
    id: '3',
    platform: 'PhonePe',
    type: 'Cashback',
    amount: 120,
    description: 'Cashback on Electricity Bill',
    category: 'Others',
    expiryDate: '2024-05-20',
    status: 'Active',
  },
  {
    id: '4',
    platform: 'Google Pay',
    type: 'Coupon',
    description: 'Buy 1 Get 1 Free at PVR',
    category: 'Others',
    expiryDate: '2024-03-02',
    status: 'Expiring Soon',
  },
  {
    id: '5',
    platform: 'Paytm',
    type: 'Cashback',
    amount: 25,
    description: 'Cashback on Mobile Recharge',
    category: 'Others',
    expiryDate: '2024-04-10',
    status: 'Active',
  },
  {
    id: '6',
    platform: 'PhonePe',
    type: 'Coupon',
    description: '₹500 off on Cleartrip',
    category: 'Travel',
    expiryDate: '2024-06-15',
    status: 'Active',
  },
];

export const analyticsData = [
  { month: 'Jan', savings: 450, redeemed: 12 },
  { month: 'Feb', savings: 820, redeemed: 18 },
  { month: 'Mar', savings: 610, redeemed: 15 },
  { month: 'Apr', savings: 950, redeemed: 22 },
  { month: 'May', savings: 1200, redeemed: 28 },
  { month: 'Jun', savings: 1100, redeemed: 25 },
];

export const categoryData = [
  { name: 'Food', value: 35 },
  { name: 'Shopping', value: 25 },
  { name: 'Travel', value: 20 },
  { name: 'Health', value: 10 },
  { name: 'Others', value: 10 },
];

export const mockSMS = [
  { id: 's1', sender: 'AD-PAYTM', text: 'Congrats! You won ₹50 cashback on your last scan. Check Paytm app.', time: '2 mins ago' },
  { id: 's2', sender: 'VM-GOPAY', text: 'Your Zomato coupon GPYZOM20 is expiring in 2 days. Use it now!', time: '1 hour ago' },
  { id: 's3', sender: 'BZ-PHONEPE', text: 'Flat ₹100 off on your next Swiggy order with PhonePe. Valid till 30th March.', time: '5 hours ago' },
];
