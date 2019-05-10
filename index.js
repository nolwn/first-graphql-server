const expressGraphql = require("express-graphql");
const app = require("express")();
const fs = require("fs");

const data = require("./data.json");
const schema = fs.readFileSync("./schema.gql");

const PORT = 3000;

const getItem = (id, type) => {
	return data[type].find(cur => cur.id === id);
};

const getItems = type => {
	return data[type];
};

// const root = {
// 	Captain: getItem()
// }

// app.use("/graphql", 
	// expressGraphql(

	// )
// );

app.listen(PORT, _ => {
	console.log("listening on " + PORT);
});