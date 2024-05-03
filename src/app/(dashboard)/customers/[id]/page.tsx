import { getCustomer } from "../action";

const Customer = async (props: { params: { id: string } }) => {
  const {
    params: { id },
  } = props;
  const customers = await getCustomer(id);

  return (
    <div>
      <pre>{JSON.stringify(customers, null, 2)}</pre>
    </div>
  );
};

export default Customer;
