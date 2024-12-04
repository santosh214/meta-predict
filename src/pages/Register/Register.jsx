import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner, Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useConnectWallet } from "@web3-onboard/react";
import { toast } from "react-toastify";
import { ethers } from "ethers";
import { affiliate } from "../../components/contract/affiliate";
import { logo } from "../../assets/images";
import Navbar from "../../components/LandingPage/Navbar";
import './register.css'


const Register = () => {
    const [{ wallet }, connect] = useConnectWallet();
    const [loading, setLoading] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);

    const {
        register,
        handleSubmit,
        getValues,
        setValue,
    } = useForm({
        defaultValues: {
            walletAddress: wallet?.accounts[0]?.address || "",
            address: "", // Include 'address' in default values
            referredAddress:''
        },
    });

    const navigate = useNavigate();

    const handleRegister = async () => {

        if (wallet) {
            // const addr = getValues("walletAddress");
            // console.log("🚀 ~ handleRegister ~ addr:", addr)
            const referrerAddr = getValues("referredAddress");
            // console.log("🚀 ~ handleRegister ~ referrerAddr:", referrerAddr)
            
            // navigate('/')
            if (!referrerAddr) {
                return toast.error("Address is required");
            }

            if (!ethers.utils.isAddress(referrerAddr)) {
                return toast.error("Referrer address is invalid ");
            }

            if (!termsAccepted) {
                toast.error("Please read and accept the Terms and Conditions.");
                return;
            }

            // Registration logic goes here...
            setLoading(true);
            try {
                const contractInst = await affiliate(wallet?.provider);
              let tx = await contractInst.registerAffiliate(referrerAddr);
                
              const wait=await tx.wait();
              if(wait){
                toast.success("Registered successfully");
                navigate("/game");
  
              }
            } catch (error) {
                const msg = JSON.stringify(error)
                const msgParse = JSON.parse(msg)
                // console.log("🚀 ~ handleUp ~ msgParse:", msgParse)
                if (msgParse?.reason) {
                    toast.error(msgParse?.reason);
    
                }
              setLoading(false);

            } finally {
              setLoading(false);
            }
        } else {
            connect();
        }
    };

    useEffect(() => {
        if (wallet) {
            setValue("walletAddress", wallet.accounts[0]?.address || "");
        }
    }, [wallet, setValue]);

    const handleFormSubmit = async () => {
        await handleRegister();
    };

    const openTermsModal = () => {
        setShowTermsModal(true);
    };

    const closeTermsModal = () => {
        setShowTermsModal(false);
    };

    const handleTermsAccepted = () => {
        setTermsAccepted(true);
        closeTermsModal();
        toast.success("You have accepted the Terms and Conditions.");
    };

    return (
        <>
        <Navbar/>
            <div className="nk-block-middle nk-auth-body wide-xs">
                <div className="brand-logo text-center">
                    <Link to={`/`} className="logo-link">
            <img className="logo-light logo-img logo-img-lg img-fluid w-25" src={logo} alt="logo" />

                        {/* <img className="meta-logo-dark logo-img logo-img-lg" src={LogoDark} alt="meta-logo-dark" /> */}
                    </Link>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-center">


                        <div className="col-6 card p-3 shadow myRegisterCard">
                            <h4>Register</h4>
                            <p>Create New Ozone Account</p>
                            <form className="is-alter" onSubmit={handleSubmit(handleFormSubmit)}>
                                <div className="form-group">
                                    <label className="form-label">Please connect your wallet</label>
                                    <div className="form-control-wrap">
                                        <input
                                            type="text"
                                            {...register("walletAddress", { disabled: true })}
                                            placeholder="Please connect your wallet"
                                            className="form-control-lg form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group py-3">
                                    <label className="form-label">Enter referrer address</label>
                                    <div className="form-control-wrap">
                                        <input
                                            type="text"
                                            {...register("referredAddress")}
                                            placeholder="Enter referrer address"
                                            className="form-control-lg form-control"
                                        />
                                    </div>
                                </div>
                                
                                <div className="form-group py-3">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            id="termsCheckbox"
                                            className="custom-control-input"
                                            checked={termsAccepted}
                                            onChange={(e) => setTermsAccepted(e.target.checked)}
                                        />
                                        <label className="custom-control-label ms-2" htmlFor="termsCheckbox">
                                            I have read and accept the{" "}
                                            <span onClick={openTermsModal} className=" signText">Terms and Conditions</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <Button type="button" onClick={handleRegister} color="primary"  size="lg" className="btn-block myButton">
                                        {loading ? <Spinner size="sm" color="light" /> : wallet ? "Register" : "Connect Wallet"}
                                    </Button>
                                </div>
                            </form>
                            <div className="form-note-s2 text-center pt-4">
                                Already have an account?{" "}
                                <Link to={`/login`} className="signText">
                                    <span> Sign in instead</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={showTermsModal} toggle={closeTermsModal} centered size="xl">
                <ModalHeader toggle={closeTermsModal}>Terms and Conditions</ModalHeader>
                <ModalBody>
                    {/* <iframe src={termsPdf} width="100%" height="400px" title="Terms and Conditions"></iframe> */}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={closeTermsModal}>Close</Button>
                    <Button color="primary" onClick={handleTermsAccepted}>Accept</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default Register;
