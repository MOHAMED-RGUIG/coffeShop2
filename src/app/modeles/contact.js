import mongoose , {Schema} from 'mongoose';

const contactSchema = new Schema({
    fullname : {
        type:String,
        required:[true,'name is required'],
        trim:true,
        minLength:[2,"name must be larger than 2 characters"],
        maxLength:[50,"name must be lesser than 50 characters"]
    },
    email : {
        type:String,
        required:[true,'email is required'],
        match:[/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"invalid email adress"],
    },
  
    message : {
        type: String,
        required:[true,'Message is required'],
    },
    date : {
        type: Date,
        default:Date.now,
    },
    }
)

 const Contact = mongoose.models.Contact || mongoose.model("Contact",contactSchema);
 export default Contact;