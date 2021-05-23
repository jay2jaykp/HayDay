import React, { useContext, useEffect, useState } from "react";
import MaterialTable, { Column } from "material-table";
import {
  add_product,
  delete_product,
  edit_product,
  get_inventory_lookup,
  get_machine_lookup,
  get_products,
} from "./ProductPage.service";
import { ProductMachineType } from "../../@types";
import { NotificationContext } from "../../context/notification";
import { BaseLayout } from "../../components/layout/base-layout/BaseLayout";
import { Recipe } from "./Panels/Recipe.panel";

export const ProductPage: React.FC = () => {
  const { errorCallback } = useContext(NotificationContext);

  const [data, setData] = useState<ProductMachineType[]>([]);
  const [machineLookup, setMachineLookup] = useState({});
  const [inventoryLookup, setInventoryLookup] = useState({});

  const load_machine_lookup = async () =>
    setMachineLookup(await get_machine_lookup(errorCallback));

  const load_inventory_lookup = async () =>
    setInventoryLookup(await get_inventory_lookup(errorCallback));

  const columns: Column<ProductMachineType>[] = [
    { title: "ID", field: "id", editable: "never" },
    { title: "Product Name", field: "name" },
    { title: "Sales Value", field: "sales_value" },
    { title: "Machine", field: "machine_id", lookup: machineLookup },
    { title: "Inventory", field: "inventory_id", lookup: inventoryLookup },
    {
      title: "Production Time (min)",
      field: "time_in_minute",
      type: "numeric",
      align: "left",
    },
    {
      title: "Output Multiplier",
      field: "output_multiplier",
      type: "numeric",
      align: "left",
    },
  ];

  const load_data = async () => {
    const res = await get_products();
    setData(res);
  };

  useEffect(() => {
    load_data();
  }, []);

  useEffect(() => {
    load_machine_lookup();
    load_inventory_lookup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BaseLayout>
      <MaterialTable
        columns={columns}
        data={data}
        title="Product"
        editable={{
          onRowAdd: async (newData: ProductMachineType) =>
            add_product(newData, load_data, errorCallback),
          onRowUpdate: async (
            newData: ProductMachineType,
            oldData?: ProductMachineType
          ) => edit_product(newData, load_data, errorCallback, oldData),
          // onRowDelete: async (newData: ProductMachineType) =>
          //   delete_product(newData, load_data, errorCallback),
        }}
        options={{
          actionsColumnIndex: -1,
        }}
        detailPanel={(rowData) => <Recipe {...rowData} />}
      />
    </BaseLayout>
  );
};
