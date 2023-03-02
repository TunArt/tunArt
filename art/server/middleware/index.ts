import { Request, Response, NextFunction } from 'express';
import * as admin from 'firebase-admin';

interface CunstomRequest extends Request {
    user?:any
}
 export default function authMiddleware(req: CunstomRequest, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (typeof token === 'string') {
    admin.auth().verifyIdToken(token)
      .then((decodedToken) => {
        req.user = decodedToken;
        next();
      })
      .catch(() => {
        res.status(401).send('Unauthorized');
      });
  } else {
    res.status(401).send('Unauthorized');
  }
}

