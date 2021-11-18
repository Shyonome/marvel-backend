const express = require('express');
const router = express.Router();
const { default: axios } = require('axios');

router.get("/characters", async (request, response) => {
    try {
        const obj = await axios.get(`${process.env.MARVEL_CHARACTERS_LINK}${process.env.MARVEL_API_KEY}`);
        console.log(obj.data);
        obj ? response.status(200).json(obj.data) : response.status(400).json({ message: { error: "No data" } });
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
});

router.get("/comics", async (request, response) => {
    try {
        const obj = await axios.get(`${process.env.MARVEL_COMICS_LINK}${process.env.MARVEL_API_KEY}`);
        console.log(obj.data);
        obj ? response.status(200).json(obj.data) : response.status(400).json({ message: { error: "No data" } });
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
});

router.get("/comics/:characterId", async (request, response) => {
    try {
        const characterId = request.params.characterId;
        const comicsId = await axios.get(`${process.env.MARVEL_COMICS_ID_LINK}${characterId}?apiKey=${process.env.MARVEL_API_KEY}`);
        console.log(comicsId.data);
        comicsId ? response.status(200).json(comicsId.data) : response.status(400).json({ message: { error: "No data" } });
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
});

module.exports = router;