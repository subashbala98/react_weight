import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [navigate, setNavigate] = useState(window.location.pathname);
  useEffect(() => {
    const updatestate = () => {
      setNavigate(window.location.pathname);
    };
    window.addEventListener("popstate", updatestate);
    return () => {
      window.removeEventListener("popstate", useEffect);
    };
  }, []);
  return navigate === path ? children : null;
};

export default Route;
