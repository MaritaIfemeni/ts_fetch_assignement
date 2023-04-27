import axios from "axios";


interface Company {
    businessId: string;
    name: string;
}



const getCompanies = async () => {
  try {
    const response = await axios.get(
      "http://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=3&resultsFrom=0&companyRegistrationFrom=2014-02-28"
    );
    const companies: Company[] = response.data.results.map((result: any) => ({
        businessId: result.businessId,
        name: result.name,
        }));
    return companies;
  } catch (error) {
    console.log(error + "error fetching companies");
  }
};



const getCompanyDetails = async (businessId: string) => {
  try {
    const response = await axios.get(
      `http://avoindata.prh.fi/opendata/bis/v1/${businessId}`
    );
    return response.data;
  } catch (error) {
    console.log(error + "error fetching company details");
  }
};

getCompanies().then((data) => {
  console.log(data);
});

getCompanyDetails("3361252-1").then((data) => {
  console.log(data);
});



// http://avoindata.prh.fi/opendata/bis/v1/{businessId}

//GET /BIS/V1
// http://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=3&resultsFrom=0&companyRegistrationFrom=2014-02-28

// BisCompany {
//     businessId (string): Business ID ,
//     name (string): Primary company name
//     registrationDate (string): Date of registration ,
//     companyForm (string, optional): Company form ,
//     detailsUri (string, optional): A URI for more details, if details aren't already included ,
//     liquidations (Array[BisCompanyLiquidation], optional): Bankruptcy, liquidation or restructuring proceedings ,
//     }
