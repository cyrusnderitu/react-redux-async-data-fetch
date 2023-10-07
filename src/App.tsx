import { fetchData } from "./hooks/useFetcher";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState, AppDispatch } from "./Feature/postSlice/store";

const App = () => {
  const { data, loading } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading === true) {
    return <div>Loading...</div>;
  }

  console.log(data);
  return <div></div>;
};

export default App;
