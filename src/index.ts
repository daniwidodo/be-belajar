import express, { Application } from 'express'; 

const PORT = 8080; 
const app: Application = express(); 

app.get('/', (req, res) => res.send('Express & Node with TypeScript!'));  
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`); 
}); 