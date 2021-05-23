import React, { useContext, useEffect, useState } from "react";
import MaterialTable, { Column } from "material-table";
import {
  add_machine,
  delete_machine,
  edit_machine,
  get_machines,
} from "./MachinePage.service";
import { MachineType } from "../../@types";
import { NotificationContext } from "../../context/notification";
import { BaseLayout } from "../../components/layout/base-layout/BaseLayout";

export const MachinePage: React.FC = () => {
  const [data, setData] = useState<MachineType[]>([]);
  const { errorCallback } = useContext(NotificationContext);

  const columns: Column<MachineType>[] = [
    { title: "ID", field: "id", editable: "never" },
    { title: "Name", field: "name" },
    { title: "Total Slots", field: "total_slots" },
  ];

  const load_data = async () => {
    const res = await get_machines();
    setData(res);
  };

  useEffect(() => {
    load_data();
  }, []);

  return (
    <BaseLayout>
      <MaterialTable
        columns={columns}
        data={data}
        title="Machine"
        editable={{
          onRowAdd: async (newData: MachineType) =>
            add_machine(newData, load_data, errorCallback),
          onRowUpdate: async (newData: MachineType, oldData?: MachineType) =>
            edit_machine(newData, load_data, errorCallback, oldData),
          // onRowDelete: async (newData: MachineType) =>
          //   delete_machine(newData, load_data, errorCallback),
        }}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </BaseLayout>
  );
};
