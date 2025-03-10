import React, { useState } from "react";
import "./Opportunities.css";
import { useNavigate } from "react-router-dom";

export const opportunities = [
      {
        "id": 1,
        "title": "Teaching Volunteer",
        "company": "EduCare NGO",
        "location": "Delhi",
        "stipend": "Unpaid",
        "duration": "3 months",
        "description": "EduCare NGO is a non-profit organization dedicated to providing free education and mentorship to underprivileged children in Delhi. We believe that education is the most powerful tool to break the cycle of poverty and create a brighter future for these children. Our programs focus on holistic development, combining academic learning with life skills and creative activities. As a Teaching Volunteer, you will have the opportunity to make a meaningful impact by teaching, mentoring, and inspiring young minds. You will work closely with a team of passionate educators to create a supportive and engaging learning environment.",
        "responsibilities": [
          "1. Teach core subjects like Math, English, and Science to students from underprivileged backgrounds.",
          "2. Prepare detailed lesson plans and interactive activities to make learning fun and effective.",
          "3. Monitor the progress of students and provide personalized support to help them overcome challenges.",
          "4. Organize educational games, group activities, and creative projects to encourage teamwork and critical thinking.",
          "5. Assist in creating a positive and inclusive learning environment where every child feels valued and motivated."
        ],
        "skills": ["Communication, ", "Patience, ", "Teaching, ", "Leadership, ", "Time Management"]
      },
      {
        "id": 2,
        "title": "Content Writer Intern",
        "company": "Helping Hands",
        "location": "Remote",
        "stipend": "$100/month",
        "duration": "2 months",
        "description": "Helping Hands is a non-profit organization that focuses on raising awareness about critical social issues through impactful content and storytelling. Our mission is to inspire action and drive change by sharing stories that highlight the challenges faced by marginalized communities. We use blogs, social media, and other platforms to amplify voices and advocate for solutions. As a Content Writer Intern, you will play a key role in creating compelling content that educates, engages, and motivates our audience. This is an excellent opportunity to hone your writing skills while contributing to a meaningful cause.",
        "responsibilities": [
          "1. Research and write well-structured blog articles on social issues such as education, poverty, and healthcare.",
          "2. Edit and proofread content to ensure clarity, accuracy, and adherence to the organization's tone and style.",
          "3. Develop engaging social media posts, captions, and stories to increase awareness and engagement.",
          "4. Collaborate with the media team to create impactful storytelling campaigns that resonate with our audience.",
          "5. Optimize content for SEO to improve visibility and reach on search engines and social platforms."
        ],
        "skills": ["Writing, ", "Research, ", "SEO, ", "Editing, ", "Creativity"]
      },
      {
        "id": 3,
        "title": "Social Media Manager",
        "company": "Hope Foundation",
        "location": "Mumbai",
        "stipend": "$150/month",
        "duration": "4 months",
        "description": "Hope Foundation is a non-profit organization committed to empowering women through education, skill development, and employment opportunities. We believe in creating a world where every woman has the tools and support to achieve her full potential. Our programs focus on providing vocational training, mentorship, and resources to help women build sustainable livelihoods. As a Social Media Manager, you will be responsible for managing our online presence, engaging with our community, and spreading awareness about our initiatives. Your work will help us reach a wider audience and inspire more people to join our cause.",
        "responsibilities": [
          "1. Develop and implement social media strategies to increase engagement and followers across platforms like Facebook, Instagram, and Twitter.",
          "2. Create and schedule posts, stories, and updates to keep our audience informed and engaged.",
          "3. Analyze engagement metrics and use insights to optimize content and improve performance.",
          "4. Engage with followers by responding to comments, messages, and inquiries in a timely and professional manner.",
          "5. Collaborate with designers and content creators to produce visually appealing and impactful posts."
        ],
        "skills": ["Social Media Marketing, ", "Content Creation, ", "Analytics, ", "Communication, ", "Graphic Design"]
      },
      {
        "id": 4,
        "title": "Community Outreach Coordinator",
        "company": "Bright Future",
        "location": "Bangalore",
        "stipend": "Unpaid",
        "duration": "3 months",
        "description": "Bright Future is a non-profit organization that connects professionals with underprivileged students for mentorship and career guidance. Our mission is to bridge the gap between talent and opportunity by providing students with the resources, guidance, and support they need to succeed. We organize workshops, career counseling sessions, and community events to empower students and help them achieve their dreams. As a Community Outreach Coordinator, you will play a vital role in building relationships with local communities, schools, and organizations to expand our reach and impact.",
        "responsibilities": [
          "1. Establish and maintain relationships with local communities, schools, and educational institutions.",
          "2. Organize and conduct community workshops, seminars, and events to promote our programs and initiatives.",
          "3. Recruit and train volunteers to assist with outreach activities and mentorship programs.",
          "4. Maintain detailed records of outreach efforts, including participant feedback and program outcomes.",
          "5. Collaborate with NGOs, government agencies, and other stakeholders to create partnerships and expand our impact."
        ],
        "skills": ["Networking, ", "Event Planning, ", "Public Speaking, ", "Community Engagement, ", "Leadership"]
      },
      {
        "id": 5,
        "title": "Event Organizer",
        "company": "Uplift NGO",
        "location": "Pune",
        "stipend": "Unpaid",
        "duration": "2 months",
        "description": "Uplift NGO is a non-profit organization that organizes fundraising and awareness events to support education and healthcare initiatives for underprivileged communities. Our events range from charity runs and cultural festivals to online campaigns and donor meets. We believe in the power of collective action to drive change and improve lives. As an Event Organizer, you will be responsible for planning, coordinating, and executing events that raise funds and awareness for our cause. This role offers a unique opportunity to develop event management skills while contributing to a meaningful mission.",
        "responsibilities": [
          "1. Plan and execute fundraising events, including logistics, budgeting, and vendor coordination.",
          "2. Coordinate with sponsors, vendors, and volunteers to ensure smooth event operations.",
          "3. Promote events through marketing efforts, including social media, email campaigns, and partnerships.",
          "4. Manage event logistics, including venue booking, equipment setup, and participant registration.",
          "5. Document event success and gather feedback to suggest improvements for future events."
        ],
        "skills": ["Event Management, ", "Planning, ", "Coordination, ", "Marketing, ", "Problem-Solving"]
      },
      {
        "id": 6,
        "title": "Fundraising Assistant",
        "company": "Better Tomorrow",
        "location": "Remote",
        "stipend": "$120/month",
        "duration": "3 months",
        "description": "Better Tomorrow is a non-profit organization that raises funds for social causes such as education, healthcare, and community development. We believe in the power of collective giving to create a better future for marginalized communities. Our fundraising initiatives include crowdfunding campaigns, donor outreach, and corporate partnerships. As a Fundraising Assistant, you will play a key role in identifying funding opportunities, engaging with donors, and executing campaigns that support our mission. This role offers valuable experience in fundraising and donor relations.",
        "responsibilities": [
          "1. Identify potential funding opportunities through research and networking.",
          "2. Develop and present compelling proposals to potential donors and sponsors.",
          "3. Execute fundraising campaigns, including crowdfunding and online donation drives.",
          "4. Maintain strong relationships with donors by providing updates and expressing gratitude.",
          "5. Track fundraising performance and prepare reports to measure the success of campaigns."
        ],
        "skills": ["Fundraising, ", "Marketing, ", "Communication, ", "Negotiation, ", "Persuasion"]
      },
      {
        "id": 7,
        "title": "Teaching Volunteer",
        "company": "Future Scholars",
        "location": "Hyderabad",
        "stipend": "Unpaid",
        "duration": "4 months",
        "description": "Future Scholars is a non-profit organization dedicated to providing quality education to underprivileged children in Hyderabad. We believe that every child deserves access to education and the opportunity to achieve their dreams. Our programs focus on academic excellence, creativity, and personal growth. As a Teaching Volunteer, you will have the opportunity to teach, mentor, and inspire young learners. You will work with a team of dedicated educators to create a nurturing and stimulating learning environment.",
        "responsibilities": [
          "1. Teach core subjects like Math and Science to students from underprivileged backgrounds.",
          "2. Prepare interactive teaching materials and activities to make learning engaging and effective.",
          "3. Mentor students and track their progress to provide personalized support and guidance.",
          "4. Conduct group activities, games, and creative projects to encourage teamwork and critical thinking.",
          "5. Encourage creative learning techniques to help students develop problem-solving and analytical skills."
        ],
        "skills": ["Teaching, ", "Mentoring, ", "Patience, ", "Time Management, ", "Leadership"]
      },
      {
        "id": 8,
        "title": "Content Writer Intern",
        "company": "Social Impact Hub",
        "location": "Remote",
        "stipend": "$80/month",
        "duration": "3 months",
        "description": "Social Impact Hub is a non-profit organization that creates awareness about social issues through well-researched and impactful content. Our mission is to educate, inspire, and mobilize individuals to take action for positive change. We use blogs, articles, and social media to share stories and insights that highlight the challenges faced by marginalized communities. As a Content Writer Intern, you will contribute to our mission by creating high-quality content that resonates with our audience and drives engagement.",
        "responsibilities": [
          "1. Write articles and blog posts on social causes such as education, poverty, and gender equality.",
          "2. Edit and proofread written content to ensure clarity, accuracy, and consistency.",
          "3. Collaborate with designers to create infographics and visual content that complements written articles.",
          "4. Optimize content for SEO to improve visibility and reach on search engines and social platforms.",
          "5. Publish content on various platforms, including the organization's website and social media channels."
        ],
        "skills": ["Writing, ", "Research, ", "SEO, ", "Creativity, ", "Editing"]
      },
      {
        "id": 9,
        "title": "Social Media Manager",
        "company": "Youth Empowerment Trust",
        "location": "Chennai",
        "stipend": "$130/month",
        "duration": "5 months",
        "description": "Youth Empowerment Trust is a non-profit organization that uses social media to drive change and empower young people. We believe in the power of digital platforms to amplify voices, share stories, and inspire action. Our initiatives focus on education, skill development, and youth leadership. As a Social Media Manager, you will be responsible for managing our social media accounts, creating engaging content, and building a strong online community. Your work will help us reach a wider audience and create a lasting impact.",
        "responsibilities": [
          "1. Manage social media accounts, including Facebook, Instagram, Twitter, and LinkedIn.",
          "2. Engage with the audience by responding to comments, messages, and inquiries in a timely manner.",
          "3. Track engagement analytics and use insights to optimize content and improve performance.",
          "4. Create visually appealing posts, stories, and updates to keep our audience informed and engaged.",
          "5. Develop and execute social media campaigns to promote our initiatives and drive engagement."
        ],
        "skills": ["Social Media Marketing, ", "Analytics, ", "Content Creation, ", "Communication, ", "Engagement"]
      },
      {
        "id": 10,
        "title": "Community Outreach Coordinator",
        "company": "Rise Together",
        "location": "Kolkata",
        "stipend": "Unpaid",
        "duration": "2 months",
        "description": "Rise Together is a non-profit organization that bridges the gap between communities and NGOs by facilitating collaboration and resource sharing. Our mission is to create a network of support that empowers communities and drives sustainable change. We organize events, workshops, and outreach programs to connect individuals and organizations with shared goals. As a Community Outreach Coordinator, you will play a key role in building relationships, organizing events, and expanding our reach.",
        "responsibilities": [
          "1. Organize community events, workshops, and outreach programs to promote our initiatives.",
          "2. Recruit and train volunteers to assist with outreach activities and community engagement.",
          "3. Establish partnerships with local organizations, schools, and community leaders.",
          "4. Monitor the effectiveness of outreach efforts and gather feedback for continuous improvement.",
          "5. Coordinate workshops and seminars to educate communities about our programs and resources."
        ],
        "skills": ["Networking, ", "Public Speaking, ", "Leadership, ", "Event Management, ", "Planning"]
      },
      {
        "id": 11,
        "title": "Event Organizer",
        "company": "Change Makers",
        "location": "Ahmedabad",
        "stipend": "Unpaid",
        "duration": "3 months",
        "description": "Change Makers is a non-profit organization that hosts impactful social events to raise awareness and funds for critical causes. Our events range from charity galas and cultural festivals to online campaigns and community drives. We believe in the power of events to bring people together and inspire action. As an Event Organizer, you will be responsible for planning, coordinating, and executing events that align with our mission. This role offers a unique opportunity to develop event management skills while contributing to a meaningful cause.",
        "responsibilities": [
          "1. Plan and execute events, including logistics, budgeting, and vendor coordination.",
          "2. Engage with donors, sponsors, and partners to secure support for events.",
          "3. Manage event logistics, including venue booking, equipment setup, and participant registration.",
          "4. Promote events through marketing efforts, including social media, email campaigns, and partnerships.",
          "5. Conduct post-event analysis to evaluate success and identify areas for improvement."
        ],
        "skills": ["Event Management, ", "Marketing, ", "Budgeting, ", "Coordination, ", "Problem-Solving"]
      },
      {
        "id": 12,
        "title": "Fundraising Assistant",
        "company": "GiveHope Foundation",
        "location": "Remote",
        "stipend": "$110/month",
        "duration": "3 months",
        "description": "GiveHope Foundation is a non-profit organization that raises funds for marginalized communities to support education, healthcare, and livelihood programs. We believe in the power of collective giving to create a better future for those in need. Our fundraising initiatives include crowdfunding campaigns, donor outreach, and corporate partnerships. As a Fundraising Assistant, you will play a key role in identifying funding opportunities, engaging with donors, and executing campaigns that support our mission.",
        "responsibilities": [
          "1. Research and identify potential funding opportunities through online platforms and networking.",
          "2. Write compelling donor proposals and presentations to secure funding for our programs.",
          "3. Execute crowdfunding campaigns and online donation drives to raise funds for our initiatives.",
          "4. Maintain strong relationships with donors by providing updates and expressing gratitude.",
          "5. Track fundraising progress and prepare reports to measure the success of campaigns."
        ],
        "skills": ["Fundraising, ", "Marketing, ", "Negotiation, ", "Persuasion, ", "Communication"]
      }
    

];



const Opportunities = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredOpportunities = opportunities.filter((opportunity) =>
    opportunity.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="opportunities-container">
      <h1 className="opportunities-head">Find Opportunities</h1>
      <input
        type="text"
        placeholder="Search opportunities..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="opportunities-list">
        {filteredOpportunities.map((opportunity) => (
          <div key={opportunity.id} className="opportunity-card">
            <h3>{opportunity.title}</h3>
            <p>{opportunity.company}</p>
            <p>{opportunity.location}</p>
            <p><strong>{opportunity.stipend}</strong></p>
            <button className="apply-btn"
            onClick={() => navigate(`/opportunity/${opportunity.id}`)}
            >Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;