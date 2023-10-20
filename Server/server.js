const express = require("express");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Doctor = require("./models/doctorSchema")
const Patient = require("./models/patientSchema")
const PCS = require("./models/pcsSchema")
const MOXFQ = require("./models/moxfq_Schema")
const SF_36 = require("./models/sf_36")
const Image = require("./models/image_model")
const Data = require("./models/dataSchema")
const User = require('./models/userSchema')
const cors = require("cors")
const app = express();

const PORT = 3001;
const SECRET_KEY = "HACKWIT";
const DB_URL = "mongodb://0.0.0.0:27017/pain_management";



//connect to DB
mongoose
.connect(DB_URL,{})
.then(() => console.log("connected to MongoDB"))
.catch((err) => console.log('Error',err))

app.use(bodyparser.json());
app.use(cors());


app.get('/register', async (req,res) => {
    
    try {
        const reg = await User.find();
        res.status(200).send(reg);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.post("/api/register", async (req, res) => {
    const { name,username, password } = req.body;
    if (!name || !username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const customer = new User({ name, username, password: hashedPassword });
    try {
        await customer.save();
        res.json({ message: "User Saved Successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error Occurred" });
    }
});

app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;
    const customer = await User.findOne({ username });

    if (!customer) {
        return res.status(401).json({ message: "Authentication failed! User doesnot exist" });
    }

    const passwordMatch = await bcrypt.compare(password, customer.password);

    if (!passwordMatch) {
        return res.status(401).json({ message: "Authentication failed! wrong Password" });
    }

    const token = jwt.sign(
        { username: customer.username , role: "admin"},
        SECRET_KEY,
        { expiresIn: "1h" });

    res.json({ token });
});


// Doctor Schema:

app.post('/doctor', async (req,res) => {
    const doctor = new Doctor(req.body);
    try {
        const savedDoctor = await doctor.save();
        res.status(200).send(savedDoctor);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.get('/doctors', async (req,res) => {
    
    try {
        const doctors = await Doctor.find();
        res.status(200).send(doctors);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.get('/getDoctor/:id', async (req, res) => {
    const doctorId = req.params.id;
    try {
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching the doctor', error: error.message });
    }
});

app.put('/updateDoctor/:id', async (req, res) => {
    const id = req.params.id;
    const objectId = new mongoose.Types.ObjectId(id);
  
    try {
      const user = await Doctor.findByIdAndUpdate(objectId, {
        userid: req.body.userid,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
      });
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: 'An error occurred while updating the user', error: err.message });
    }
  });


app.delete('/deleteDoctor/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const user = await Doctor.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: 'An error occurred while deleting the doctor', error: err.message });
    }
});

  //Patient Schema

  app.post('/patient', async (req,res) => {
    const patient = new Patient(req.body);
    try {
        const savedPatient = await patient.save();
        res.status(200).send(savedPatient);
    } catch (error) {
        res.status(400).send(error.message)
    }
})



app.get('/patients', async (req,res) => {
     
    try {
        const patients = await Patient.find();
        res.status(200).send(patients);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//PCS Schema

app.post('/pcs', async (req,res) => {
    const pcs = new PCS(req.body);
    try {
        const savedPcs = await pcs.save();
        res.status(200).send(savedPcs);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.get('/pcss', async (req, res) => {
    try {
      const email = req.query.email; 
      const pcss = await PCS.find({ email: email });
      res.status(200).send(pcss);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  //view patient

  app.get('/viewpatient', async (req, res) => {
    try {
      const email = req.query.email; 
      const pcss = await Patient.find({ email: email });
      res.status(200).send(pcss);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

 // moxfq endpoints

app.post('/moxfq', async (req,res) => {
    const moxfq = new MOXFQ(req.body);
    try {
        const savedmoxfq= await moxfq.save();
        res.status(200).send(savedmoxfq);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.get('/moxfqs', async (req, res) => {
    try {
        const email = req.query.email;
        const moxfqs = await MOXFQ.find({ email: email });
        res.status(200).send(moxfqs);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

//sf_36 endpoints

app.post('/sf_36', async (req,res) => {
    const sf_36 = new SF_36(req.body);
    try {
        const savedsf= await sf_36.save();
        res.status(200).send(savedsf);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.get('/sf_36s', async (req, res) => {
    try {
        const email = req.query.email;
        const sf_36s= await SF_36.find({ email: email });
        res.status(200).send(sf_36s);
    } catch (error) {
        res.status(400).send(error.message);
    }
});


//images

app.get('/images', async (req, res) => {
    try {
        const email = req.query.email;
        const image= await Image.find({ email: email });
        res.status(200).send(image);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// diagnose

app.post('/saveData', (req, res) => {
    const { email, tableData } = req.body; // Extract email and tableData from the request body
  
    const dataToSave = tableData.map(row => ({
      code: row.code,
      condition: row.condition,
      userColumn1: row.userColumn1,
      userColumn2: row.userColumn2,
      userColumn3: row.userColumn3,
      userColumn4: row.userColumn4,
      userColumn5: row.userColumn5,
      userColumn6: row.userColumn6,
      email, // Include the email in the data to be saved
    }));
  
    Data.insertMany(dataToSave)
      .then(() => {
        console.log('Data saved to MongoDB');
        res.status(200).json({ message: 'Data saved to MongoDB' });
      })
      .catch(err => {
        console.error('Error saving data to MongoDB:', err);
        res.status(500).json({ error: 'Error saving data to MongoDB' });
      });
  });
  


app.listen(PORT, () => {
    console.log ("server is running on PORT", PORT)
});