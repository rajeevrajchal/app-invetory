"use client";

import useSystem from "../_hooks/use-system";

const SystemDetail = () => {
  const { system, loading } = useSystem();

  if (loading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  return <pre>{JSON.stringify(system, null, 2)}</pre>;
};

export default SystemDetail;
