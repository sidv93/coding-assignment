import express from 'express';
import { fetchContacts, deleteContacts } from './handlers';
import { authenticateUser } from './middlewares';
const router = express.Router();

router.get('/api/v1/contacts', authenticateUser, fetchContacts);
router.delete('/api/v1/contacts/:id', authenticateUser, deleteContacts);

export default router;
