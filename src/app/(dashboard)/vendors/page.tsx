import VendorList from "./_components/list";
import { getVendors } from "./action";

const Vendors = async () => {
  const vendors = await getVendors();
  return <VendorList vendors={vendors || []} />;
};

export default Vendors;
