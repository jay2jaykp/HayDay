import { AxiosError, AxiosResponse } from "axios";
import { OrderType } from "../../@types";
import { api } from "../../service/axios";

export const get_orders = async (): Promise<OrderType[]> => {
  try {
    const res: AxiosResponse = await api.get("/order");
    return res.data as OrderType[];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const add_order = async (
  order_data: OrderType,
  successCallbackFunc: () => void,
  errorCallbackFunc: (err: AxiosError | string) => void
) => {
  try {
    const res: AxiosResponse = await api.post("/order/add", order_data);
    if (res.status === 201) successCallbackFunc();
  } catch (err) {
    console.error(err);
    errorCallbackFunc(err);
  }
};

export const edit_order = async (
  new_order_data: OrderType,
  successCallbackFunc: () => void,
  errorCallbackFunc: (err: AxiosError | string) => void,
  old_product_data?: OrderType
) => {
  try {
    const res = await api.put(
      `/order/edit/${new_order_data.id}`,
      new_order_data
    );
    if (res.status === 201) successCallbackFunc();
  } catch (err) {
    errorCallbackFunc(err);
  }
};

export const delete_order = async (
  order_data: OrderType,
  successCallbackFunc: () => void,
  errorCallbackFunc: (err: AxiosError | string) => void
) => {
  try {
    const res = await api.delete(`/order/delete/${order_data.id}`);
    if (res.status === 200) successCallbackFunc();
  } catch (err) {
    errorCallbackFunc(err);
  }
};
