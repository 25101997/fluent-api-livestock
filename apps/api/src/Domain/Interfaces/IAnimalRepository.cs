using Domain.Entities;

namespace Domain.Interfaces
{
    public interface IAnimalRepository
    {
        Task<IEnumerable<Animal>> GetAllAsync();
        Task<Animal?> GetByIdAsync(int id);
        Task<Animal> AddAsync(Animal entity);
        Task UpdateAsync(Animal entity);
        Task DeleteAsync(int id);
    }
}
