const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port =5050; 

app.use(bodyParser.json());


//db connection
const connectDB = async() => {
  try{
      await mongoose.connect('mongodb://127.0.0.1:27017/projectPract');
      console.log('Connected to MongoDB');
  }
  catch(error){
      console.log(error);
  }
}


// Define mongoose schema and model for team members
const teamMemberSchema = new mongoose.Schema({
    name: String,
    position: String,
    bio: String,
  });
  
  const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

  // API endpoint to get team members
app.get('/api/team', async (req, res) => {
    try {
      const teamMembers = await TeamMember.find();
      res.json(teamMembers);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = connectDB;


app.listen(port, ()=>{
    console.log('server is running successfully.');
})