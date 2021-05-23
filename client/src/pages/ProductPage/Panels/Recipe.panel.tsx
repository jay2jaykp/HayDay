import React, { useContext, useEffect, useState } from "react";
import MaterialTable, { Column } from "material-table";
import {
  get_recipe,
  get_product_lookup,
  add_ingredient_in_recipe,
} from "./Recipe.service";
import { ProductMachineType, RecipeItemType } from "../../../@types";
import { NotificationContext } from "../../../context/notification";
import { BaseLayout } from "../../../components/layout/base-layout/BaseLayout";

export const Recipe: React.FC<ProductMachineType> = (props) => {
  const { errorCallback } = useContext(NotificationContext);

  const [data, setData] = useState<RecipeItemType[]>([]);
  const [ingredientLookup, setIngredientLookup] = useState({});

  const columns: Column<RecipeItemType>[] = [
    { title: "Ingredient", field: "ingredient_id", lookup: ingredientLookup },
    { title: "How Many", field: "ingredient_multiplier" },
  ];

  const load_data = async () => {
    const res = await get_recipe(props.id ? props.id : 0, errorCallback);
    setData(res);
  };

  const load_ingredient_lookup = async () => {
    setIngredientLookup(await get_product_lookup(errorCallback));
  };

  useEffect(() => {
    load_data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    load_ingredient_lookup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BaseLayout>
      <MaterialTable
        columns={columns}
        data={data}
        title={`Recipe of ${props.name}`}
        editable={{
          onRowAdd: async (newData: RecipeItemType) =>
            add_ingredient_in_recipe(
              { ...newData, product_id: props.id ? props.id : 0 },
              load_data,
              errorCallback
            ),
          //   onRowUpdate: async (
          //     newData: OrderItemType,
          //     oldData?: OrderItemType
          //   ) =>
          //     edit_item_in_orderlist(
          //       { ...newData, order_id: props.id ? props.id : 0 },
          //       load_data,
          //       errorCallback
          //     ),
          //   onRowDelete: async (newData: OrderItemType) =>
          //     delete_item_from_orderlist(newData, load_data, errorCallback),
        }}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </BaseLayout>
  );
};
