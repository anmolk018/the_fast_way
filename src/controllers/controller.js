const Coingecko = require("../models/coingeckoModel");
const axios = require("axios");

// function to get Data from coingeckoApi and store in db
const coingeckoApiToDb = async (req, res) => {
  try {
    let coingeckoApiData = await axios.get("https://api.coingecko.com/api/v3/coins/list?include_platform=true");

    if (coingeckoApiData.status == 200) {
      //inserting data at once
      await Coingecko.bulkCreate(coingeckoApiData.data);
      return res.status(201).json({ status: "success", msg: "Data inserted successfully." });
    } else {
      throw new Error("Something went wrong with coingecko");
    }
  } catch (error) {
    res.status(500).json({ status: "fail", error: "Something Went Wrong", msg: error });
  }
};

module.exports = {
  coingeckoApiToDb,
};
