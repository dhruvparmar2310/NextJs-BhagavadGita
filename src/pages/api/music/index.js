import { music } from "@/data/music";

export default function handler (req, res) {
    res.status(200).json(music)
}