class CompraController {
    constructor(useCase) { this.useCase = useCase; }
    async create(req, res) {
        try {
        const compra = await this.useCase.createCompra(req.body);
        res.status(201).json(compra);
        } catch (e) { res.status(400).json({ error: e.message }); }
    }
    async getAll(req, res) {
        const compras = await this.useCase.getCompras();
        res.json(compras);
    }
    async getById(req, res) {
        const compra = await this.useCase.getCompraById(req.params.id);
        if (compra) res.json(compra);
        else res.status(404).json({ error: 'No encontrada' });
    }
    async update(req, res) {
        const compra = await this.useCase.updateCompra(req.params.id, req.body);
        res.json(compra);
    }
    async delete(req, res) {
        await this.useCase.deleteCompra(req.params.id);
        res.status(204).send();
    }
}
module.exports = CompraController;
