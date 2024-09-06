import React, { useEffect, useRef, useState } from "react";
import UserList from "../Components/Userlist/UserList";
import Chart from "../Components/Userlist/Chart";
import DataTable from "../Components/Userlist/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, graphData } from "../Data/fetchUserData";

function Dashboard() {
  const dispatch = useDispatch();

  const { isLoading, data, isError } = useSelector((state) => state.userlist);
  const { isLoading:isLoading1, graphUser, isError:isError1 } = useSelector(
    (state) => state.graph_data
  );
  const dataTableRef = useRef(null);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(graphData());
  }, [dispatch]);

  if (isLoading || isLoading1) {
    return <p>Loading...</p>;
  }

  if (isError || isError1) {
    return <p>There was an error fetching the data.</p>;
  }

  
  const graph = JSON.stringify(graphUser,2,null);
  console.log("GraphicsData" + graph);

  const graph1=(graphUser && graphUser.message && graphUser?.message )|| [];
  console.log("graphdata"+graph1);
  const graph2 = Array.isArray(graphUser?.message) ? graphUser.message : [];
  const user = data?.data || [];
  console.log("userrrr", user);

  console.log("datatta" + data);
  const users = (data && data.data && data?.data) || [];
  console.log("userrrr", users);

  const totalUsers = users;
  const isActive = users ? users.filter((user) => user.isActive) : [];
  const inActive = users ? users.filter((user) => !user.isActive) : [];
  const verified = users ? users.filter((user) => user.emailVerified) : [];
  const notVeri = users ? users.filter((user) => !user.emailVerified) : [];

  const handleActiveClick = () => {
    dataTableRef.current.updateData(isActive);
  };

  const handleInActiveClick = () => {
    dataTableRef.current.updateData(inActive);
  };

  const handleEmailVerifiedClick = () => {
    dataTableRef.current.updateData(verified);
  };

  const handleNotEmailVerifiedClick = () => {
    dataTableRef.current.updateData(notVeri);
  };

  return (
    <>
      <UserList
        totalUsers={users}
        isActive={isActive}
        inActive={inActive}
        verified={verified}
        notVeri={notVeri}
        ActiveClick={handleActiveClick}
        inActiveClick={handleInActiveClick}
        EmailVerifiedClick={handleEmailVerifiedClick}
        NotEmailVerifiedClick={handleNotEmailVerifiedClick}
      />
      <Chart graph={graph1}/>
      <DataTable ref={dataTableRef} initialData={users} />
    </>
  );
}

export default Dashboard;
