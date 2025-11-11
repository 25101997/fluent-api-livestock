using Domain.Entities;

namespace Domain.Interfaces
{
    public interface IAnimalOriginRepository
    {
        Task<IEnumerable<AnimalOrigin>> GetAllAsync();
        Task<AnimalOrigin?> GetByIdAsync(int id);
    }
}
