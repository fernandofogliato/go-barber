import AvailableService from '../services/AvailableService';

class AvailableController {
  async index(req, res) {
    const available = await AvailableService.run({
      provider_id: req.params.providerId,
      date: req.query,
    });

    return res.json(available);
  }
}

export default new AvailableController();
