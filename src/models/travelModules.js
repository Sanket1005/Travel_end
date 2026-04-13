import mongoose from "mongoose";
 

const travelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true

    },
    rating: {
        type: Number,
        required: true
    },

})

const Travel = mongoose.model("Travel", travelSchema);
export default Travel;