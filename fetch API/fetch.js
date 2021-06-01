// POST
fetch("https://reqres.in/api/users", {
  // Defining method type as POST
  method: 'POST', 
  // Fetch knows, what type of data are we dealing with
  headers: {
    'Content-Type': 'application/json' 
  },
  // Data needs to be parsed into JSON
  body: JSON.stringify({ 
    first_name: 'Shailesh',
    last_name: 'Shanbhag',
  })
}).then(res => {
  return res.json()
}).then(data => console.log(data));


// GET
fetch("https://reqres.in/api/users", {
  // Defining method type as POST
  method: 'GET', 
  // Fetch knows, what type of data are we dealing with
  headers: {
    'Content-Type': 'application/json' 
  }
}).then(res => {
  return res.json()
}).then(data => console.log(data));