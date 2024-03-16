print("Started Adding the Users.");
db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);

db.createUser(
    {
        user: process.env.MONGO_USER,
        pwd: process.env.MONGO_PASSWORD,
        roles: [
            "readWrite"
        ]
    }
);
print("End Adding the User Roles.");