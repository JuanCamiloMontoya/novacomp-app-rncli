import { useEffect } from "react";
import { useSelector } from "react-redux";
import { usersActions } from "../../services/users/slice";
import { RootState, useAppDispatch } from "../../store/store";

export const useUsers = () => {
  const dispatch = useAppDispatch();

  const { getUsers } = usersActions;

  const { users, isLoading, error } = useSelector(
    (state: RootState) => state.users,
  );

  useEffect(() => {
    !users.length && getUserList();
  }, []);

  const getUserList = () => {
    dispatch(getUsers({}));
  };

  return {
    users,
    isLoading,
    error,
    getUserList,
  };
};
