import { Product, DeliverySlot } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Organic Bananas",
    price: 1.29,
    category: "Produce",
    image: "https://picsum.photos/400/400?random=1",
    unit: "per lb",
    description: "Fresh organic bananas sourced locally."
  },
  {
    id: 2,
    name: "Sourdough Bread",
    price: 4.50,
    category: "Bakery",
    image: "https://picsum.photos/400/400?random=2",
    unit: "loaf",
    description: "Artisan sourdough baked fresh this morning."
  },
  {
    id: 3,
    name: "Whole Milk",
    price: 3.99,
    category: "Dairy",
    image: "https://picsum.photos/400/400?random=3",
    unit: "gallon",
    description: "Creamy whole milk from happy cows."
  },
  {
    id: 4,
    name: "Avocados",
    price: 1.50,
    category: "Produce",
    image: "https://picsum.photos/400/400?random=4",
    unit: "each",
    description: "Ripe and ready to eat avocados."
  },
  {
    id: 5,
    name: "Free Range Eggs",
    price: 5.99,
    category: "Dairy",
    image: "https://picsum.photos/400/400?random=5",
    unit: "dozen",
    description: "Large brown eggs from free range chickens."
  },
  {
    id: 6,
    name: "Sparkling Water",
    price: 0.99,
    category: "Beverages",
    image: "https://picsum.photos/400/400?random=6",
    unit: "bottle",
    description: "Refreshing lemon flavored sparkling water."
  },
  {
    id: 7,
    name: "Chicken Breast",
    price: 8.99,
    category: "Meat",
    image: "https://picsum.photos/400/400?random=7",
    unit: "per lb",
    description: "Boneless, skinless chicken breast."
  },
  {
    id: 8,
    name: "Pasta Sauce",
    price: 3.49,
    category: "Pantry",
    image: "https://picsum.photos/400/400?random=8",
    unit: "jar",
    description: "Traditional basil tomato sauce."
  }
];

export const MOCK_SLOTS: DeliverySlot[] = [
  { id: '1', date: 'Today', time: '5:00 PM - 6:00 PM', available: true },
  { id: '2', date: 'Today', time: '6:00 PM - 7:00 PM', available: true },
  { id: '3', date: 'Today', time: '7:00 PM - 8:00 PM', available: false },
  { id: '4', date: 'Tomorrow', time: '9:00 AM - 10:00 AM', available: true },
  { id: '5', date: 'Tomorrow', time: '10:00 AM - 11:00 AM', available: true },
];