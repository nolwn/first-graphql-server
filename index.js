const expressGraphql = require("express-graphql");
const { buildSchema } = require("graphql");
const app = require("express")();
const fs = require("fs");

const data = require("./data.json");
const schema = buildSchema(fs.readFileSync("./schema.gql", "utf-8"));

const PORT = 3000;

const getItem = (id, type) => {
	return data[type].find(cur => cur.id === id);
};

const getItems = type => {
	return data[type];
};

const rootValue = {
	captain: id => getItem(id, "Captain"),
	captains: () => getItems("Captain"),
	ship: id => getItem(id, "Ship"),
	ships: () => getItems("Ship")
};

app.use("/graphql", 
	expressGraphql({
		schema,
		rootValue,
		graphiql: true
	})
);

app.listen(PORT, _ => {
	console.log("listening on " + PORT);
});