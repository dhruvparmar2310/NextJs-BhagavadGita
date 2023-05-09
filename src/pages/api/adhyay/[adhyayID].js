import { adhyay } from "@/data/adhyay";

export default function handler (req, res) {
    const {adhyayID} = req.query
    const adhyay_data = adhyay.find(data => data.id === adhyayID)
    res.status(200).json(adhyay_data)
}