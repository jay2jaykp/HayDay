import React, { useContext, useEffect, useState } from "react";
import MaterialTable, { Column } from "material-table";
import { InventoryType } from "../../@types";
import { NotificationContext } from "../../context/notification";
import { BaseLayout } from "../../components/layout/base-layout/BaseLayout";
import {
  add_inventory,
  delete_inventory,
  edit_inventory,
  get_inventory,
} from "./InventoryPage.service";

export const InventoryPage: React.FC = () => {
  const [data, setData] = useState<InventoryType[]>([]);
  const { errorCallback } = useContext(NotificationContext);

  const columns: Column<InventoryType>[] = [
    { title: "ID", field: "id", editable: "never" },
    { title: "Name", field: "name" },
    { title: "Capacity", field: "capacity" },
  ];

  const load_data = async () => {
    const res = await get_inventory();
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
        title="Inventory"
        editable={{
          onRowAdd: async (newData: InventoryType) =>
            add_inventory(newData, load_data, errorCallback),
          onRowUpdate: async (
            newData: InventoryType,
            oldData?: InventoryType
          ) => edit_inventory(newData, load_data, errorCallback, oldData),
          // onRowDelete: async (newData: InventoryType) =>
          //   delete_inventory(newData, load_data, errorCallback),
        }}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </BaseLayout>
  );
};
