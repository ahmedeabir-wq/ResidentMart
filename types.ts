export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  unit: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  building_id?: string;
}

export interface DeliverySlot {
  id: string;
  time: string;
  date: string;
  available: boolean;
}

export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
  DELIVERED = 'DELIVERED',
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  building_id: string;
  delivery_slot: string;
  created_at: string;
}