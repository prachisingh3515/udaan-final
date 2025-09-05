import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { opportunities } from "./Opportunities";
import "./OpportunityDetail.css";

const OpportunityDetail = () => {
  const { id } = useParams();
  const opportunity = opportunities.find((opp) => opp.id === parseInt(id));

  if (!opportunity) {
    return <h2>Opportunity not found</h2>;
  }

  const [applied, setApplied] = useState(false);

  return (
    <div className="opportunity-detail">
      <h1 className="opportunity-detail-title">{opportunity.title}</h1>
      <p className="opportunity-detail-company">{opportunity.company}</p>
      <div className="opportunity-detail-container1">
        <p>{opportunity.location}</p>
        <p>{opportunity.stipend}</p>
        <p>{opportunity.duration}</p>
      </div>
      <h3 className="opportunity-detail-subhead">Description</h3>
      <p className="opportunity-detail-para">{opportunity.description}</p>
      <h3 className="opportunity-detail-subhead">Key Responsibilities:</h3>
      {opportunity.responsibilities.map((point, index) => (
        <p key={index} className="opportunity-detail-para">
          {point}
        </p>
      ))}
      <h3 className="opportunity-detail-subhead">Skills Required:</h3>
      <p className="opportunity-detail-para">{opportunity.skills}</p>

      <p className="opportunity-detail-question">
        Why do you want to volunteer for this role?
      </p>
      <textarea className="opportunity-detail-textarea" name="" id=""></textarea>

      <p className="opportunity-detail-question">
        Do you have any relevant experience related to this role?
      </p>
      <textarea
        required
        className="opportunity-detail-textarea"
        name=""
        id=""
      ></textarea>

      <p className="opportunity-detail-question">
        What skills or qualifications do you have that would benefit this role?
      </p>
      <textarea
        required
        className="opportunity-detail-textarea"
        name=""
        id=""
      ></textarea>

      <p className="opportunity-detail-question">
        Is there anything else you would like to share with us regarding your
        application?
      </p>
      <textarea
        required
        className="opportunity-detail-textarea"
        name=""
        id=""
      ></textarea>
      <div className="opportunity-detail-btn-container">
        {!applied ? (
          <button
            onClick={() => setApplied(true)}
            className="opportunity-detail-btn"
          >
            Apply
          </button>
        ) : (
          <p className="opportunity-detail-applied">Applied Successfully!!</p>
        )}
      </div>
    </div>
  );
};

export default OpportunityDetail;
