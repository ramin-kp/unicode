import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderInfos from "./../../components/UserPanel/OrderInfos";

export default function UPanelOrder() {
  const { id } = useParams();
  const [oneOrder, setOneOrder] = useState([]);
  useEffect(() => {
    getAllOrder();
  }, []);
  const getAllOrder = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const getOrder = await fetch(`http://localhost:4000/v1/orders/${id}`, {
      headers: { Authorization: `Bearer ${localStorageData.token}` },
    });
    const json = await getOrder.json();
    setOneOrder(json);
  };
  return (
    <section>
      <OrderInfos data={oneOrder[0]} />
    </section>
  );
}
