// import { NextApiRequest, NextApiResponse } from 'next';
// import { MarkerType } from '@/models/Map/MarkerType';

// let markers: MarkerType[] = [];

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     const { method } = req;

//     switch (method) {
//         case 'GET':
//             res.status(200).json(markers);
//             break;
//         case 'POST':
//             const newMarker: MarkerType = req.body;
//             markers.push(newMarker);
//             res.status(201).json(newMarker);
//             break;
//         case 'DELETE':
//             markers = [];
//             res.status(204).end();
//             break;
//         default:
//             res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
//             res.status(405).end(`Method ${method} Not Allowed`);
//     }
// }
