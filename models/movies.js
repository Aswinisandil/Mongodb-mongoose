import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    money: { type: mongoose.Decimal128, required: true, validate: v => v >= 10 },
    isActive: { type: Boolean },
    genre: { type: Array },
    comments: [
        { value: { type: String }, publish: { type: Date, default: Date.now } }
    ]
})

const MovieModel = mongoose.model("Movie", moviesSchema);

const singleDoc = async() => {
    try{
    // const m1 = new MovieModel({
    //     name: "Extraction 2",
    //     rating: 4.5,
    //     money: 8000,
    //     isActive: true,
    //     genre: ['action', 'adventure'],
    //     comments: [{value: "that was an amazing movie."}]
    // })
    // const m2 = new MovieModel({
    //     name: "John wick",
    //     rating: 5,
    //     money: 25000,
    //     isActive: true,
    //     genre: ['action', 'Thriller'],
    //     comments: [{value: "that was an outstanding movie."}]
    // })
    // const m3 = new MovieModel({
    //     name: "Narnia 2",
    //     rating: 4,
    //     money: 58000,
    //     isActive: true,
    //     genre: ['Fantasy', 'adventure'],
    //     comments: [{value: "Kids wil love the movie."}]
    // })
    // const m4 = new MovieModel({
    //     name: "Dark Knight returns",
    //     rating: 4.5,
    //     money: 58000,
    //     isActive: true,
    //     genre: ['Action', 'Adventure'],
    //     comments: [{value: "One hell of a DC movie that is."}]
    // })

    // const m5 = new MovieModel({
    //     name: "Jurassic Park",
    //     rating: 4.5,
    //     money: 88000,
    //     isActive: true,
    //     genre: ['Action', 'Adventure','Fantasy'],
    //     comments: [{value: "The movie was a bit scary in the end."}]
    // })

    const results = await MovieModel.find({$or: [{money: 58000}, {rating: 4}]});
    console.clear();
    console.log(results);

    } catch(error){
        console.log(error)
    }
}

export {singleDoc};