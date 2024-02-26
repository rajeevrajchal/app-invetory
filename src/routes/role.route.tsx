import NotFound from "@components/errors/not-found";
import useAuth from "@hook/store/use-auth";
import { $FIX_ME } from "@types/fix-me";
import { PropsWithChildren } from "react";

interface RoleRouteProps extends PropsWithChildren {
  allowed_role: $FIX_ME | "*";
}
const RoleRoute = (props: RoleRouteProps) => {
  const { allowed_role, children } = props;

  const { loginUser } = useAuth();

  const isAllowed = () => {
    if (allowed_role === "*") {
      return true;
    }
    if (allowed_role.includes(loginUser?.role?.toLowerCase() as $FIX_ME)) {
      return true;
    } else {
      return false;
    }
  };

  return isAllowed() ? children : <NotFound />;
};

export default RoleRoute;
