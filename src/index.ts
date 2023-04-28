import axios from "axios";
import { BisCompany, BisCompanyDetails } from "./types/businessTypes";

const getCompanies = async (
  maxResult: number,
  resultFrom: number,
  postCode: string
) => {
  try {
    const response = await axios.get(
      `http://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${maxResult}&resultsFrom=${resultFrom}&streetAddressPostCode=${postCode}`
    );
    console.log("List of IDs:");
    return response.data.results[0].businessId;
  } catch (error) {
    console.log(error + "error fetching companies");
  }
};

const getCompanyDetails = async (businessId: string) => {
  try {
    const response = await axios.get(
      `http://avoindata.prh.fi/opendata/bis/v1/${businessId}`
    );

    const items = response.data.results[0] as BisCompanyDetails;
    console.log("List of Company details:");
    return items;
  } catch (error) {
    console.log(error + "error fetching company details");
  }
};

const showListOfIds = async () => {
  const result = await getCompanies(2, 0, "01730");
  console.log(result);
};

const showCompanyDetail = async () => {
  const result = await getCompanyDetails("3355613-6");
  console.log(result);
};

showCompanyDetail();
showListOfIds();
