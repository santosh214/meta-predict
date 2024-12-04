import  { useState } from "react";

import {  Spinner, Alert, Button } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useConnectWallet, useSetChain } from "@web3-onboard/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logo } from "../../assets/images";
import Navbar from "../../components/LandingPage/Navbar";
import './login.css'

const Login = () => {
  const navigate = useNavigate();
  const [
{},
    setChain, // function to call to initiate user to switch chains in their wallet
  ] = useSetChain();

  const [{ wallet }, connect] = useConnectWallet();

  const [loading, setLoading] = useState(false);
  // const [passState, setPassState] = useState(false);
  const [errorVal, setError] = useState("");

  const handleConnect = async () => {
    try {
      let conn = await connect();
      if (conn) {
        // console.log("wallet?.chains[0].id", conn[0].chains[0].id);
        if (conn[0]?.chains[0]?.id !== "0x460") {
          // console.log("window",window)
          
          toast.error("Wrong Network! please switch network to Ozone 2.0");
          setChain({ chainId: "0x460" });
        } else {
          toast.success("Connected");
          // toast.success("right network connected")
        }
        // console.log("waaa");
      }
    } catch (error) {
      toast.error("Couldn't connect");
    }
  };
  const onFormSubmit = async () => {
    navigate('/game')
      setLoading(true);
        setError("Cannot login with credentials");
   };

  const {
    // register,
    // handleSubmit,
    // formState: { errors },
  } = useForm();

  return (
    <>
    <Navbar/>
      {/* <Head title="Login" /> */}
      <div className="nk-block-middle nk-auth-body  wide-xs pt-5">
        <div className="brand-logo text-center">
          <Link to={"/"} className="logo-link">
            <img className="logo-light logo-img logo-img-lg img-fluid w-25" src={logo} alt="logo" />
            {/* <img className="meta-logo-dark logo-img logo-img-lg" src={LogoDark} alt="meta-logo-dark" /> */}
          </Link>
        </div>

        <div className=" container">
          <div className="row d-flex justify-content-center ">
            <div className="col-10 col-md-5 card p-3 shadow text-center myLoginCard">
              <h4 className="">Sign-In</h4>
              <div>
                <p>Access Meta Predict using wallet.</p>
              </div>
         
          {errorVal && (
            <div className="mb-3">
              <Alert div tag="h4"color="danger" className="alert-icon">
                 Unable to login Register first{" "}
              </Alert>
            </div>
          )}

          <div className="form-group">
            {wallet?.accounts[0].address && wallet?.chains[0].id === "0x460" ? (
              <Button onClick={() => onFormSubmit()} size="lg" className="btn-block myButton"  type="submit" color="primary">
                {loading ? <Spinner size="sm" color="light" /> : "Login"}
              </Button>
            ) : (
              <Button onClick={() => handleConnect()} size="lg" className="btn-block myButton" type="submit" color="primary">
                {loading ? <Spinner size="sm" color="light" /> : "Connect Wallet"}
              </Button>
            )}
          </div>
          {/* </Form> */}
          <div className="form-note-s2 text-center pt-4">
            New on our platform? <Link to={`/register`} className="registerText">Register</Link>
          </div>
          </div>
          </div>

        </div>
      </div>
    </>
  );
};
export default Login;
