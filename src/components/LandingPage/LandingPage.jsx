import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";
import "./home.css";
import bitcoinMetaPredict from "../../assets/home/bitcoin.jpeg";
import why from "../../assets/home/why.jpeg";
import How from "../../assets/home/how.png";
import Community from "../../assets/home/community.png";
import Footer from "../../pages/component/Footer/Footer";
export default function LandingPage() {
  return (
    <section className="pb-5">
      <Navbar />
      <div className="container-fluid ">
        <div className="row">
          <div className="col headingTextContainer">
            <pre
              className="title display-one d-flex justify-content-center metaPredict"
              data-aos="zoom-in"
            >
              Welcome to{""} {""}
              <Typewriter
                options={{
                  strings: [" Meta Predict"],
                  autoStart: true,
                  loop: true,
                }}
              />
              {/* Welcome to <span class="theme-gradient"> Meta Ozone</span>{" "} */}
            </pre>
            <h1 className="text-center">
              The Ultimate Bitcoin Price Prediction Game!
            </h1>
            <h3 className="text-center py-3 infoText px-0 mx-0 px-md-5 mx-md-5">
              Predict, Play, and Win in Real-Time! Experience the thrill of
              predicting Bitcoin price changes with Metapredict, a fully
              decentralized game built on the Ozone Coin network. This unique
              game lets you place bids on real-time price movements and win
              rewards if you predict correctly. With instant payouts,
              transparent gameplay, and the potential for high rewards,
              Metapredict is your gateway to the exciting world of crypto
              predictions.
            </h3>
          </div>
        </div>
      </div>
      <div className="myborder"></div>
      <div className="container-fluid py-0 py-md-5 mt-0 mt-md-5">
        <div className="row pt-5">
          <div className="col-12 col-md-6 d-flex justify-content-center " data-aos='fade-in'>
            <img src={why} alt="bitcoin" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 whyChooseContainer" data-aos='fade-in' data-aos-duration='2000'>
            <h1 className="py-2">Why Choose Metapredict?</h1>
            <ol>
              <li>
                <span>Fully Decentralized and Transparent</span>
                <p>
                  Built on blockchain, Metapredict ensures fair play with a
                  transparent record of every bid and result. The decentralized
                  setup removes intermediaries, so you're in control of your
                  predictions and winnings.
                </p>
              </li>
              <li>
                <span>Instant Payouts</span>
                <p>
                  All winners are paid out instantly, with no waiting periods.
                  You'll receive your rewards in Ozone Coin immediately after
                  the round ends, allowing for quick access to your earnings.
                </p>
              </li>
              <li>
                <span>Real-Time Bitcoin Price Data</span>
                <p>
                  We use real-time Bitcoin price data, so your predictions are
                  based on the latest market conditions. This allows you to test
                  your market instincts with confidence.
                </p>
              </li>
              <li>
                <span>Earn Referral Bonuses</span>
                <p>
                  Invite friends to Metapredict, and earn a 10% referral bonus
                  on any winnings they make! It's a great way to boost your
                  income while sharing the fun.
                </p>
              </li>
              <li>
                <span>Minimal Entry Requirements</span>
                <p>
                  Whether you're a seasoned trader or new to crypto,
                  Metapredict's easy-to-use platform welcomes all players. No
                  extensive background needed—just a crypto wallet, some Ozone
                  Coins, and a prediction.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="myborder"></div>

      {/* how meta predict works */}
      <div className="container-fluid py-0 py-md-5 mt-0 mt-md-5">
        <div className="row pt-5">
          <div className="col-12 col-md-6 whyChooseContainer px-md-5 d-grid align-items-center" data-aos='fade-in'>
            <h1 className="py-2">How Metapredict Works ?</h1>
            <ol>
              <li>
                <span>Make Your Prediction</span>
                <p>
                  Decide if you believe the Bitcoin price will rise or fall over the next minute.
                  Simply select UP if you think the price will increase, or DOWN if you expect it to drop.
                </p>
              </li>
              <li>
                <span>Place Your Bid Using Ozone Coin</span>
                <p>
                  Enter the amount of Ozone Coin you wish to bid. This bid secures your place in the round and adds to the potential prize pool.

                </p>
              </li>
              <li>
                <span>Wait for Opponents:                </span>
                <p>
                  For a round to proceed, there must be at least one UP and one DOWN prediction from different players. Once both sides are covered, the game clock begins a one-minute countdown.</p>
              </li>
              <li>
                <span>Result Announcement:
                </span>
                <p>
                  After one minute, the game compares the Bitcoin price against predictions. If you guessed correctly, you win! Winners receive a portion of the prize pool, distributed instantly to their wallet.</p>
              </li>
              <li>
                <span>Reward Distribution</span>
                <p>
                  80% of the Total Pool goes to the winning side, divided among correct bidders. 10% goes to the Referrer (direct sponsor's upline) if the winner joined via referral. 10% Admin Fee is allocated for platform maintenance, ensuring smooth gameplay and ongoing improvements.
                </p>
              </li>
            </ol>
          </div>
          {/* <div className="col-12 col-md-6 d-flex justify-content-center ">
            <img src={How} alt="bitcoin" className="img-fluid" />
          </div> */}
          <div className="col-12 col-md-6 d-flex justify-content-center  align-items-center" data-aos='fade-in'>
            <img src={How} alt="bitcoin" className="img-fluid w-75 " />
          </div>

        </div>
      </div>
      <div className="myborder"></div>


      {/* how to get started */}
      <section className="howToGetStarted pb-5">
        <div className="container mt-5 text-light" data-aos='fade-in'>
          <h2 className="text-center mb-4">How to Get Started</h2>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item  ">
              <strong>Sign Up and Connect Your Wallet:</strong>
              <p className="mt-2">Connect your crypto wallet to start playing instantly. Metapredict is fully decentralized, so your privacy is secure.</p>
            </li>
            <li className="list-group-item  mt-3">
              <strong>Get Ozone Coin:</strong>
              <p className="mt-2">If you don't already have Ozone Coin, visit our supported exchanges or partners to get some. Ozone Coin powers all Metapredict transactions.</p>
            </li>
            <li className="list-group-item  mt-3">
              <strong>Start Predicting:</strong>
              <p className="mt-2">Choose your prediction, place your bid, and see if you can outsmart the market!</p>
            </li>
          </ol>
        </div>


      </section>

      {/* community */}
      <div className="myborder"></div>


      <div className="container-fluid px-md-5  pt-2 text-light community">
        <div className="row">
          <div className="col-12 col-md-6 pt-5 d-grid align-items-center" data-aos='fade-in'>
            <div>

            
            <h1 className=" mb-2 ">Metapredict Community </h1> <h4>Join the Future of Prediction Gaming</h4>
            <p className="lead py-3">
              Metapredict is more than just a game; it's a community of crypto enthusiasts who love the thrill of Bitcoin price action. With real-time predictions, shared knowledge, and referral rewards, we're building a vibrant ecosystem for players around the world.
            </p>
            <p className="py-3">
              Join our community to stay updated on new features, engage in discussions, and compete for the top spot in Metapredict's leaderboard!
            </p>
            <h4 className=" mt-4">Sign Up Today and Start Predicting with Metapredict!</h4>
            </div>

          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center  align-items-center" data-aos='fade-in'>
            <img src={Community} alt="bitcoin" className="img-fluid " />
          </div>
        </div>

      </div>
      <div className="myborder mb-5"></div>
      <Footer/>

    </section>
  );
}
