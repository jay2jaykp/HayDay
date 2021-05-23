import { AxiosError, AxiosResponse } from "axios";
import { InventoryType, MachineType, ProductMachineType } from "../../@types";
import { api } from "../../service/axios";

export const get_products = async (): Promise<ProductMachineType[]> => {
  try {
    const res: AxiosResponse = await api.get("/product");
    return res.data as ProductMachineType[];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const add_product = async (
  product_data: ProductMachineType,
  successCallbackFunc: () => void,
  errorCallbackFunc: (err: AxiosError | string) => void
) => {
  try {
    const res: AxiosResponse = await api.post("/product/add", product_data);
    if (res.status === 201) successCallbackFunc();
  } catch (err) {
    console.error(err);
    errorCallbackFunc(err);
  }
};

export const edit_product = async (
  new_product_data: ProductMachineType,
  successCallbackFunc: () => void,
  errorCallbackFunc: (err: AxiosError | string) => void,
  old_product_data?: ProductMachineType
) => {
  try {
    const res = await api.put(
      `/product/edit/${new_product_data.id}`,
      new_product_data
    );
    if (res.status === 201) successCallbackFunc();
  } catch (err) {
    errorCallbackFunc(err);
  }
};

export const delete_product = async (
  product_data: ProductMachineType,
  successCallbackFunc: () => void,
  errorCallbackFunc: (err: AxiosError | string) => void
) => {
  try {
    const res = await api.delete(`/product/delete/${product_data.id}`);
    if (res.status === 200) successCallbackFunc();
  } catch (err) {
    errorCallbackFunc(err);
  }
};

export const get_machine_lookup = async (
  errorCallbackFunc: (err: AxiosError | string) => void
) => {
  try {
    const res = await api.get("/machine");
    const lookup_pair: any = {};
    for (let i of res.data as MachineType[]) {
      if (i.id) lookup_pair[i.id] = i.name;
    }
    return lookup_pair;
  } catch (err) {
    errorCallbackFunc(err);
  }
};

export const get_inventory_lookup = async (
  errorCallbackFunc: (err: AxiosError | string) => void
) => {
  try {
    const res = await api.get("/inventory");
    const lookup_pair: any = {};
    for (let i of res.data as InventoryType[]) {
      if (i.id) lookup_pair[i.id] = i.name;
    }
    return lookup_pair;
  } catch (err) {
    errorCallbackFunc(err);
  }
};
