// /api/contact-us
import fs from 'fs';
import path from 'path';

export function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'contact-submissions.json');
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

export default async function handler(req, res) {

  const contactSubmission = {
    id: new Date().toISOString(),
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    message: req.body.message,
  }

  // store that in a database or in a file
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  data.push(contactSubmission);
  fs.writeFileSync(filePath, JSON.stringify(data));
  res.status(201).json({ message: 'Success!', data: contactSubmission });
}