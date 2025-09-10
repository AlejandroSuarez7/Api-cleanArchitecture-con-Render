class CompraRepository {
    constructor(model) {
        this.model = model;
    }
    async create(compra) { return await this.model.create(compra); }
    async findAll() { return await this.model.find(); }
    async findById(id) { return await this.model.findById(id); }
    async update(id, compra) { return await this.model.findByIdAndUpdate(id, compra, { new: true }); }
    async delete(id) { return await this.model.findByIdAndDelete(id); }
}
module.exports = CompraRepository;
