import React from "react";
import Sidebar from "../../components/Sidebar";

const Index = () => {
  // const [token, setToken] = useState(null);
  // useEffect(() => {
  //   getToken();
  // }, []);

  // function getToken() {
  //   let Token = localStorage.getItem("userToken");
  //   setToken(Token);
  // }

  // function getHomePgae() {
  //   return <div>HomePgae</div>;
  // }

  // if (token) {
  //   return getHomePgae();
  // } else {
  //   return <Navigate to="/login" replace={true} />;
  // }
  // // return(
  // //   {
  // //     token ?:  getHomePgae() :  <Navigate to="/login" replace={true} />;
  // //   }
  // // )
  return (
    <>
      <Sidebar />
    </>
  );
};

export default Index;
