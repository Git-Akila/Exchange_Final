import React, {useEffect, useLayoutEffect, useRef} from "react";

import Chart from "../Components/Userlist/Chart";
import DataTable from "../Components/Userlist/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, graphData } from "../Data/fetchUserData";

const UserFilter = ({ label, count, onClick }) => (
  <div
    className="flex flex-col py-2 cursor-pointer text-center hover:bg-blue-50 rounded transition"
    onClick={onClick}
  >
    <span className="font-medium">{label}</span>
    <span className="text-lg">{count}</span>
  </div>
);
function Dashboard() {
  const dispatch = useDispatch();
  const dataTableRef = useRef(null);
  const tableWrapperRef = useRef(null);

  const { isLoading, data, isError } = useSelector((state) => state.userlist);
  const {
    isLoading: isLoading1,
    graphUser,
    isError: isError1,
  } = useSelector((state) => state.graph_data);

  useLayoutEffect(() => {
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

  // const graph = JSON.stringify(graphUser, 2, null);

  const graph1 = (graphUser && graphUser.message && graphUser?.message) || [];
  // console.log("graphdata"+graph1);
  const graph2 = Array.isArray(graphUser?.message) ? graphUser.message : [];
  const user = data?.data || [];

  const users = (data && data.data && data?.data) || [];
  // console.log("users" + JSON.stringify(users));
  const totalUsers = users;
  const Active = users ? users.filter((user) => user.isActive) : [];
  const inActive = users ? users.filter((user) => !user.isActive) : [];
  const verified = users ? users.filter((user) => user.emailVerified) : [];
  const notVerified = users ? users.filter((user) => !user.emailVerified) : [];
  const kycVerification = users ? users.filter((user) => user.kycVerified) : [];
  const NotkycVerification = users
    ? users.filter((user) => !user.kycVerified)
    : [];
  const MobileVerification = users
    ? users.filter((user) => user.phoneVerified)
    : [];
  const NotMobileVerification = users
    ? users.filter((user) => !user.phoneVerified)
    : [];
  const BankVerification = users
    ? users.filter((user) => user.bank_status)
    : [];
  const NotBankVerification = users
    ? users.filter((user) => !user.bank_status)
    : [];

  const tfaVerification = users ? users.filter((user) => user.tfaVerified) : [];
  const NottfaVerification = users
    ? users.filter((user) => !user.tfaVerified)
    : [];

  const fundPasscode = users ? users.filter((user) => user.passcodeStatus) : [];
  const notfundPasscode = users
    ? users.filter((user) => !user.passcodeStatus)
    : [];

  const Age18years = users ? users.filter((user) => user.age <= 18) : [];
  const countMales = Age18years.filter((user) => user.gender === "Male").length;
  const countFemales = Age18years.filter(
    (user) => user.gender === "Female"
  ).length;

  const Age28years = users
    ? users.filter((user) => user.age >= 18 || user.age <= 28)
    : [];
  const countMales1 = Age28years.filter((user) => user.gender === "Male");
  const countFemales1 = Age28years.filter((user) => user.gender === "Female");

  const Age39years = users
    ? users.filter((user) => user.age >= 29 || user.age <= 39)
    : [];
  const countMales2 = Age39years.filter((user) => user.gender === "Male");
  const countFemales2 = Age39years.filter((user) => user.gender === "Female");

  const Age50years = users
    ? users.filter((user) => user.age >= 40 || user.age <= 50)
    : [];
  const countMales3 = Age39years.filter((user) => user.gender === "Male");
  const countFemales3 = Age39years.filter((user) => user.gender === "Female");

  const Age61years = users
    ? users.filter((user) => user.age >= 51 || user.age <= 61)
    : [];
  const countMales4 = Age39years.filter((user) => user.gender === "Male");
  const countFemales4 = Age39years.filter((user) => user.gender === "Female");

  const Age72years = users
    ? users.filter((user) => user.age >= 62 || user.age <= 72)
    : [];
  const countMales5 = Age72years.filter((user) => user.gender === "Male");
  const countFemales5 = Age72years.filter((user) => user.gender === "Female");

  const Age73years = users ? users.filter((user) => user.age >= 73) : [];
  const countMales6 = Age73years.filter((user) => user.gender === "Male");
  const countFemales6 = Age73years.filter((user) => user.gender === "Female");

  const filters = {
    active: (user) => user.isActive,
    inactive: (user) => !user.isActive,
    verified: (user) => user.emailVerified,
    notVerified: (user) => !user.emailVerified,
    kycVerified: (user) => user.kycVerified,
    notkycVerified: (user) => !user.kycVerified,
    phoneVerified: (user) => user.phoneVerified,
    notphoneVerified: (user) => !user.phoneVerified,
    bank_status: (user) => user.bank_status,
    notbank_status: (user) => !user.bank_status,
    tfaVerified: (user) => user.tfaVerified,
    nottfaVerified: (user) => !user.tfaVerified,
    passcodeStatus: (user) => user.passcodeStatus,
    notpasscodeStatus: (user) => !user.passcodeStatus,
    Age18years: (user) => user.age <= 18,
    countMales: (user) => user.age <= 18 && user.gender === "Male",
    countFemales: (user) => user.age <= 18 && user.gender === "Female",
    Age28years: (user) => user.age >= 18 || user.age <= 28,
    countMales1: (user) =>
      user.age >= 18 || (user.age <= 28 && user.gender === "Male"),
    countFemales1: (user) =>
      user.age >= 18 || (user.age <= 28 && user.gender === "Female"),

    Age39years: (user) => user.age >= 29 || user.age <= 39,
    countMales2: (user) =>
      user.age >= 29 || (user.age <= 39 && user.gender === "Male"),
    countFemales2: (user) =>
      user.age >= 29 || (user.age <= 39 && user.gender === "Female"),

    Age50years: (user) => user.age >= 40 || user.age <= 50,
    countMales3: (user) =>
      user.age >= 40 || (user.age <= 50 && user.gender === "Male"),
    countFemales3: (user) =>
      user.age >= 40 || (user.age <= 50 && user.gender === "Female"),

    Age61years: (user) => user.age >= 51 || user.age <= 61,
    countMales4: (user) =>
      user.age >= 51 || (user.age <= 61 && user.gender === "Male"),
    countFemales4: (user) =>
      user.age >= 51 || (user.age <= 61 && user.gender === "Female"),

    Age72years: (user) => user.age >= 62 || user.age <= 72,
    countMales5: (user) =>
      user.age >= 62 || (user.age <= 72 && user.gender === "Male"),
    countFemales5: (user) =>
      user.age >= 62 || (user.age <= 72 && user.gender === "Female"),

    Age73years: (user) => user.age >= 73,
    countMales6: (user) => user.age >= 73 && user.gender === "Male",
    countFemales6: (user) => user.age >= 73 && user.gender === "Female",
  };

  const createFilterClickHandler = (filterKey) => () => {
    const filteredData = users.filter(filters[filterKey]);
    if (dataTableRef.current) {
      dataTableRef.current.updateData(filteredData);
    }

    if (tableWrapperRef.current) {
      tableWrapperRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Resuable for UserList

  return (
    <>
      <div className="mx-auto container m-4 p-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-5">
          <div className="bg-blue-200 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Total Users
              <br />
              <span className="text-3xl font-bold">{totalUsers.length}</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Active Users"
                count={Active.length}
                onClick={createFilterClickHandler("active")}
              />
              <UserFilter
                label="Inactive Users"
                count={inActive.length}
                onClick={createFilterClickHandler("inactive")}
              />
            </div>
          </div>

          <div className="bg-slate-50 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Email Verification
              <br />
              <span className="text-3xl font-bold">{totalUsers.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Verified"
                count={verified.length}
                onClick={createFilterClickHandler("verified")}
              />
              <UserFilter
                label="Not-Verified"
                count={notVerified.length}
                onClick={createFilterClickHandler("notVerified")}
              />
            </div>
          </div>

          <div className="bg-blue-200 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              KYC Verification
              <br />
              <span className="text-3xl font-bold">{totalUsers.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Active Users"
                count={kycVerification.length}
                onClick={createFilterClickHandler("kycVerified")}
              />
              <UserFilter
                label="Inactive Users"
                count={NotkycVerification.length}
                onClick={createFilterClickHandler("notkycVerified")}
              />
            </div>
          </div>

          <div className="bg-slate-50 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Mobile Verification
              <br />
              <span className="text-3xl font-bold">{totalUsers.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Active Users"
                count={MobileVerification.length}
                onClick={createFilterClickHandler("phoneVerified")}
              />
              <UserFilter
                label="Inactive Users"
                count={NotMobileVerification.length}
                onClick={createFilterClickHandler("notphoneVerified")}
              />
            </div>
          </div>

          <div className="bg-blue-200 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Bank Verification
              <br />
              <span className="text-3xl font-bold">{totalUsers.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Active Users"
                count={BankVerification.length}
                onClick={createFilterClickHandler("bank_status")}
              />
              <UserFilter
                label="Inactive Users"
                count={NotBankVerification.length}
                onClick={createFilterClickHandler("notbank_status")}
              />
            </div>
          </div>

          <div className="bg-slate-50 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Total Users(TFA)
              <br />
              <span className="text-3xl font-bold">{totalUsers.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Enabled"
                count={tfaVerification.length}
                onClick={createFilterClickHandler("tfaVerified")}
              />
              <UserFilter
                label="Disabled"
                count={NottfaVerification.length}
                onClick={createFilterClickHandler("nottfaVerified")}
              />
            </div>
          </div>

          <div className="bg-blue-200 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Total Users(Fund Passcode)
              <br />
              <span className="text-3xl font-bold">{totalUsers.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Enabled"
                count={fundPasscode.length}
                onClick={createFilterClickHandler("passcodeStatus")}
              />
              <UserFilter
                label="Disabled"
                count={notfundPasscode.length}
                onClick={createFilterClickHandler("notpasscodeStatus")}
              />
            </div>
          </div>

          <div className="bg-slate-50 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Total Users(18Yrs Below)
              <br />
              <span className="text-3xl font-bold">{Age18years.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Male"
                count={countMales}
                onClick={createFilterClickHandler("countMales")}
              />
              <UserFilter
                label="Female"
                count={countFemales}
                onClick={createFilterClickHandler("countFemales")}
              />
            </div>
          </div>

          <div className="bg-blue-200 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Total Users(18Yrs-28Yrs)
              <br />
              <span className="text-3xl font-bold">{Age28years.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Male"
                count={countMales2.length}
                onClick={createFilterClickHandler("countMales2")}
              />
              <UserFilter
                label="Female"
                count={countFemales2.length}
                onClick={createFilterClickHandler("countFemales2")}
              />
            </div>
          </div>

          <div className="bg-slate-50 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Total Users (29Yrs-39Yrs)
              <br />
              <span className="text-3xl font-bold">{Age39years.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Male"
                count={countMales3.length}
                onClick={createFilterClickHandler("countMales3")}
              />
              <UserFilter
                label="Female"
                count={countFemales3.length}
                onClick={createFilterClickHandler("countFemales3")}
              />
            </div>
          </div>

          <div className="bg-blue-200 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Total Users (40Yrs-50Yrs)
              <br />
              <span className="text-3xl font-bold">{Age50years.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Male"
                count={countMales4.length}
                onClick={createFilterClickHandler("countMales4")}
              />
              <UserFilter
                label="Female"
                count={countFemales4.length}
                onClick={createFilterClickHandler("countFemales4")}
              />
            </div>
          </div>

          <div className="bg-slate-50 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Total Users (51Yrs-61Yrs)
              <br />
              <span className="text-3xl font-bold">{Age61years.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Male"
                count={countMales4.length}
                onClick={createFilterClickHandler("countMales4")}
              />
              <UserFilter
                label="Female"
                count={countFemales4.length}
                onClick={createFilterClickHandler("countFemales4")}
              />
            </div>
          </div>

          <div className="bg-blue-200 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Total Users (62Yrs-72Yrs)
              <br />
              <span className="text-3xl font-bold">{Age72years.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Male"
                count={countMales5.length}
                onClick={createFilterClickHandler("countMales5")}
              />
              <UserFilter
                label="Female"
                count={countFemales5.length}
                onClick={createFilterClickHandler("countFemales5")}
              />
            </div>
          </div>

          <div className="bg-slate-50 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Total Users (73Yrs Above)
              <br />
              <span className="text-3xl font-bold">{Age73years.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Male"
                count={countMales6.length}
                onClick={createFilterClickHandler("countMales6")}
              />
              <UserFilter
                label="Female"
                count={countFemales6.length}
                onClick={createFilterClickHandler("countFemales6")}
              />
            </div>
          </div>

          {/* <div className="bg-blue-200 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Total Users (Logged in Website)
              <br />
              <span className="text-3xl font-bold">{totalUsers.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Active"
                count={verified.length}
                onClick={createFilterClickHandler("active")}
              />
              <UserFilter
                label="Inactive"
                count={notVerified.length}
                onClick={createFilterClickHandler("inactive")}
              />
            </div>
          </div>

          <div className="bg-slate-50 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Total Users (Logged in Mobile)
              <br />
              <span className="text-3xl font-bold">{totalUsers.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Active"
                count={verified.length}
                onClick={createFilterClickHandler("active")}
              />
              <UserFilter
                label="Inactive"
                count={notVerified.length}
                onClick={createFilterClickHandler("inactive")}
              />
            </div>
          </div>

          <div className="bg-blue-200 p-6 flex flex-col rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Blocked Users
              <br />
              <span className="text-3xl font-bold">{totalUsers.length}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <UserFilter
                label="Male"
                count={verified.length}
                onClick={createFilterClickHandler("active")}
              />
              <UserFilter
                label="Female"
                count={notVerified.length}
                onClick={createFilterClickHandler("inactive")}
              />
            </div> 
          </div>*/}
        </div>
      </div>

      <Chart graph={graph1} />
      <div ref={tableWrapperRef}>
        <DataTable ref={dataTableRef} initialData={users} />
      </div>
    </>
  );
}

export default Dashboard;
