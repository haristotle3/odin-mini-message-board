import { Pool } from "pg";

class MessagesDatabase {
  constructor() {
    this.db = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }

  async getAllMessages() {
    const { rows } = await this.db.query("SELECT * FROM messages;");
    return rows;
  }

  async getMessageByID(id) {
    const { rows } = await this.db.query(
      "SELECT * FROM messages WHERE id=($1);",
      [id]
    );
    return rows;
  }

  async insertMessage(text, username) {
    await this.db.query(
      "INSERT INTO messages (text, username) VALUES ($1, $2);",
      [text, username]
    );
  }
}

const db = new MessagesDatabase();

export default db;
