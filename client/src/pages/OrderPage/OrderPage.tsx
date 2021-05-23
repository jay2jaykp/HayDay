import React, { useContext, useEffect, useState } from "react";
import MaterialTable, { Column } from "material-table";
import {
  add_order,
  delete_order,
  edit_order,
  get_orders,
} from "./OrderPage.service";
import { OrderType } from "../../@types";
import { NotificationContext } from "../../context/notification";
import { BaseLayout } from "../../components/layout/base-layout/BaseLayout";
import { OrderList } from "./Panels/OrderList.panel";

export const OrderPage: React.FC = () => {
  const [data, setData] = useState<OrderType[]>([]);
  const { errorCallback } = useContext(NotificationContext);

  const columns: Column<OrderType>[] = [
    { title: "ID", field: "id", editable: "never" },
    { title: "Name", field: "name" },
    { title: "Value Amount", field: "value_amount" },
    { title: "Stars", field: "stars" },
  ];

  const load_data = async () => {
    const res = await get_orders();
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
        title="Order"
        editable={{
          onRowAdd: async (newData: OrderType) =>
            add_order(newData, load_data, errorCallback),
          onRowUpdate: async (newData: OrderType, oldData?: OrderType) =>
            edit_order(newData, load_data, errorCallback, oldData),
          // onRowDelete: async (newData: OrderType) =>
          //   delete_order(newData, load_data, errorCallback),
        }}
        options={{
          actionsColumnIndex: -1,
        }}
        detailPanel={(rowData) => <OrderList {...rowData} />}
      />
    </BaseLayout>
  );
};
