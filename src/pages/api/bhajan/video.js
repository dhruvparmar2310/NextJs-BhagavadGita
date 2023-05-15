import { video } from "@/data/bhajan";

export default function handler (req, res) {
    res.status(200).json(video)
}