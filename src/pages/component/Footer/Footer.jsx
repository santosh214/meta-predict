import React, { useEffect, useState } from 'react'
import { logo } from '../../../assets/images'
import { Link } from 'react-router-dom'
import { useConnectWallet, useSetChain } from '@web3-onboard/react';
import { shortddres } from '../../../utils/utils';

export default function Footer() {

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
        <div className="container-fluid px-5">
            <div className="row">
                <div className="col">
                    <footer className=''>
                        <div className="row">
                            <div className="col-12 col-md-10">

                                <Link className="navbar-brand mb-0 p-0" href="/">
                                    <img src={logo} width={120} height={60} alt="meta-icon" />
                                </Link>
                            </div>
                            <div className="col-12 col-md-2 d-flex justify-content-between">

                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                                        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex ">
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
                      className="nav-link "
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
                        <p className='text-center' >&#169; 2025 Metapredict, All Rights Reserved.

                        </p>
                    </footer>
                </div>
            </div>
        </div>
    )
}
