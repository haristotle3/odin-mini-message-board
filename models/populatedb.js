import "dotenv/config";
import pool from "./db.js";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR ( 1024 ),
    username VARCHAR ( 64 ),
    added TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username)
VALUES
    ('SHAW! ETIMOS! EGALES!', 'Hornet'),
    ('No cost too great. No mind to think. No will to break. No voice to cry suffering.', 'Pale King'),
    ('Bafanada~', 'Iselda'),
    ('Share the joy of making maps!', 'Conifer');
`;

async function main() {
  console.log("..seeding");
  await pool.query(SQL);
  console.log("Done");
}

main();
