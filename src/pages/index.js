import WinnerTable from "../components/winnertable/WinnerTable";
import Affiliates from "../components/affiliates/Affiliates";
import EarningReport from "../components/EarnReport/EarningReport";
import AffiliatesDashboard from "../components/affiliatsdashboard/AffiliatesDashboard";
import WeeklyJackpot from "../components/jackpot/weekly/WeeklyJackpot";
import MonthlyJackpot from "../components/jackpot/monthly/MonthlyJackpot";
import HistoryWinner from "../components/jackpot/winner/HistoryWinner";
import AffiliateLeaderboard from "../components/affiliateleaderboard/AffiliateLeaderboard";
import Faq from "../components/faq/Faq";
import PrivacyPolicy from "../components/info/PrivacyPolicy";
import Contact from "../components/info/Contact";
import IncomeHistory from "../components/userprofile/BetHistory";
import AffiliateIncomeHistory from "../components/userprofile/AffiliateIncomeHistory";
import LandingPage from "../components/LandingPage/LandingPage";
import Login from "./Login/Login";
import Register from "./Register/Register";


const routes = [
    { path: '/winnertable', component: WinnerTable},
    { path: '/affiliate', component: AffiliateIncomeHistory},
    { path: '/earningreport', component: EarningReport},
    { path: '/affiliatesdash', component: AffiliatesDashboard},
    { path: '/weeklyjackpot', component: WeeklyJackpot},
    { path: '/monthlyjackpot', component: MonthlyJackpot},
    { path: '/historywinner', component: HistoryWinner},
    { path: '/affiliateleaderboard', component: AffiliateLeaderboard},
    { path: '/faq', component: Faq},
    { path: '/privacypolicy', component: PrivacyPolicy},
    { path: '/contact', component: Contact},
    { path: '/user-profile', component: IncomeHistory},
    { path: '/', component: LandingPage},
    { path: '/login', component: Login},
    { path: '/register', component: Register},
  
  ]
  
  export default routes;