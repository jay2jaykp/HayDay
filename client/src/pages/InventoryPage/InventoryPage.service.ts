import { AxiosError, AxiosResponse } from "axios";
import { InventoryType } from "../../@types";
import { api } from "../../service/axios";

export const get_inventory = async (): Promise<InventoryType[]> => {
  try {
    const res: AxiosResponse = await api.get("/inventory");
    return res.data as InventoryType[];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const add_inventory = async (
  inventory_data: InventoryType,
  successCallbackFunc: () => void,
  errorCallbackFunc: (err: AxiosError | string) => void
) => {
  try {
    const res: AxiosResponse = await api.post("/inventory/add", inventory_data);
    if (res.status === 201) successCallbackFunc();
  } catch (err) {
    console.error(err);
    errorCallbackFunc(err);
  }
};

export const edit_inventory = async (
  new_inventory_data: InventoryType,
  successCallbackFunc: () => void,
  errorCallbackFunc: (err: AxiosError | string) => void,
  old_machine_data?: InventoryType
) => {
  try {
    const res = await api.put(
      `/inventory/edit/${new_inventory_data.id}`,
      new_inventory_data
    );
    if (res.status === 201) successCallbackFunc();
  } catch (err) {
    errorCallbackFunc(err);
  }
};

export const delete_inventory = async (
  inventory_data: InventoryType,
  successCallbackFunc: () => void,
  errorCallbackFunc: (err: AxiosError | string) => void
) => {
  try {
    const res = await api.delete(`/inventory/delete/${inventory_data.id}`);
    if (res.status === 200) successCallbackFunc();
  } catch (err) {
    errorCallbackFunc(err);
  }
};
