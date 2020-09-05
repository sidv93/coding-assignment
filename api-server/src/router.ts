import express from 'express';
import { fetchContacts, deleteContacts } from './handlers';
const router = express.Router();

router.get('/api/v1/contacts', fetchContacts);
router.delete('/api/v1/contacts/:id', deleteContacts);

export default router;
