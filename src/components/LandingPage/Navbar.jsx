import { useConnectWallet, useSetChain } from "@web3-onboard/react";
import "./navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { logo } from '../../assets/images'
import { shortddres } from "../../utils/utils";
function Navbar() {
  const [{ wallet }, connect] = useConnectWallet();
  const [address, setAddress] = useState(wallet?.accounts[0]?.address || "");
  const [{}, setChain] = useSetChain();

  const handleConnect = async () => {
    try {
      let conn = await connect();
      if (conn) {
        // console.log("wallet?.chains[0].id", conn[0].chains[0].id);
        if (conn[0]?.chains[0]?.id !== "0x460") {
          // console.log("window", window);

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

  useEffect(() => {
    if (wallet) {
      setAddress(wallet.accounts[0].address || "");
    }
  }, [wallet]);
  return (
    <div className="container-fluid  mb-1">
      <div className="row">
        <div className="col pt-3">
          <nav className="navbar navbar-expand-lg  " data-bs-theme="dark">
            <div className="container-fluid ">
              <Link className="navbar-brand mb-0 p-0" href="/">
                <img src={logo} width={120} height={60} alt="meta-icon" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                  {/* <li className="nav-item me-2">
                                        <Link to={'/'} className="nav-link active " aria-current="page" type='button' >
                                        Home
                                        </Link>
                                    </li> */}
                  {!address ? (
                    <>
                    <li className="nav-item me-2">
                        <Link
                          to="/"
                          className="nav-link active "
                          aria-current="page"
                          type="button"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item me-2">
                        <Link
                          to={"/login"}
                          className="nav-link active "
                          aria-current="page"
                          type="button"
                        >
                          Sign In
                        </Link>
                      </li>
                      <li className="nav-item me-2">
                        <Link
                          to="/register"
                          className="nav-link active "
                          aria-current="page"
                          type="button"
                        >
                          Register
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                     <li className="nav-item me-2">
                        <Link
                          to="/"
                          className="nav-link active "
                          aria-current="page"
                          type="button"
                        >
                          Home
                        </Link>
                      </li>
                      
                      <li className="nav-item me-2">
                        <Link
                          to="/game"
                          className="nav-link active "
                          aria-current="page"
                          type="button"
                        >
                          Game
                        </Link>
                      </li>
                      {/* <li className="nav-item me-2">
                        <Link
                          to="/user-profile"
                          className="nav-link active "
                          aria-current="page"
                          type="button"
                        >
                          Profile
                        </Link>
                      </li> */}
                    </>
                  )}

                  <li className="nav-item">
                    <a
                      className="nav-link active wallet"
                      aria-current="page"
                      type="button"
                      onClick={() => handleConnect()}
                    >
                      {wallet?.accounts[0]?.address
                        ? shortddres(address)
                        : "Connect wallet"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
