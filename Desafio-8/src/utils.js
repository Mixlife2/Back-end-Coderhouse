import {fileURLToPath} from 'url';
import { dirname } from 'path';
const  bcrypt = require('bcrypt')

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;


const SECRET="CoderCoder123"

//const creaHash=password=>crypto.createHmac("sha256",SECRET).update(password).digest("hex")


const creaHash=password=>bcrypt.hashSync(password, bcrypt.genSaltSync(10))

module.exports=creaHash