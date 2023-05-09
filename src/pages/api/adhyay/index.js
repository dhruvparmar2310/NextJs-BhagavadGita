import { adhyay } from "@/data/adhyay";

export default function handler (req, res) {
    res.status(200).json(adhyay)
}