function CompanyCard({ company }) {
  return (
    <div>
      <p>
        {company.name}{" "}
        <img src={`${company.logoUrl}`} alt={`${company.name}'s logo.`}></img>
      </p>
      <p>{company.description}</p>
    </div>
  );
}

export default CompanyCard;
