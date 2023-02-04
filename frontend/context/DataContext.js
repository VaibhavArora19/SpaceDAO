import { createContext, useState } from "react";
import { useContract, useSigner } from "wagmi";
import {ethers} from "ethers";

export const AppContext = createContext();

const AppWrapper = (props) => {
    const [dataById, setDataById] = useState({});
    const [ownerData, setOwnerData] = useState({});
    const {data: signer} = useSigner();

    const contract = useContract({
        address: "",  //contract Address
        abi: "", //contract ABI
        signerOrProvider: signer,
    });


    const storeDataHandler = async (data) => {
        await contract.storeData(data.name, data.property, data.cid, data.supportable, data.isPrivate, data.price, data.fundingPeriod, data.size);
    };

    const registerDealHandler = async (dataId, deal) => {
        await contract.registerDeal(dataId, deal);
    };

    const verifyClaimHandler = async (dataId, dealId) => {
        await contract.verifyClaim(dataId, dealId);
    };

    const supportDataHandler = async (dataId, ethValue) => {
        await contract.supportData(dataId, {value: ethers.utils.parseEther(ethValue)});
    };

    const buyDataHandler = async (dataId, ethValue) => {
        await contract.buyData(dataId, {value: ethers.utils.parseEther(ethValue)});
    };
    const getDataById = async (dataId) => {
        const singleData = await contract.getDataById(dataId);
        setDataById(singleData);
    };

    const getOwnerData = async (dataId) => {
        const dataByOwner = await contract.ownerData(dataId);
        setOwnerData(dataByOwner);
    }

    const getSupporters = async (dataId) => {
        const supporters = await contract.supportersOfDataId(dataId);

        return supporters;
    };


    const sharedState = {
        storeDataHandler,
        registerDealHandler,
        verifyClaimHandler,
        supportDataHandler,
        buyDataHandler,
        getDataById,
        dataById,
        getOwnerData,
        ownerData,
        getSupporters,
    };

    return (
        <AppContext.Provider value = {{sharedState}}>
            {props.children}
        </AppContext.Provider>
    )
};

export default AppWrapper;