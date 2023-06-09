import { AxiosResponse } from 'axios';
import { Order, OrderResponse } from '../interfaces/order.interface';
import api from './api';
import { User } from '../interfaces/user.interface';
import { Shop } from '../interfaces/shop.interface';

export const getListOfShops = async () => {
  const response = await api.get('/shop');
  return response.data;
};

export const getShopWithListOfProducts = async (shopId: number) => {
  const response: AxiosResponse<Shop> = await api.get(
    `/shop/${shopId}?products=true`,
  );
  return response.data;
};

export const placeOrder = async (payload: Order) => {
  try {
    const response = await api.post<AxiosResponse<OrderResponse>>(`/order`, {
      ...payload,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = async (email: string) => {
  if (!email) return null;
  const response: AxiosResponse<User[]> = await api.get(
    `/order?email=${email}`,
  );
  return response.data;
};
