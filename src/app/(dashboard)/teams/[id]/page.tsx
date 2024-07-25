import { getTeam } from "../action";

const Team = async (props: { params: { id: string } }) => {
  const {
    params: { id },
  } = props;
  const teams = await getTeam(id);

  return (
    <div>
      <pre>{JSON.stringify(teams, null, 2)}</pre>
    </div>
  );
};

export default Team;
