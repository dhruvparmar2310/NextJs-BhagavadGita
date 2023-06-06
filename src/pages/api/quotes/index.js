import { quotes } from "@/data/quotes";

export default function handler (req, res) {
    res.status(200).json(quotes)
}

