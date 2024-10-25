import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY; // API KEY from.env.local file

export default async function handler(req, res) {
    const { query } = req;

    if (!API_KEY) {
        console.error("OMDB API key is missing"); // Logs if the API key is missing
        return res.status(500).json({ error: "OMDB API key is missing" });
    }

    try {
        if (query.default === 'true') {
            // Fetch default movies from OMDB API
            const response = await fetch(`http://www.omdbapi.com/?s=batman&apikey=${API_KEY}`);
            if (!response.ok) {
                throw new Error(`OMDB API error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            
            if (data.Response === 'True') {
                res.status(200).json(data);
            } else {
                res.status(404).json({ error: 'No movies found' });
            }
        } else if (query.query) {
            // Handle search query
            const response = await fetch(`http://www.omdbapi.com/?s=${query.query}&apikey=${API_KEY}`);
            if (!response.ok) {
                throw new Error(`OMDB API error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            
            if (data.Response === 'True') {
                res.status(200).json(data);
            } else {
                res.status(404).json({ error: 'No movies found' });
            }
        } else {
            res.status(400).json({ error: 'Bad Request' });
        }
    } catch (error) {
        console.error('Error fetching data from OMDB:', error.message);
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
}
