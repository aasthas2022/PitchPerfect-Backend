/**
 * routes/generateCoverLetter.js
 * 
 * This module contains the handler for generating cover letters using Google Generative AI. 
 * It defines a template for the AI prompt, processes incoming requests to generate a cover 
 * letter based on the provided resume and job description, and returns the generated cover 
 * letter as a response. It handles validation, error logging, and interaction with the AI 
 * model.
 */

const { GoogleGenerativeAI } = require("@google/generative-ai");

console.log(process.env.GOOGLE_GENERATIVE_AI_API_KEY)
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY);

const promptTemplate = `Generate a cover letter for a job application using the following job description and resume details. The cover letter should be professional, well-structured, and tailored to the specific requirements of the job. It should highlight relevant experiences, skills, and achievements from the resume that match the job description. Ensure the tone is enthusiastic and the content is compelling to make the applicant stand out. Here is my \n\nResume: {resume}\n\nJob Description: {jobDescription}{optionalInfo}`;

const generateCoverLetter = async (req, res) => {
  const { resume, jobDescription, companyMissionVisionCulture, additionalInfo } = req.body;
  console.log("Generate cover letter endpoint hit");
  
  if (!resume || !jobDescription) {
    console.error("Missing resume or job description");
    return res.status(400).send('Missing resume or job description');
  }

  let optionalInfo = '';
  if (companyMissionVisionCulture) {
    optionalInfo += `\n\nIntegrate my experience with company's mission, vision and culture: ${companyMissionVisionCulture}`;
  }
  if (additionalInfo) {
    optionalInfo += `\n\nDont forget to add about: ${additionalInfo}`;
  }

  const prompt = promptTemplate
    .replace('{resume}', resume)
    .replace('{jobDescription}', jobDescription)
    .replace('{optionalInfo}', optionalInfo);

  console.log("Generated prompt:", prompt);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const coverLetter = await response.text();
    console.log("Generated cover letter:", coverLetter);

    res.status(200).json({ coverLetter });
  } catch (error) {
    console.error('Error generating cover letter:', error);
    res.status(500).send('Failed to generate cover letter');
  }
};

module.exports = {
  generateCoverLetter,
};
