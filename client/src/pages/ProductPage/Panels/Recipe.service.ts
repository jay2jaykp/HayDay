import { AxiosError, AxiosResponse } from "axios";
import {
  OrderItemType,
  ProductMachineType,
  RecipeItemType,
} from "../../../@types";
import { api } from "../../../service/axios";

export const get_recipe = async (
  product_id: number,
  errorCallbackFunc: (err: AxiosError | string) => void
): Promise<RecipeItemType[]> => {
  try {
    const res: AxiosResponse = await api.get(`/recipe/${product_id}`);
    return res.data as RecipeItemType[];
  } catch (err) {
    errorCallbackFunc(err);
    console.error(err);
    return [];
  }
};

export const add_ingredient_in_recipe = async (
  new_recipe_ingredient: RecipeItemType,
  successCallbackFunc: () => void,
  errorCallbackFunc: (err: AxiosError | string) => void
) => {
  try {
    const res = await api.post("/recipe/add", new_recipe_ingredient);
    if (res.status === 201) successCallbackFunc();
  } catch (err) {
    console.error(err);
    errorCallbackFunc(err);
  }
};

export const edit_item_in_orderlist = async (
  new_order_item: OrderItemType,
  successCallbackFunc: () => void,
  errorCallbackFunc: (err: AxiosError | string) => void
  // old_product_data?: OrderType
) => {
  try {
    const res = await api.put(
      `/orderlist/edit/${new_order_item.id}`,
      new_order_item
    );
    if (res.status === 201) successCallbackFunc();
  } catch (err) {
    errorCallbackFunc(err);
  }
};

export const delete_item_from_orderlist = async (
  order_item: OrderItemType,
  successCallbackFunc: () => void,
  errorCallbackFunc: (err: AxiosError | string) => void
) => {
  try {
    const res = await api.delete(`/orderlist/delete/${order_item.id}`);
    if (res.status === 200) successCallbackFunc();
  } catch (err) {
    errorCallbackFunc(err);
  }
};

export const get_product_lookup = async (
  errorCallbackFunc: (err: AxiosError | string) => void
) => {
  try {
    const res = await api.get("/product");
    const lookup_pair: any = {};
    for (let i of res.data as ProductMachineType[]) {
      if (i.id) lookup_pair[i.id] = i.name;
    }
    return lookup_pair;
  } catch (err) {
    errorCallbackFunc(err);
  }
};
