import { useParams } from "react-router-dom";
import axios from "axios";
import {useEffect, useState } from "react";
import JobCardList from "./JobCardList";


function CompanyDetail() {
  const { name } = useParams();
  const [company, setCompany] = useState({data: null, isLoading: true})


  useEffect(function fetchCompanyOnRender(){

    async function getCompany(name){
      const resp = await axios.get(`http://localhost:3001/companies/${name}`);
      setCompany({data: resp.data.company, isLoading: false});
    }
    getCompany(name);
  },[name]);

  if (company.isLoading) return <i>Loading...</i>;
  console.log("company=",company)
  return (

    <div>
      <h2>{company.data.name}</h2>
      <p>{company.data.description}</p>
      <JobCardList jobs={company.data.jobs} />
    </div>
  )

}

export default CompanyDetail;
