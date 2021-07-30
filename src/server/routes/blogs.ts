import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ msg: 'TEST BLOGS GET' });
});

export default router;