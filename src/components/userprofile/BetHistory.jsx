import { useConnectWallet } from "@web3-onboard/react";
import axios from "axios";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from "../LandingPage/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { convertTotalAmount, shortddres } from "../../utils/utils";
import { checkRegisterUser } from "../contract/contractMethod";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

export default function IncomeHistory() {

  const navigate = useNavigate();

  const [{ wallet }, connect] = useConnectWallet();
  const [userLoader, setUserLoader] = useState(false)

  // State for random image and user data (investments and affiliate earnings)
  const [userDetails, setUserDetails] = useState({
    avatarUrl: '',
    parentAddress: '',
    randomName: '',
    userAddress: '',
    totalWinning: 0
  })
  // console.log("🚀 ~ IncomeHistory ~ userDetails:", userDetails)
  // State to store the bet history
  const [betHistory, setBetHistory] = useState([

  ]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1); // Current page number
  const [itemsPerPage] = useState(10); // Number of items per page

  const getUserDetails = (wallet) => {
    try {
      setUserLoader(true)
      axios.get(`${import.meta.env.VITE_API_URL}users/${ethers.utils.getAddress(wallet?.accounts[0].address)}`).then((res) => {
        // console.log("🚀 ~ axios.get ~ res:", res)
        setUserDetails({ ...res.data.user })
        setUserLoader(false)

      })
    } catch (error) {
      setUserLoader(false)
      toast.error("User not found")
      console.log("🚀 ~ getUserDetails ~ error:", error)
    }
  }

  const handleRegisterUser = async (wallet) => {
    let _register = await checkRegisterUser(wallet)
    if (!_register) {
      navigate('/login')
      toast.error("Please register first")
    } else {
      getUserDetails(wallet)
    }
  }

  useEffect(() => {
    if (wallet) {
      handleRegisterUser(wallet)
    }
    else {
      navigate('/login')
    }

  }, [wallet]);



  // Fetch the betting history on component mount
  useEffect(() => {
    if (wallet) {
      fetchBetHistory(wallet);
    }
  }, [wallet]);

  const fetchBetHistory = async (wallet) => {
    try {
      // Make the API call using Axios
      axios
        .get(
          `${import.meta.env.VITE_API_URL}userinfo/${ethers.utils.getAddress(
            wallet?.accounts[0].address
          )}`
        )
        .then((res) => {
          setBetHistory(res?.data?.reverse());
          // console.log("🚀 ~ axios.get ~ res:", res);
        });
    } catch (err) {
      console.log("🚀 ~ fetchBetHistory ~ err:", err);
      setError("Failed to fetch betting history");
      setLoading(false);
      setBetHistory([])
    }
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Pagination logic
  const indexOfLastBet = page * itemsPerPage;
  const indexOfFirstBet = indexOfLastBet - itemsPerPage;
  const currentBets = betHistory.slice(indexOfFirstBet, indexOfLastBet);
  // console.log("🚀 ~ IncomeHistory ~ betHistory:", betHistory)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  const handleRefer = () => {
    // console.log("rfer",window.location.origin)
    const url = `${window.location.origin}/register?address=${wallet?.accounts[0].address}`
    navigator.clipboard.writeText(url)
    toast.success("Copied")
  }
  return (
    <section>
      <Navbar />
      <div className="container-fluid  ">
        <div className="row g-4">
          {/* Profile Card */}
          <div className="col-md-4 d-flex align-items-stretch">
            <div className="card shadow-lg border-0 w-100" style={{ minHeight: '300px' }}>
              <div className="card-body text-center">
                {userLoader ?
                 <Loader/>:
                  <img
                    src={userDetails.avatarUrl ?? `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`}
                    alt="Profile"
                    className="img-fluid rounded-circle shadow"
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                    onLoad={() => setUserLoader(false)} // Hide loader when image loads
                    onError={() => {
                      setUserLoader(false);
                      console.log("Error loading image");
                    }} // Handle image load error
                  />
                }

                <h5 className="mt-3 text-primary">{userDetails.randomName || "Guest User"}</h5>
                <div className="mt-4">
                  <p className="mb-2">
                    <i className="bi bi-wallet2 me-2 text-success"></i>
                    <span title={wallet?.accounts[0].address}>
                      {wallet ? shortddres(wallet.accounts[0].address) : "Not Connected"}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-people-fill me-2 text-info"></i>
                    <span title={userDetails.parentAddress}>
                      {userDetails.parentAddress ? shortddres(userDetails.parentAddress) : "N/A"}
                    </span>
                  </p>
                  {wallet && (
                    <button
                      className="btn btn-outline-primary mt-3"
                      onClick={handleRefer}
                      style={{ borderRadius: '20px' }}
                    >
                      Copy Referral Link <i className="bi bi-clipboard ms-2"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Total Winning Card */}
          <div className="col-md-4 d-flex align-items-stretch">
            <div
              className="card text-white text-center shadow-lg border-0 w-100"
              style={{
                // background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
                minHeight: '300px',
              }}
            >
              <div className="card-body d-flex flex-column justify-content-center">
                <h2 className="fw-bold">Total Winnings</h2>
                <h1 className="mt-3">
                  <i className="bi bi-trophy-fill me-2"></i>
                  {convertTotalAmount(userDetails.totalWinning) || 0}
                </h1>
              </div>
            </div>
          </div>

          {/* Affiliate Earnings Card */}
          <div className="col-md-4 d-flex align-items-stretch">
            <Link to="/affiliate" className="text-decoration-none w-100">
              <div
                className="card text-white text-center shadow-lg border-0 w-100"
                style={{
                  // background: 'linear-gradient(135deg, #89f7fe, #66a6ff)',
                  minHeight: '400px',
                }}
              >
                <div className="card-body d-flex flex-column justify-content-center">
                  <h2 className="fw-bold">Affiliate Earnings</h2>
                  <p className="mt-3">Check your total earnings</p>
                  <div>
                    <button className="btn btn-light btn  text-primary fw-bold mt-2">
                      View Details <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>


      </div>
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="py-3 text-center text-primary fw-bold">
              <i className="bi bi-graph-up-arrow me-2"></i>
              Income History (OZONE Bets)
            </h1>
          </div>
        </div>

        {betHistory.length === 0 ? (
          <div className="row">
            <div className="col-12">
              <div className="alert alert-info text-center shadow-sm" role="alert">
                <i className="bi bi-info-circle me-2"></i> No betting history available!
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            {/* Income Table */}
            <div className="col-12">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <table className="table table-hover table-striped align-middle">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Amount (OZO)</th>
                        <th scope="col">Direction</th>
                        <th scope="col">Status</th>
                        <th scope="col">Winnings Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentBets.map((bet, index) => (
                        <tr key={index}>
                          <td>{new Date(bet.timestamp).toLocaleString()}</td>
                          <td>
                            <span className="badge bg-success">
                              {ethers.utils.formatEther(bet?.amount?.toString())?.toString()} OZO
                            </span>
                          </td>
                          <td>
                            <span
                              className={`badge ${bet.prediction === "Up"
                                ? "bg-primary"
                                : "bg-danger"
                                }`}
                            >
                              {bet.prediction}
                            </span>
                          </td>
                          <td>
                            <span
                              className={`badge ${bet.status === "Win"
                                ? "bg-success"
                                : bet.status === "Loss"
                                  ? "bg-danger"
                                  : "bg-secondary"
                                }`}
                            >
                              {bet.status}
                            </span>
                          </td>
                          <td>{bet?.winningsAmount?.toString()} OZO</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-12 mt-4">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li
                    className={`page-item ${page === 1 ? "disabled" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(page - 1)}
                    >
                      <i className="bi bi-chevron-left"></i> Previous
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">{page}</button>
                  </li>
                  <li
                    className={`page-item ${page === Math.ceil(betHistory.length / itemsPerPage)
                      ? "disabled"
                      : ""
                      }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(page + 1)}
                    >
                      Next <i className="bi bi-chevron-right"></i>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>

    </section>
  );
}
