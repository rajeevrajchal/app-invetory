import TeamLists from "./_components/list";
import { getTeams } from "./action";

const Teams = async () => {
  const teams = await getTeams();
  return <TeamLists teams={teams || []} />;
};

export default Teams;
