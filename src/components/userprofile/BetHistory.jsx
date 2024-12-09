import { useConnectWallet } from "@web3-onboard/react";
import axios from "axios";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from "../LandingPage/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { shortddres } from "../../utils/utils";
import { checkRegisterUser } from "../contract/contractMethod";

export default function IncomeHistory() {

  const navigate = useNavigate();

  const [{ wallet }, connect] = useConnectWallet();
  
  // State for random image and user data (investments and affiliate earnings)
  const [userDetails,setUserDetails]=useState({
    avatarUrl:'',
    parentAddress:'',
    randomName:'',
    userAddress:''
  })
  // State to store the bet history
  const [betHistory, setBetHistory] = useState([

  ]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1); // Current page number
  const [itemsPerPage] = useState(10); // Number of items per page

  const getUserDetails=(wallet)=>{
    try {
        console.log("import.meta.env.VITE_SOME_KEY",import.meta.env.VITE_API_URL)
        axios.get(`${import.meta.env.VITE_API_URL}users/${ethers.utils.getAddress(wallet?.accounts[0].address)}`).then((res) => {
          console.log("🚀 ~ axios.get ~ res:", res)
          setUserDetails({...res.data.users})
        })
    } catch (error) {
      toast.error("User not found")
      console.log("🚀 ~ getUserDetails ~ error:", error)
      
    }
  }

  const handleRegisterUser=async(wallet)=>{
    let _register= await checkRegisterUser(wallet)
    if(!_register){
      navigate('/login')
      toast.error("Please register first")
    }else{
      getUserDetails(wallet)
    }
  }

  useEffect(() => {
    if (wallet) {
      handleRegisterUser(wallet)
    }
    else{
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

  return (
    <section>
      <Navbar />
      <div className="container-fluid mt-5 ">
      <div className="row">
        {/* First Card: User Profile */}
        <div className="col-md-3">
          <div className="card " style={{ minHeight: '550px' }}>
            <div className="card-body text-center">
              <h5 className="card-title text-center">{userDetails?.randomName}</h5>

              {wallet ? (
                  <>
              <div className="text-center">
                  {/* Profile Image */}
                  <img 
                    src={userDetails.avatarUrl ??`https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`} 
                    alt="Random Profile" 
                    className="img-fluid rounded-circle" 
                    style={{ width: '150px', height: '150px' }}
                    />
                    </div>

                  <h6 className="py-3 ">Wallet Address:  <span title={userDetails?.userAddress}> {shortddres (wallet.accounts[0].address)}</span></h6>
                  <h6 className="py-2 ">Parent Address:  <span title={userDetails?.parentAddress}>{shortddres(userDetails?.parentAddress)}</span></h6>
                </>
              ) : (
                <button className="btn btn-primary" onClick={() => connect()}>
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Second Card: Investment Details */}
        <div className="col-md-3">
          <div className="card" style={{ minHeight: '200px' }}>
            <div className="card-body ">
              <h2 className="card-title fw-bold">Investment</h2>
              {wallet ? (
                <>
                  <h5 className="py-2">Total Invested</h5>
                  {/* <h5 className="pt-4">${'00.00'}</h5> */}
                </>
              ) : (
                <h6>Connect your wallet to view investment details.</h6>
              )}
            </div>
          </div>
        </div>

        {/* Third Card: Affiliate Earnings */}
        <div className="col-md-4">
          <div className="card" style={{ minHeight: '200px' }}>
              <Link to={"/affiliate"}>
                <div className="card-body ">
                <h2 className="card-title fw-bold">Affiliate Earnings</h2>
                {wallet ? (
                  <>
                    <h5 className="py-2">Total Earnings</h5>
                    {/* <h5 className="pt-4">${'00.00'}</h5> */}
                  </>
                ) : (
                  <h6>Connect your wallet to view affiliate earnings.</h6>
                )}
              </div>
              </Link>
          </div>
        </div>
      </div>
    </div>
      <div className="container-fluid pt-5">
        <h1 className="py-3">Income History (BTC Bets)</h1>
        {betHistory.length === 0 ? (
          <h5 className="text-center border border-2 py-2">No betting history available</h5>
        ) : (
          <>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Amount (BTC)</th>
                  <th scope="col">Direction</th>
                  <th scope="col">Status</th>
                  <th scope="col">Winnings Amount</th>
                </tr>
              </thead>
              <tbody>
                {currentBets.map((bet, index) => (
                  <tr key={index}>
                    <td>{new Date(bet.timestamp).toLocaleString()}</td>
                    <td>{ethers.utils.formatEther(bet?.amount?.toString())?.toString()} BTC</td>
                    <td>{bet.prediction}</td>
                    <td>{bet.status}</td>
                    <td>{ethers.utils.formatEther(bet?.winningsAmount?.toString())?.toString()} BTC</td>

                    </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(page - 1)}
                  >
                    Previous
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link">{page}</button>
                </li>
                <li
                  className={`page-item ${page === Math.ceil(betHistory.length / itemsPerPage) ? "disabled" : ""
                    }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(page + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </section>
  );
}
