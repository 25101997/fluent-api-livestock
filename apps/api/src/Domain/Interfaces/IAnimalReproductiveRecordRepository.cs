using Domain.Entities;

namespace Domain.Interfaces
{
    public interface IAnimalReproductiveRecordRepository
    {
        Task<IEnumerable<AnimalReproductiveRecord>> GetAllAsync();
        Task<AnimalReproductiveRecord?> GetByIdAsync(int id);
        Task<AnimalReproductiveRecord> AddAsync(AnimalReproductiveRecord entity);
        Task UpdateAsync(AnimalReproductiveRecord entity);
        Task DeleteAsync(int id);
    }
}
