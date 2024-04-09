import { getVendor } from "../action";

const Vendor = async (props: { params: { id: string } }) => {
  const {
    params: { id },
  } = props;
  const vendors = await getVendor(id);

  return (
    <div>
      <pre>{JSON.stringify(vendors, null, 2)}</pre>
    </div>
  );
};

export default Vendor;
