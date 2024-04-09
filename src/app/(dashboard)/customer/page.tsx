import CustomerLists from "./_components/list";
import { getCustomers } from "./action";

const Customers = async () => {
  const customers = await getCustomers();
  return <CustomerLists customers={customers || []} />;
};

export default Customers;
