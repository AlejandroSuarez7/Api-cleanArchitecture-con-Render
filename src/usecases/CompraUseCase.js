class CompraUseCase {
  constructor(repository) { this.repository = repository; }
  createCompra(data) { return this.repository.create(data); }
  getCompras() { return this.repository.findAll(); }
  getCompraById(id) { return this.repository.findById(id); }
  updateCompra(id, data) { return this.repository.update(id, data); }
  deleteCompra(id) { return this.repository.delete(id); }
}
module.exports = CompraUseCase;
