import axios from "axios";
import { BisCompanyDetails } from "./types/businessTypes";

const getCompanies = async (
  maxResult: number,
  resultFrom: number,
  postCode: string
): Promise<Array<[string, BisCompanyDetails]>> => {
  try {
    const response = await axios.get(
      `http://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${maxResult}&resultsFrom=${resultFrom}&streetAddressPostCode=${postCode}`
    );
    const businesses = response.data.results;
    const companiesDetails = [];
    for (let i = 0; i < businesses.length; i++) {
      const businessId = businesses[i].businessId;
      const companyDetails = await getCompanyDetails(businessId);
      companiesDetails.push([businessId, companyDetails]);
    }
    return companiesDetails as Array<[string, BisCompanyDetails]>;
  } catch (error) {
    console.log(error + "error fetching companies details");
    return [];
  }
};

const getCompanyDetails = async (businessId: string) => {
  try {
    const response = await axios.get(
      `http://avoindata.prh.fi/opendata/bis/v1/${businessId}`
    );
    const items = response.data.results[0] as BisCompanyDetails;
    return items;
  } catch (error) {
    console.log(error + "error fetching company details");
  }
};

const showListOfIds = async () => {
  const result = await getCompanies(4, 0, "01730");
  console.log(
    "List of Companies with details based on the params: maxResult, resultFrom and postCode:"
  );
  result.forEach((elem) => {
    if (Array.isArray(elem)) {
      elem.forEach((nestedElem) => {
        console.log(nestedElem);
      });
    } else {
      console.log(elem);
    }
  });
};

// const showCompanyDetail = async () => {
//   const result = await getCompanyDetails("3355613-6");
//   console.log(result);
// };
//showCompanyDetail();

showListOfIds();
