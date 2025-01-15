import { useConnectWallet } from "@web3-onboard/react";
import axios from "axios";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Navbar from "../LandingPage/Navbar";
import { useNavigate } from "react-router-dom";


export default function AffiliateIncomeHistory() {
  const [{ wallet }] = useConnectWallet();
  const navigate = useNavigate();

  // State to store the bet history
  const [betHistory, setBetHistory] = useState([
    
  ]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1); // Current page number
  const [itemsPerPage] = useState(10); // Number of items per page

  // Fetch the betting history on component mount
  useEffect(() => {
    if (wallet) {
      fetchBetHistory(wallet);
    }
    else {
      navigate('/login')
    }
  }, [wallet]);

  const fetchBetHistory = async (wallet) => {
    try {
        // https://socket.metapredict.io/api/refferalsReward/:address
      // Make the API call using Axios
      axios
        .get(
          `${import.meta.env.VITE_API_URL}refferalsReward/${ethers.utils.getAddress(
            wallet?.accounts[0].address
          )}`
        )
        .then((res) => {
          setBetHistory(res.data.rewards);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section>
      <Navbar/>
    <div className="container-fluid pt-5">
      <h1 className="py-3">Affiliate Income History</h1>
      {betHistory.length === 0 ? (
        <h5 className="text-center border border-2 py-2">No betting history available</h5>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                {/* <th scope="col">Amount (BTC)</th> */}
                <th scope="col">Affiliate From</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {currentBets.map((bet, index) => (
                <tr key={index}>
                  <td>{new Date(bet.timestamp).toLocaleString()}</td>
                  {/* <td>{bet.referrerAddress} BTC</td> */}
                  <td>{bet.winnerAddress }</td>
                  <td>{ethers.utils.formatEther(bet?.rewardAmount?.toString())?.toString()}</td>
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
                className={`page-item ${
                  page === Math.ceil(betHistory.length / itemsPerPage) ? "disabled" : ""
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
