import React, { useContext, useEffect, useState } from "react";
import MaterialTable, { Column } from "material-table";
import {
  add_new_item_in_orderlist,
  delete_item_from_orderlist,
  edit_item_in_orderlist,
  get_order_list,
  get_product_lookup,
} from "./OrderList.service";
import { OrderItemType, OrderType } from "../../../@types";
import { NotificationContext } from "../../../context/notification";
import { BaseLayout } from "../../../components/layout/base-layout/BaseLayout";

export const OrderList: React.FC<OrderType> = (props) => {
  const { errorCallback } = useContext(NotificationContext);

  const [data, setData] = useState<OrderItemType[]>([]);
  const [productLookup, setProductLookup] = useState({});

  const columns: Column<OrderItemType>[] = [
    { title: "Product", field: "product_id", lookup: productLookup },
    { title: "How Many", field: "product_multiplier" },
  ];

  const load_data = async () => {
    const res = await get_order_list(props.id ? props.id : 0, errorCallback);
    setData(res);
  };

  const load_product_lookup = async () => {
    setProductLookup(await get_product_lookup(errorCallback));
  };

  useEffect(() => {
    load_data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    load_product_lookup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BaseLayout>
      <MaterialTable
        columns={columns}
        data={data}
        title={`Order List of ${props.name}`}
        editable={{
          onRowAdd: async (newData: OrderItemType) =>
            add_new_item_in_orderlist(
              { ...newData, order_id: props.id ? props.id : 0 },
              load_data,
              errorCallback
            ),
          onRowUpdate: async (
            newData: OrderItemType,
            oldData?: OrderItemType
          ) =>
            edit_item_in_orderlist(
              { ...newData, order_id: props.id ? props.id : 0 },
              load_data,
              errorCallback
            ),
          onRowDelete: async (newData: OrderItemType) =>
            delete_item_from_orderlist(newData, load_data, errorCallback),
        }}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </BaseLayout>
  );
};
