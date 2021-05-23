import { AxiosError, AxiosResponse } from "axios";
import { MachineType } from "../../@types";
import { api } from "../../service/axios";

export const get_machines = async (): Promise<MachineType[]> => {
  try {
    const res: AxiosResponse = await api.get("/machine");
    return res.data as MachineType[];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const add_machine = async (
  machine_data: MachineType,
  successCallbackFunc: () => void,
  errorCallbackFunc: (err: AxiosError | string) => void
) => {
  console.log(machine_data);
  try {
    const res: AxiosResponse = await api.post("/machine/add", machine_data);
    if (res.status === 201) successCallbackFunc();
  } catch (err) {
    console.error(err);
    errorCallbackFunc(err);
  }
};

export const edit_machine = async (
  new_machine_data: MachineType,
  successCallbackFunc: () => void,
  errorCallbackFunc: (err: AxiosError | string) => void,
  old_machine_data?: MachineType
) => {
  try {
    const res = await api.put(
      `/machine/edit/${new_machine_data.id}`,
      new_machine_data
    );
    if (res.status === 201) successCallbackFunc();
  } catch (err) {
    errorCallbackFunc(err);
  }
};

export const delete_machine = async (
  machine_data: MachineType,
  successCallbackFunc: () => void,
  errorCallbackFunc: (err: AxiosError | string) => void
) => {
  try {
    const res = await api.delete(`/machine/delete/${machine_data.id}`);
    if (res.status === 200) successCallbackFunc();
  } catch (err) {
    errorCallbackFunc(err);
  }
};
