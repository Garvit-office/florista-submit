const { Router } = require('express');

const router = Router();

router.get('/health', (req, res) => {
  res.json({
    ok: true,
    service: 'florista-mern',
    message: 'MERN backend is running',
  });
});

router.get('/', (req, res) => {
  res.json({
    service: 'florista-mern',
    routes: ['/health'],
  });
});

module.exports = router;
